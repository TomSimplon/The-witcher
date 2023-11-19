<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\QuestionType;
use App\Entity\Question;
use App\Form\CommentaireType;
use App\Entity\Commentaire;
use App\Entity\Article;
use App\Form\AnswerType;
use App\Entity\Réponse;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\QuestionRepository;
use App\Repository\RéponseRepository;

class HomepageController extends AbstractController
{
    #[Route('/', name: 'app_homepage')]
    public function index(ArticleRepository $articleRepository): Response
    {
        $articles = $articleRepository->findBy([], ['date' => 'DESC'], 4);
        return $this->render('homepage/index.html.twig', [
            'controller_name' => 'HomepageController',
            'articles' => $articles,
        ]);
    }

    #[Route('/user', name: 'app_user')]
    public function user(): Response
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
        return $this->render('homepage/user.html.twig', [
            'controller_name' => 'HomepageController',
        ]);
    }

    #[Route('/articles', name: 'app_articles')]
    public function articles(ArticleRepository $articleRepository): Response
    {
        $articles = $articleRepository->findAll();

        return $this->render('homepage/articles.html.twig', [
            'controller_name' => 'HomepageController',
            'articles' => $articles,
        ]);
    }

    #[Route('/article/{id}', name: 'app_article')]
    public function article(EntityManagerInterface $entityManager, string $id, Request $request): Response
    {
        $articlesRepository = $entityManager->getRepository(Article::class);
        $article = $articlesRepository->find($id);

        if(!$article) {
            return $this->redirectToRoute('app_articles');
        } 

        $user = $this->getUser();
        if ($user) {
            $commentaire = new Commentaire();
            $form = $this->createForm(CommentaireType::class, $commentaire);
            $form->handleRequest($request);
    
            if ($form->isSubmitted() && $form->isValid()) {
                $commentaire->setArticle($article);
                $commentaire->setUser($user);
                $commentaire->setDate(new \DateTime());
                $clientIp = $request->getClientIp();
                $commentaire->setIp($clientIp);
                $entityManager->persist($commentaire);
                $entityManager->flush();
    
                return $this->redirectToRoute('app_article', ['id' => $id]);
            }
    
            $formView = $form->createView();
        } else {
            $formView = null;
        }

        $commentaires = $article->getCommentaires();

        return $this->render('homepage/article.html.twig', [
            'article' => $article,
            'commentaireForm' => $formView,
            'controller_name' => 'HomepageController',
            'commentaires' => $commentaires,
        ]);
    }

    #[Route('/forum', name: 'app_forum')]
    public function forum(QuestionRepository $questionRepository): Response
    {
        $questions = $questionRepository->findBy([], ['date' => 'DESC']);
        return $this->render('homepage/forum.html.twig', [
            'controller_name' => 'HomepageController',
            'questions' => $questions,
        ]);
    }

    #[Route('/question', name: 'app_question')]
    public function question(QuestionRepository $questionRepository, EntityManagerInterface $entityManager, Request $request): Response
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        $question = new Question();

        $form = $this->createForm(QuestionType::class, $question);
        $form->handleRequest($request);

        $user = $this->getUser();

        $questions = $questionRepository->findAll();

        if ($form->isSubmitted() && $form->isValid()) {
            $question->setUser($user);
            $question->setDate(new \DateTime());
            $clientIp = $request->getClientIp();
            $question->setIp($clientIp);
            $entityManager->persist($question);
            $entityManager->flush();

            return $this->redirectToRoute('app_forum');
        }

        $formView = $form->createView();

        return $this->render('homepage/question.html.twig', [
            'controller_name' => 'HomepageController',
            'questionForm' => $formView,
            'questions' => $questions,
        ]);
    }

    #[Route('/question/edit/{id}', name: 'app_question_edit')]
    public function editQuestion(Question $question, Request $request, EntityManagerInterface $entityManager): Response
    {
    if ($question->getUser() !== $this->getUser()) {
        return $this->redirectToRoute('app_forum');
    }

    $form = $this->createForm(QuestionType::class, $question);

    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        $entityManager->flush();

        return $this->redirectToRoute('app_réponse', ['id' => $question->getId()]);
    }

    return $this->render('homepage/question.html.twig', [
        'questionForm' => $form->createView(),
    ]);
   }

   #[Route('/question/delete/{id}', name: 'app_question_delete')]
   public function deleteQuestion(EntityManagerInterface $entityManager, QuestionRepository $questionRepository, string $id): Response
   {
    $question = $questionRepository->find($id);

    if (!$question) {
        return $this->redirectToRoute('app_forum');
    }

    $entityManager->remove($question);
    $entityManager->flush();

    $this->addFlash('success', 'Votre question a bien été supprimée');

    return $this->redirectToRoute('app_forum');
    }

    #[Route('/réponse/{id}', name: 'app_réponse')]
    public function réponse(EntityManagerInterface $entityManager, QuestionRepository $questionRepository, string $id, Request $request): Response
    {
    $question = $questionRepository->find($id);

    if (!$question) {
        return $this->redirectToRoute('app_forum');
    }

    $user = $this->getUser();
    if ($user) {
        $answer = new Réponse();
        $form = $this->createForm(AnswerType::class, $answer);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $answer->setQuestion($question);
            $answer->setUser($user);
            $answer->setDate(new \DateTime());
            $clientIp = $request->getClientIp();
            $answer->setIp($clientIp);
            $entityManager->persist($answer);
            $entityManager->flush();

            return $this->redirectToRoute('app_réponse', ['id' => $id]);
        }

        $formView = $form->createView();
    } else {
        $formView = null;
    }

    $answers = $question->getRPonses();

    return $this->render('homepage/réponse.html.twig', [
        'question' => $question,
        'answerForm' => $formView,
        'controller_name' => 'HomepageController',
        'answers' => $answers,
    ]);
    }

    #[Route('/réponse/edit/{id}', name: 'app_réponse_edit')]
    public function editAnswer(Réponse $answer, Request $request, EntityManagerInterface $entityManager): Response
    {
    if ($answer->getUser() !== $this->getUser()) {
        return $this->redirectToRoute('app_forum');
    }

    $form = $this->createForm(AnswerType::class, $answer);

    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        $entityManager->flush();

        $questionId = $answer->getQuestion()->getId();

        return $this->redirectToRoute('app_réponse', ['id' => $questionId]);
    }

    $question = $answer->getQuestion();

    return $this->render('homepage/réponse.html.twig', [
        'answerForm' => $form->createView(),
        'question' => $question, 
        'answers' => [$answer], 
    ]);
   }

   #[Route('/réponse/delete/{id}', name: 'app_réponse_delete')]
   public function deleteAnswer(EntityManagerInterface $entityManager, RéponseRepository $answerRepository, string $id): Response
   {
    $answer = $answerRepository->find($id);

    if (!$answer) {
        return $this->redirectToRoute('app_forum');
    }

    $questionId = $answer->getQuestion()->getId();

    $entityManager->remove($answer);
    $entityManager->flush();

    $this->addFlash('success', 'Votre réponse a bien été supprimée');

    return $this->redirectToRoute('app_réponse', ['id' => $questionId]);
    }

    #[Route('/search', name: 'search')]
    public function search(EntityManagerInterface $entityManager, Request $request): Response
    {
    $query = $request->query->get('query');

    $articlesRepository = $entityManager->getRepository(Article::class);
    $articles = $articlesRepository->createQueryBuilder('a')
        ->where('a.title LIKE :query')
        ->setParameter('query', '%' . $query . '%')
        ->getQuery()
        ->getResult();

    return $this->render('homepage/articles.html.twig', [
        'controller_name' => 'HomepageController',
        'articles' => $articles,
        'query' => $query,
    ]);
   }

   #[Route('/search-questions', name: 'search_questions')]
   public function searchQuestions(QuestionRepository $questionRepository, Request $request): Response
   {
    $query = $request->query->get('query');
    $questions = $questionRepository->createQueryBuilder('q')
        ->where('q.title LIKE :query')
        ->setParameter('query', '%' . $query . '%')
        ->getQuery()
        ->getResult();

    return $this->render('homepage/forum.html.twig', [
        'questions' => $questions,
        'query' => $query,
    ]);
    }

}

