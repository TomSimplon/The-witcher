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
use App\Form\UserType;
use App\Form\AnswerType;
use App\Entity\Réponse;
use App\Repository\CommentaireRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\QuestionRepository;
use App\Repository\RéponseRepository;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

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

    #[Route('/user/edit', name: 'user_edit')]
    public function editUser(Request $request, EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordHasher): Response
    {
    
    $user = $this->getUser();

    if (!$user) {
        return $this->redirectToRoute('app_login'); 
    }

    $form = $this->createForm(UserType::class, $user);

    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        $plainPassword = $form->get('plainPassword')->getData();

        if ($plainPassword) {
            $hashedPassword = $passwordHasher->hashPassword($user, $plainPassword);
            $user->setPassword($hashedPassword);
        }

        $entityManager->flush();

        return $this->redirectToRoute('app_user');
    }

    return $this->render('homepage/userForm.html.twig', [
        'userForm' => $form->createView(),
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

    #[Route('/article/{slug}', name: 'app_article')]
    public function article(CommentaireRepository $commentaireRepository, EntityManagerInterface $entityManager, string $slug, Request $request): Response
    {
        $articlesRepository = $entityManager->getRepository(Article::class);
        $article = $articlesRepository->findOneBy(['slug' => $slug]);

        if(!$article) {
            return $this->redirectToRoute('app_articles');
        } 

        $contenu = htmlspecialchars($article->getContenu());
        $decodedContent = html_entity_decode($contenu);

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
    
                return $this->redirectToRoute('app_article', ['slug' => $slug, '_fragment' => 'commentaires']);
            }
    
            $formView = $form->createView();
        } else {
            $formView = null;
        }

        $commentaires = $commentaireRepository->findBy(['article' => $article], ['date' => 'DESC']);

        return $this->render('homepage/article.html.twig', [
            'article' => $article,
            'decodedContent' => $decodedContent,
            'commentaireForm' => $formView,
            'controller_name' => 'HomepageController',
            'commentaires' => $commentaires,
        ]);
    }

    #[Route('/comment/edit/{id}', name: 'app_comment_edit')]
    public function editComment(Commentaire $commentaire, Request $request, EntityManagerInterface $entityManager): Response
    {
    $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

    if ($commentaire->getUser() !== $this->getUser()) {
        return $this->redirectToRoute('app_article');
    }

    $form = $this->createForm(CommentaireType::class, $commentaire);

    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        $entityManager->flush();

        $articleSlug = $commentaire->getArticle()->getSlug();

        return $this->redirectToRoute('app_article', ['slug' => $articleSlug, '_fragment' => 'commentaires']);
    }

    $article = $commentaire->getArticle();

    return $this->render('homepage/article.html.twig', [
        'commentaireForm' => $form->createView(),
        'article' => $article, 
        'commentaires' => [$commentaire], 
    ]);
   }

   #[Route('/comment/delete/{id}', name: 'app_comment_delete')]
   public function deleteComment(EntityManagerInterface $entityManager, CommentaireRepository $commentaireRepository, string $id): Response
   {
    $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
    $commentaire = $commentaireRepository->find($id);

    if (!$commentaire) {
        return $this->redirectToRoute('app_articles');
    }

    $articleId = $commentaire->getArticle()->getId();

    $entityManager->remove($commentaire);
    $entityManager->flush();

    $this->addFlash('success', 'Votre commentaire a bien été supprimé');

    return $this->redirectToRoute('app_article', ['id' => $articleId, '_fragment' => 'commentaires']);
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
    $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

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
    $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

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

    $answers = $entityManager->getRepository(Réponse::class)
        ->findBy(['question' => $question], ['date' => 'DESC']);

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
    $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

    if ($answer->getUser() !== $this->getUser()) {
        return $this->redirectToRoute('app_forum');
    }

    $form = $this->createForm(AnswerType::class, $answer);

    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        $entityManager->flush();

        $questionId = $answer->getQuestion()->getId();

        return $this->redirectToRoute('app_réponse', ['id' => $questionId, '_fragment' => 'réponses']);
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
    $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

    $answer = $answerRepository->find($id);

    if (!$answer) {
        return $this->redirectToRoute('app_forum');
    }

    $questionId = $answer->getQuestion()->getId();

    $entityManager->remove($answer);
    $entityManager->flush();

    $this->addFlash('success', 'Votre réponse a bien été supprimée');

    return $this->redirectToRoute('app_réponse', ['id' => $questionId, '_fragment' => 'réponses']);
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

    #[Route('/quiz', name: 'app_quiz')]
    public function quiz(): Response
    {
        return $this->render('homepage/quiz.html.twig', [
            'controller_name' => 'HomepageController',
        ]);
    }

}

