<?php

namespace App\DataFixtures;

use App\Entity\Réponse;
use App\Entity\User;
use App\Entity\Question;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class AnswerFixtures extends AbstractFixtures implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {

        $questions = $manager->getRepository(Question::class)->findAll();

        if (!empty($questions)) {
            for ($i = 0; $i < 10; $i++) {
                $answer = new Réponse();
                $answer->setContenu($this->faker->word());
                $randomQuestion = $this->faker->randomElement($questions);
                $answer->setQuestion($randomQuestion);
                $answer->setUser($this->getReference("user_" . $this->faker->numberBetween(0, 9)));
                $answer->setDate(new \DateTime());
                $answer->setIp($this->faker->ipv4);
                $manager->persist($answer);
            }
        }

        $manager->flush();
    }

    public function getDependencies()
    {
     return[
        UserFixtures::class,
        QuestionFixtures::class,
     ];   
    }
}