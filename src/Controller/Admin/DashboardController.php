<?php

namespace App\Controller\Admin;

use App\Entity\Article;
use App\Entity\Commentaire;
use App\Entity\Question;
use App\Entity\Role;
use App\Entity\Réponse;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;
use Symfony\UX\Chartjs\Model\Chart;

class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
       // return parent::index();

        // Option 1. You can make your dashboard redirect to some common page of your backend
        
        $adminUrlGenerator = $this->container->get(AdminUrlGenerator::class);
        return $this->redirect($adminUrlGenerator->setController(ArticleCrudController::class)->generateUrl());

        // Option 2. You can make your dashboard redirect to different pages depending on the user
        //
        // if ('jane' === $this->getUser()->getUsername()) {
        //     return $this->redirect('...');
        // }

        // Option 3. You can render some custom template to display a proper dashboard with widgets, etc.
        // (tip: it's easier if your template extends from @EasyAdmin/page/content.html.twig)
        //
        // return $this->render('some/path/my-dashboard.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('The Witcher Project');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        // yield MenuItem::linkToCrud('The Label', 'fas fa-list', EntityClass::class);
        yield MenuItem::subMenu("User")
            ->setSubItems([
                MenuItem::linkToCrud('List', 'fas fa-users', User::class),
                MenuItem::linkToCrud('Ajouter', 'fas fa-user-plus', User::class)
                    ->setAction('new')
            ]);
    
        yield MenuItem::subMenu("Article")
            ->setSubItems([
                MenuItem::linkToCrud('List', 'fas fa-newspaper', Article::class),
                MenuItem::linkToCrud('Ajouter', 'fas fa-plus', Article::class)
                    ->setAction('new')
            ]);
    
        yield MenuItem::subMenu("Commentaire")
            ->setSubItems([
                MenuItem::linkToCrud('List', 'fas fa-list', Commentaire::class),
            ]);
    
        yield MenuItem::subMenu("Question")
            ->setSubItems([
                MenuItem::linkToCrud('List', 'fas fa-shopping-cart', Question::class),
            ]);
    
        yield MenuItem::subMenu("Réponse")
            ->setSubItems([
                MenuItem::linkToCrud('List', 'fas fa-file-invoice', Réponse::class),
            ]);
    
        yield MenuItem::subMenu("Role")
            ->setSubItems([
                MenuItem::linkToCrud('List', 'fas fa-envelope', Role::class),
                MenuItem::linkToCrud('Ajouter', 'fas fa-plus', Role::class)
                    ->setAction('new')
            ]);

        yield MenuItem::linkToUrl('Symfony', 'fa-solid fa-house', '/');
        yield MenuItem::linkToUrl('Github', 'fab fa-github', 'https://github.com/TomSimplon/The-witcher');
    
    }
    }

