# REFS — Décryptage

> Références ouvertes le 2026-11-18 (navigateur intégré, page d'accueil + défilement, styles calculés relevés).
> On prend des **principes**, jamais un layout, un texte, un asset ou une marque.

## Santalarch — santalarch.com

Observé :
- Deux surfaces seulement : gris papier très clair (≈ `#f0f0f0`) et quasi-noir (≈ `#0f0f0f`), qui s'inversent d'une section à l'autre. Aucune couleur d'accent.
- **Une seule famille** (Helvetica, graisse 400 partout) sur une échelle très étirée : ≈ 166 px pour le titre géant, 70 / 36 / 23 px pour les titres, 11 px pour le courant, ≈ 6–7 px graisse 500 pour les micro-étiquettes. Le contraste vient de la taille, jamais de la graisse.
- **Filets fins verticaux** qui découpent la page en colonnes (navigation posée sur ces colonnes, chaque rubrique marquée d'un petit tick sous son nom). La grille est visible, elle fait partie du dessin.
- Numérotation sèche (01, 02, 03…) et intitulés courts empilés ; texte secondaire en noir à 40 % d'opacité plutôt qu'en gris.
- Mouvement : mots qui défilent en perspective sur une grille 3D en fil de fer. Lent, sans rebond.

À retenir pour Décryptage :
1. **La grille comme décor** : des filets fins qui tracent les colonnes de lettres suffisent à faire « instrument de mesure » sans texture ni ombre.
2. **L'échelle porte la hiérarchie** : une lettre chiffrée très grande, tout le reste petit et calme, une seule graisse.
3. **Inversion clair / sombre** pour séparer deux zones (le message / la machine) au lieu d'ajouter des couleurs.

## Adam Perlis — adamperlis.com

Observé :
- Fond blanc pur, encre `#161615`, **un seul gris** fonctionnel (`#8a8a85`) pour tout le secondaire et un gris très pâle (`#c6c6c0`) pour le tertiaire.
- Sans système (SF / Inter) en 13 / 15 / 28 px, graisse 400, approche légèrement négative ; **mono (Geist Mono) réservée aux éléments « machine »** (invite de terminal, compteurs, boutons de commande).
- Densité sans bruit : lignes de données en deux colonnes, étiquette grise à gauche, valeur alignée à droite en chiffres à chasse fixe (« 02+ », « 00 », « #0 »). Pas de cadres, pas de séparateurs lourds.
- Ouverture en fenêtre de terminal (`~ $ npx start`) : le mono signale ce qui est « vivant ».
- Boutons pilules discrets, un seul plein par zone.

À retenir pour Décryptage :
1. **Mono = signal, sans = interface** : la règle de la direction de départ est confirmée. Le texte chiffré, les compteurs et le chrono en mono ; consignes et boutons en sans.
2. **Lignes de données étiquette / valeur** pour chrono, série, lettres posées : lisibles d'un coup d'œil, sans pictos ni emoji.
3. **Un gris unique** pour tout le secondaire, ce qui laisse l'unique accent parler.

## Références jeux (ajoutées en V2, 2026-11-18)

Demande de Gaia après le rejet de la V1 : regarder les jeux, pas seulement des sites d'agence.
Les 4 jeux cités par l'organisateur (r/hotandcold, r/colorpuzzlegame, r/syllo, r/pocketgrids) n'ont pas pu être ouverts : reddit.com est bloqué dans le navigateur intégré. Sources effectivement ouvertes :

- **Page du hackathon** (redditgameofday2026.devpost.com). Critère « Visual Craft » : établir une identité visuelle claire ; premier interdit cité : « AI slop […] give your app a unique identity ». Aucune exigence mobile, seulement « fit the UI in the viewport ».
- **Galerie des gagnants du Reddit Games and Puzzles Hackathon** (redditgamesandpuzzles.devpost.com). Vignettes très illustrées, une seule image forte par jeu (pop-corn, planches de bois, damier).
- **Laddergram** (gagnant puzzle, devpost.com/software/laddergram) : plateau en feutrine verte, lettres sur tuiles en bois, clavier en tuiles de bois. Une métaphore matérielle unique tient tout le jeu.
- **Gagnants « Games with a Hook » 2026** (phaser.io, captures Cattack!, Myndrot, Hearthvale, Gradient Descent) : chaque jeu est un **monde** (planètes-menus, île en pixel art, village isométrique sous un ciel chaud), avec titre dessiné, lumière, profondeur. Aucun ne ressemble à un tableau de bord.

À retenir pour Décryptage :
1. **Un objet-monde, pas une interface** : le jeu doit être une chose qu'on manipule (machine, bureau, standard), et l'interface en découle.
2. **Matière et lumière** : grain, relief, ombre portée, lumière chaude localisée. Pas d'aplats génériques.
3. **Un titre dessiné** comme logo du jeu (plaque, en-tête imprimé), pas une ligne de texte.
4. **Le moment satisfaisant est physique** : une lampe qui s'allume, un tampon qui imprime, une lettre rouge qui frappe la bande.

## Références design, catégorie Jeux Vidéo (V3, 2026-11-18)

Source : webdesign-inspiration.com/fr/webdesign/industrie/jeux-video (22 sites, la source de `REFERENCES-DESIGN.md` du pipeline). Tous parcourus en vignette ; ouverts en direct : Firewatch, Den of Wolves (flhomegame.com redirige aujourd'hui vers un site de casino, Foot Locker n'est donc lu qu'en vignette).

Diagnostic des V1 et V2 à la lumière de ces sites : la V1 était une interface générique ; la V2 un pastiche « vintage espion » (laiton, bois, cuir, Courier, dégradés partout) rendu par filtres, sans **stylisation**. Les sites retenus ont tous un parti pris graphique qui simplifie le réel au lieu de l'imiter.

- **Firewatch** (firewatchgame.com, ouvert) : toute l'image tient dans **une seule teinte déclinée en 7 à 8 valeurs** (du jaune pâle au bordeaux presque noir), par plans successifs en aplats (perspective atmosphérique), silhouettes, aucun dégradé lisse. Logotype capitales géométriques très espacées ; boutons en **bannières à bouts entaillés**. À prendre : rampe monochrome par plans, silhouettes, un seul point de lumière.
- **Den of Wolves** (denofwolves.com, ouvert) : noir, photos tramées en points, **capitales condensées rouges énormes** qui font l'image, petits libellés entre crochets dont les caractères **se brouillent puis se décodent** (`[↓] |?+@/`). À prendre : le texte comme image, le brouillage de glyphes comme état « pas encore déchiffré », un seul rouge.
- **Meow Mart** (vignette) : enseigne peinte à la main, contours noirs épais, 4 couleurs saturées, briques, panneaux de vitrine. À prendre : l'impression populaire, le lettrage qui a une voix.
- **Foot Locker Home Game** (vignette) : plateau de jeu en aplats, trames de points, silhouettes noires, titre en boîte noire. À prendre : la trame comme matière, les gros blocs typographiques.
- **Infinilearn**, **Kippo**, **Multeor** (vignettes) : un monde dessiné (pixel art, isométrie) encadré, l'interface posée par-dessus. À prendre : le jeu vit dans une scène, pas dans une carte blanche.

À retenir pour Décryptage :
1. **Styliser, pas imiter** : aplats, trames, silhouettes, peu de couleurs. Plus de matière simulée par filtre.
2. **Le texte est l'image** : le message chiffré doit être l'élément graphique principal, en très grand.
3. **Un état « brouillé » propre au jeu** : les lettres non trouvées s'affichent comme des glyphes qui bougent ; c'est notre motif.

## Ce qu'on n'emprunte pas

- Le mot-symbole géant de Santalarch, ses visuels 3D, ses textes.
- L'objet en verre animé et la mascotte de l'intro Perlis, la police Geist (on reste sur des familles système / libres embarquables : IBM Plex Mono et Inter, licence OFL, à embarquer dans l'app car la CSP Devvit bloque les requêtes externes).
