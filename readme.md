# Projet de gestion des invités

Ce projet est une application de gestion des invités pour un événement. Il permet d'ajouter, de mettre à jour, de supprimer et de rechercher des invités. L'application utilise des WebSockets pour des mises à jour en temps réel et intègre une base de données SQLite pour stocker les données des invités.

## Technologies utilisées

- Vue.js : Framework JavaScript pour la partie front-end de l'application.
- Vuex : Bibliothèque de gestion d'état pour Vue.js, utilisée pour gérer l'état global de l'application.
- WebSocket : Protocole de communication bidirectionnelle en temps réel entre le navigateur et le serveur.
- SQLite : Système de gestion de base de données relationnelle utilisé pour stocker les données des invités.

## Fonctionnalités

- Ajout d'invités avec des informations telles que le nom, le numéro de téléphone, le statut, et la présence.
- Mise à jour des informations d'un invité existant.
- Suppression d'un invité de la liste.
- Recherche d'invités par nom, numéro de téléphone ou statut.
- Affichage en temps réel des mises à jour grâce à l'utilisation de WebSockets.

## Contribution

Les contributions au projet sont les bienvenues. Si vous souhaitez contribuer, veuillez suivre ces étapes :

1. Fork du dépôt
2. Créez une branche pour votre fonctionnalité : `git checkout -b fonctionnalite-incroyable`
3. Committez vos modifications : `git commit -m 'Ajoutez une fonctionnalité incroyable'`
4. Poussez la branche : `git push origin fonctionnalite-incroyable`
5. Soumettez une demande de tirage