<?php

namespace App\Security;

use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Http\Authenticator\AbstractLoginFormAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\CsrfTokenBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\RememberMeBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Credentials\PasswordCredentials;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\Util\TargetPathTrait;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Validator\Constraints\Email as EmailConstraint;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\RequestStack;


class UserAuthenticator extends AbstractLoginFormAuthenticator
{
    use TargetPathTrait;

    public const LOGIN_ROUTE = 'app_login';

    private ValidatorInterface $validator;

    private UserRepository $userRepository;

    private RequestStack $requestStack;

    public function __construct(
        private UrlGeneratorInterface $urlGenerator,
        ValidatorInterface $validator,
        UserRepository $userRepository,
        RequestStack $requestStack
    ) {
        $this->validator = $validator;
        $this->userRepository = $userRepository;
        $this->requestStack = $requestStack;
    }

    public function authenticate(Request $request): Passport
    {
        $email = $request->request->get('email', '');
        $emailConstraint = new EmailConstraint();
        $errors = $this->validator->validate($email, $emailConstraint);
        $user = $this->userRepository->findOneByEmail($email);

        if ($user && !$user->isIsActive()) {
            throw new CustomUserMessageAuthenticationException('Votre compte est bloqué');
        }

        if (count($errors) > 0) {
            throw new CustomUserMessageAuthenticationException('L\'adresse email n\'est pas valide.');
        }

        return new Passport(
            new UserBadge($email),
            new PasswordCredentials($request->request->get('password', '')),
            [
                new CsrfTokenBadge('authenticate', $request->request->get('_csrf_token')),
            ]
        );
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        // Regénération de l'ID de session pour la sécurité
        session_regenerate_id();

        // Obtention de l'objet Session
        $session = $this->requestStack->getSession();

        // Récupération des informations de l'utilisateur
        $user = $token->getUser();

        // Stockage des informations de l'utilisateur dans la session
        $session->set('userId', $user->getId());
        $session->set('userEmail', $user->getEmail());

        // Redirection vers la page cible ou une page par défaut
        if ($targetPath = $this->getTargetPath($request->getSession(), $firewallName)) {
            return new RedirectResponse($targetPath);
        }

        return new RedirectResponse($this->urlGenerator->generate('app_user'));
    }


    protected function getLoginUrl(Request $request): string
    {
        return $this->urlGenerator->generate(self::LOGIN_ROUTE);
    }
}
