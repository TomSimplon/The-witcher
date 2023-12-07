# The Witcher - Fan Site

- Maquette figma : https://www.figma.com/file/qxmFWt8DEZSjZEUsoa0Ra1/the-witcher?type=design&node-id=0%3A1&mode=design&t=AGJ3bUGyIonWNGyC-1

- Initaliser le projet :

```shell
mv .env.dist .env #Pensez à renseigner votre base de données et votre API Mailtrap dans le fichier. Si vous n'avez pas d'API vous pouvez la créer via ce tutoriel : https://www.youtube.com/watch?v=28vEoln96PY
```

- Installer les composants :

```shell
symfony composer req
```

```shell
symfony composer req encore
```

```shell
npm install node-sass sass-loader --save-dev
```

```shell
composer require symfony/messenger symfony/mailer
```

```shell
composer require cocur/slugify
```

```shell
composer require --dev orm-fixtures
```

```shell
composer require fakerphp/faker
```

- Démarrer le projet :

```shell
symfony server:start
```

```shell
npm run watch
```

- Configurer la base de données :

```shell
php bin/console d:d:c
```

```shell
importer le fichier witcher.sql dans votre phpMyAdmin
```

```shell
php bin/console doctrine:fixtures:load
```

- Se connecter à l'espace administrateur :

```shell
Route : /admin
email : admin@admin.fr
password : azerty123$
```

## Contexte du projet

- L'objectif principal de ce projet est de développer un fan site inspiré de la célèbre saga d’héroïc fantasy : The Witcher. Le site vise à faire découvrir l’Univers de la saga à tous types d’utilisateurs, aussi bien les adeptes que les non-connaisseurs.

- Ce site est composé d’une page d'accueil esthétique, d’un blog et d’un forum pour les débutants, d’un quiz pour les initiés qui voudraient tester leurs connaissances, d'un espace administrateur et d’une page utilisateur.

- Pour développer ce site, mon choix s'est porté sur le framework Symfony pour la partie backend, et Twig/JavaScript/CSS pour toute la partie front. L’administration du site est gérée par EasyAdmin afin que l’administrateur puisse facilement implémenter de nouveaux articles, gérer ses utilisateurs, gérer les commentaires, le contenu et les réponses du forum.

- C'est un projet qui s'appuie sur une architecture model-view-controller (MVC).

## Critères de performance

- Respect du cahier des charges techniques et fonctionnelles
- L’application respecte le modèle MVC
- Un jeu de fixtures pour peupler la base de données
- Les fonctionnalités attendues ne produisent pas d’erreurs
- Les pages sont fonctionnelles
- Le site est responsif
- Respect des bonnes pratiques de nommages / indentation / sémantique
