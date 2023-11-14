<?php

namespace App\Form;

use App\Entity\Réponse;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Validator\Constraints\Length;

class AnswerType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('contenu', TextareaType::class, [
                'attr' => ['placeholder' => 'Votre réponse...'],
                'constraints' => [
                    new Length([
                        'max' => 2000,
                        'maxMessage' => 'Votre réponse ne peut pas dépasser 2000 caractères.'
                    ]),
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Réponse::class,
        ]);
    }
}
