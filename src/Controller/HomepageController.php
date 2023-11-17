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
            return $this->render('homepage/article.html.twig');
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
            // L'utilisateur n'est pas connecté, donc on ne crée pas le formulaire
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
    public function forum(): Response
    {
        return $this->render('homepage/forum.html.twig', [
            'controller_name' => 'HomepageController',
        ]);
    }

    #[Route('/question', name: 'app_question')]
    public function question(): Response
    {
        $question = new Question();

        $form = $this->createForm(QuestionType::class, $question);

        return $this->render('homepage/question.html.twig', [
            'questionForm' => $form
        ]);
    }

    #[Route('/réponse', name: 'app_réponse')]
    public function réponse(): Response
    {
        $answer = new Réponse();

        $form = $this->createForm(AnswerType::class, $answer);

        return $this->render('homepage/réponse.html.twig', [
            'answerForm' => $form,
            'controller_name' => 'HomepageController',
        ]);
    }
}

