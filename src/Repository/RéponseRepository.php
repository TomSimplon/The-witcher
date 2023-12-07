<?php

namespace App\Repository;

use App\Entity\Réponse;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Réponse>
 *
 * @method Réponse|null find($id, $lockMode = null, $lockVersion = null)
 * @method Réponse|null findOneBy(array $criteria, array $orderBy = null)
 * @method Réponse[]    findAll()
 * @method Réponse[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RéponseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Réponse::class);
    }

//    /**
//     * @return Réponse[] Returns an array of Réponse objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('r.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Réponse
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
