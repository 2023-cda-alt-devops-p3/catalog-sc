##### Url du site: https://diagrammes-uml-merise.netlify.app

# Liste des diagrammes UML et Merise

### Merise

- MCD (Modèle conceptuel de données)

- MLD (Modèle logique de données)

- MPD (Modèle physique de données)

### UML

##### Diagrammes de structures

- **Classes**

- **Objets**

- **Composants**

- **Déploiement**

- Paquets

- Structure composite

- Profils

##### Diagrammes de comportement

- **Cas d'utilisations**

- **États-transitions**

- Activité

##### Diagrammes d'interactions

- **Séquences**

- Communication

- Global d'interaction

- Temps

# Critères d'évaluation

## Git

- [:heavy_check_mark:] Versionné régulièrement et de manière atomique (Plusieurs "commit" par jour pendant toute la durée du projet) => Vérif Git
- [:heavy_check_mark:] Historique de commit propre => (éviter les doublons, les commits inutiles)
- [:heavy_check_mark:] Mise en plance d'une branche de développement supplémentaire, voire plusieurs selon l'architecture du site => Vérif sur Git
- [:heavy_check_mark:] Fonction "pull request" => Check sur Github

## Sécurité

- [:x:] Prévenir les vulnérabilités principales (cross site, injection sql, protection des tokens, validation des données) => GoogleSearchConsole, Sucuri
- [:x:] Respect de la protection des données (RGPD, encapsulation)
- [:x:] Utilisation des chemins absolus

## SEO

- [:heavy_check_mark:] Mise en place de la stratégie SEO : données structurées, ...
- [:x:] PWA (Progressive Web App) : services workers (microphone, localisation, ...)
- [:heavy_check_mark:] HTML sémantique

## Performance

- [:heavy_check_mark:] Bon résultat sur PageSpeed Insights
- [:heavy_check_mark:] Optimisation images (surtout mobile)
- [:heavy_check_mark:] Limiter le nombre de requêtes

## Accessibilité

- [:heavy_check_mark:] Accessibilité : title, aria-label, alt
- [:x:] Optimisation des images : poids et formats adaptés
- [:heavy_check_mark:] Fournir un site web avec une bonne expérience utilisateur
- [:heavy_check_mark:] Texte lisible : interlinéage suffisant, taille des polices proportionnelles, contraste des couleurs optimale, ...

## Architecture

- [:x:] Bons principes de structuration respectés, y compris pour le web mobile => vérif des balises (body, header, navbar), et des noms de classes CSS, variables, media queries
- [:heavy_check_mark:] Eviter les répétitions en utilisant des fonctions => check du code source

## Contenu

- [:heavy_check_mark:] Contenu vérifié : informations croisées, résumé de plusieurs sources, ...
- [:x:] Détail des étapes pour chaque diagramme

## UI/UX

- [:heavy_check_mark:] Features d'animations, transitions, barre de navigation => vérif du site
- [:heavy_check_mark:] Design cohérent (couleur, forme, police)
