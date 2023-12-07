<?php

namespace App\DataFixtures;

use App\Entity\Commentaire;
use App\Entity\User;
use App\Entity\Article;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class CommentFixtures extends AbstractFixtures implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {

        $articles = $manager->getRepository(Article::class)->findAll();

        if (!empty($articles)) {
            for ($i = 0; $i < 10; $i++) {
                $comment = new Commentaire();
                $comment->setContenu($this->faker->word());
                $randomArticle = $this->faker->randomElement($articles);
                $comment->setArticle($randomArticle);
                $comment->setUser($this->getReference("user_" . $this->faker->numberBetween(0, 9)));
                $comment->setDate(new \DateTime());
                $comment->setIp($this->faker->ipv4);
                $manager->persist($comment);
            }
        }

        $manager->flush();
    }

    public function getDependencies()
    {
     return[
        UserFixtures::class,
     ];   
    }
}