<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * User
 *
 * @ORM\Table(name="User")
 * @ORM\Entity
 */
class User
{
    /**
     * @var string
     *
     * @ORM\Column(name="id", type="string", length=36, nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string|null
     *
     * @ORM\Column(name="pseudonyme", type="string", length=45, nullable=true)
     */
    private $pseudonyme;

    /**
     * @var string|null
     *
     * @ORM\Column(name="email", type="string", length=45, nullable=true)
     */
    private $email;

    /**
     * @var string|null
     *
     * @ORM\Column(name="mot de passe", type="string", length=255, nullable=true)
     */
    private $motDePasse;

    /**
     * @var string|null
     *
     * @ORM\Column(name="ip", type="text", length=65535, nullable=true)
     */
    private $ip;


}
