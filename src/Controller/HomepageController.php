<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\QuestionType;
use App\Entity\Question;
use App\Form\CommentaireType;
use App\Entity\Commentaire;

class HomepageController extends AbstractController
{
    #[Route('/', name: 'app_homepage')]
    public function index(): Response
    {
        return $this->render('homepage/index.html.twig', [
            'controller_name' => 'HomepageController',
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
    public function articles(): Response
    {
        return $this->render('homepage/articles.html.twig', [
            'controller_name' => 'HomepageController',
        ]);
    }

    #[Route('/article', name: 'app_article')]
    public function article(): Response
    {
        $commentaire = new Commentaire();

        $form = $this->createForm(CommentaireType::class, $commentaire);

        return $this->render('homepage/article.html.twig', [
            'commentaireForm' => $form,
            'controller_name' => 'HomepageController',
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
}

