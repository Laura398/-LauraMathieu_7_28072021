# LauraMathieu_7_28072021 - Projet Groupomania #

Il s'agit du dernier projet de la formation Développeur Web d'OpenClassrooms.

### Backend ###
Se rendre dans le dossier backend et exécuter npm install pour installer toutes les dépendances.
Ajouter le ficher .env reçu avec le lien du repository.
Puis exécuter nodemon server pour lancer le serveur nodejs.

### Frontend ###
Se rendre dans le dossier backend et exécuter npm install pour installer toutes les dépendances.
Lancer le serveur vuejs avec npm run serve. Le site sera accessible en local avec l'adresse http://localhost:8080/.

### Database ###
Le site fonctionne avec une database MySQL.
Créer une base de données nommée "groupomania" dans MySQL.
Deux possibilités :
Soit enregistrer un utilisateur nommé development et ayant pour mot de passe password.
Soit se connecter avec un utilisateur différent. Dans ce cas, il faudra modifier les informations dans le fichier backend/config/config.json, dans la partie development, et renseigner votre username et password.
Un fichier pour initialisation de la database se trouve dans le dossier database.
