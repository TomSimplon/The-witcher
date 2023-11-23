<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\User;
use App\Entity\Role;
use Doctrine\Persistence\ObjectManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends AbstractFixtures
{
    private $entityManager;
    private $passwordHasher;

    public function __construct(EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordHasher)
    {
        $this->entityManager = $entityManager;
        $this->passwordHasher = $passwordHasher;
    }

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create();

        $userRole = $this->entityManager->getRepository(Role::class)->findOneBy(['name' => 'utilisateur']);
        if (!$userRole) {
            throw new \Exception('Role "utilisateur" non trouvé');
        }

        for ($i = 0; $i < 10; $i++) {
            $user = new User();
            $user->setEmail('user' . $i . '@example.com');
            $password = $this->passwordHasher->hashPassword($user, 'password');
            $user->setPassword($password);
            $user->setPseudonym('User' . $i);
            $user->setGDPR(new \DateTime());
            $user->setIp($faker->ipv4);
            $user->setRole($userRole);
            $manager->persist($user);

            $this->addReference('user_' . $i, $user);
        }

        $manager->flush();
    }
}