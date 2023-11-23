<?php

namespace App\DataFixtures;

use App\Entity\Question;
use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class QuestionFixtures extends AbstractFixtures implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {

            for ($i = 0; $i < 10; $i++) {
                $question= new Question();
                $question->setTitle($this->faker->word());
                $question->setContenu($this->faker->word());
                $question->setUser($this->getReference("user_" . $this->faker->numberBetween(0, 9)));
                $question->setDate(new \DateTime());
                $question->setIp($this->faker->ipv4);
                $manager->persist($question);
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