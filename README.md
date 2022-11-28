## Qu'est-ce que Skymood ?

Un site permettant de connaître la météo du moment et avoir les prévisions des 24 prochaines heures le tout par tranches de 3 heures et ce pour la totalité des villes du monde.

## Pourquoi Skymood ?

Un besoin de pratique du Javascript avant d'aborder le framework Angular mais en faisant quelque chose de concret et complet.

## De quoi est composé le projet ?

De 2 apis:

[Geoapify](https://www.geoapify.com/) qui va permettre de retourner des coordonnées géographiques permettant d'avoir un positionnement plus précis et respecter les bonnes pratiques demandé par l'api de prévisions météorologiques.

[Openweathermap](https://openweathermap.org/) qui elle va fournir des données météorologiques très complètes et précises.
Il suffit juste de faire quelques convertions simples comme pour la vitesse du vent, les latitudes et longitudes ainsi que pour les fuseaux horaires.

Pour le reste c'est du vanilla !
Il est construit sur une structure type MVC comme ceci:
**Repository**: Contient mes fetch aux différentes apis.
**Controller**: Gère les données en faisant les échanges entre repository et view mais également aux fonctions situées dans Other comme pour créer des chemins d'images dynamiquement.
**View**: Ici c'est la création des affichages, dynamiquement en fonction des données qui sont envoyés par le controller.
**Model**: Les données récupérées du fichier JSON retourné par les apis.
**Other**: Tout ce qui va être fonction annexes.
**Utils**: Stockage de données créés à la main comme les ISO des pays et fonction générique pas forcément propre au projet en cours.

Il y a également un stockage fait dans le session storage pour qu'il y soit stocké le nom de la ville recherché par l'utilisateur pour que s'il cherche à nouveau la même ville, aucune appel à l'api ne soit effectué.

Première utilisation de scss.

## Les possible améliorations ?

Un meilleurs nommage des fonctions et variables et un découpage plus propre du code !

Bonne visite !
