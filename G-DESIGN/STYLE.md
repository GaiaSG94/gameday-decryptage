# STYLE — Décryptage · direction « Brouillage », version laquée (V4)

> **VERROUILLÉ le 2026-11-18** par Gaia (`/lock`). Plus d'exploration : toute évolution passe par `/delta` et une nouvelle entrée datée dans `DESIGN.md`. Référence d'implémentation : `planches/v4/`.

> Direction validée par Gaia le 2026-11-18 (V3). Version V4 demandée le même jour : plus « jeu », angles arrondis, matière travaillée, noir et rouge lisses et réfléchissants, un peu de relief. Planches : `planches/v4/`.
> Les sections 2 à 7 restent valables ; la section 8 (kit laqué) les complète et prime en cas de conflit (angles, boutons, lettres).
> Desktop seul. Toutes les mesures sont données pour la zone de jeu de référence de 1220 × 768 px.

## 1. Idée

Le message est l'image. Une lettre pas encore trouvée n'est pas un trou : c'est un **glyphe brouillé qui tremble**. Une lettre trouvée **se fige net**. Fond noir tramé, une parabole d'écoute en points, un seul rouge.

## 2. Couleurs (un seul accent)

| Rôle | Hex | Usage |
|---|---|---|
| Noir | `#0a0a0b` | fond de tout écran |
| Panneau | `#141416` / `#1b1b1e` | cases d'alphabet, blocs secondaires |
| Trame | `#4a4a4e` (points) · `#3a3a3d` (éteint) | illustrations en points, glyphes éteints, filets |
| Gris | `#8a8a85` | métadonnées, libellés, chiffré entre crochets |
| Os | `#f2efe8` | texte principal, lettres **données**, bloc de sélection |
| Rouge signal | `#ff2a1f` | **seul accent** : lettres posées par le joueur, chrono, CTA, progression, glyphes brouillés (contour) |

Règles : jamais de deuxième couleur vive. Pas de dégradé de couleur ; les seuls dégradés sont des masques d'opacité sur la trame.

## 3. Typographie

| Rôle | Police (planche → app, OFL) | Taille | Interligne / approche |
|---|---|---|---|
| Message (lettres du jeu) | Nimbus Sans Narrow Bold → **Saira Extra Condensed Bold** | 200 px | ligne de base à 190 px d'écart, chasse 106 px par lettre |
| Titre d'écran / gros chiffres | idem | 72–120 px | serré, capitales |
| Wordmark « DECRYPTAGE » | idem | 28 px | approche +2 |
| Bloc de texte | idem | 22 px | capitales, approche +0,5 |
| Touches de l'alphabet | idem | 32 px | — |
| Métadonnées, crochets, chiffré | Nimbus Mono PS Bold → **IBM Plex Mono SemiBold** | 12–13 px | approche +1, capitales |

Toujours en capitales. Le mono sert uniquement aux métadonnées entre crochets (`[R]`, `// RULE`, `[↵] DECRYPT`).

## 4. Grille

- Marges extérieures 44 px ; filet de tête à 74 px du haut (`#3a3a3d`).
- Colonne de jeu à gauche (x 44 → 800), colonne d'information à droite (x 860 → 1176), qui porte l'illustration tramée.
- Bas d'écran : bande d'alphabet de 26 cases sur toute la largeur (cases de 43 × 54 px), puis rangée d'actions de 40 px.
- Unité verticale 8 px.

## 5. Composants

- **Barre de tête** : carré-logo os 22 px (deux pixels noirs), wordmark, métadonnées mono `[ INTERCEPT 18.11.26 ] // …`, à droite série en mono os + chrono condensé rouge.
- **Lettre du message** (4 états) :
  - *à trouver* : glyphe tiré de `# % & @ $ ? * + =`, 3 tranches horizontales décalées (contour rouge 2 px à 55 %, aplat `#3a3a3d`), tremblement ;
  - *donnée* : os plein ;
  - *posée* : rouge plein ;
  - *en cours* : bloc os 100 × 172 px derrière, curseur rouge 6 px qui clignote.
  Sous chaque lettre : la lettre chiffrée en mono gris `[Q]` (rouge si en cours).
- **Progression** : `// DECODED 05/09` + 9 segments de 20 × 8 px (rouge = trouvé, `#3a3a3d` = reste).
- **Bande d'alphabet** : case `#1b1b1e` lettre os ; case prise = `#141416` + filet `#3a3a3d`, lettre éteinte, petite lettre chiffrée au-dessus (rouge si posée par le joueur, gris si donnée).
- **Étiquette de saisie** : bloc os `[F] → ?` au-dessus de la bande.
- **Boutons** : principal = aplat rouge, texte noir condensé 22 px, préfixe mono `[↵]` ; secondaire = contour gris 1 px, texte gris. Hauteur 40 px, angles vifs.
- **Illustration** : objets d'écoute (parabole, antenne, pylône) en points de 7 px, fondus vers la gauche par masque. Jamais de photo.

## 6. Mouvement

- Glyphes brouillés : tremblement en 2 pas, 0,35 s, décalage de phase par lettre.
- Lettre trouvée : le glyphe change 3 fois en 180 ms puis se fige dans la couleur d'état (rouge).
- Curseur : clignotement 1 s, en pas.
- Fin de partie : les lettres restantes se décodent de gauche à droite, 60 ms d'écart.
- `prefers-reduced-motion` : aucun tremblement, aucun clignotement, changement d'état instantané.

## 7. États transverses

- Chargement : `INTERCEPTING…` en mono, une ligne de glyphes brouillés à la place du message.
- Erreur : bloc os, texte noir `[!] SIGNAL LOST — RETRY`.
- Déjà résolu aujourd'hui : on ouvre directement la carte de fin.

## 8. Kit laqué (V4)

Matière unique : **laque** noire ou rouge, lisse, avec reflet spéculaire. Plus d'angles vifs : tout est arrondi.

**Construction d'un élément en relief** (tuile, touche, bouton, panneau), de bas en haut :
1. ombre portée floue (noir 55 %, flou 8 px), décalée vers le bas ;
2. flanc = même forme décalée de la profondeur (tuile 10 px, touche 6 px, bouton 8 px, pastille 4 à 5 px) ; noir `#000 → #1b1b1f`, rouge `#5e0703 → #8f0f08` ;
3. face en dégradé vertical ; noir `#34343a → #1d1d22 → #0d0d10 → #16161a`, rouge `#ff7a68 → #ff3b2c → #e01a10 → #b8120a` ;
4. reflet haut : la moitié supérieure en blanc 34 % → 0 (rouge) ou 16 % → 0 (noir) ;
5. reflet diagonal discret (bande blanche 9 %) ;
6. liseré intérieur blanc 1,5 px (12 % sur noir, 35 % sur rouge).

**Rayons** : tuile 17 px, touche 12 px, panneau 22 px, boutons et pastilles en pilule (rayon = demi-hauteur).

**Composants V4**
- *Tuile de lettre* 94 × 128, profondeur 10. Noire + glyphe brouillé = à trouver ; noire + lettre os = donnée ; **rouge** + lettre blanche = posée ; **soulevée de 10 px**, halo rouge flou et contour rouge 3 px + curseur = en cours. La lettre chiffrée est un onglet-pilule posé sur le bord haut (rouge quand la tuile est en cours).
- *Sol réfléchissant* : la dernière rangée de tuiles se reflète en miroir sous elle (masque 32 % → 0 sur 60 % de la hauteur).
- *Touche* 54 × 56, profondeur 6. Touche prise par le joueur = laque rouge ; prise par une lettre donnée = noire, lettre éteinte ; pastille ronde en haut à droite avec la lettre chiffrée.
- *Bouton principal* : pilule rouge, profondeur 8, halo rouge flou, libellé blanc en relief. *Secondaire* : pilule noire.
- *Médaillon* (série) : sphère rouge, anneau blanc 35 %, reflet ovale, chiffre en relief.
- *Jauge* : pilule noire creusée, segments rouges laqués.
- *Puce d'information* (chrono) : pilule noire, libellé mono gris, valeur condensée rouge.
- *Panneau* : rectangle arrondi 22 px, dégradé `#1f1f24 → #0b0b0d`, liseré haut blanc 22 %.

**Fond** : halo rouge très sombre au centre-gauche (`#2a0d0b → #070708`), parabole tramée à droite, grain 4,5 %.

**Mouvement V4** : la tuile sélectionnée monte de 10 px en 120 ms (ressort léger) ; un appui sur une touche ou un bouton l'enfonce de sa profondeur (le flanc disparaît) ; la tuile trouvée passe de noir à rouge par un bref flash du reflet. Tout est coupé avec `prefers-reduced-motion`.

**Rendu dans l'app** : tout est faisable en CSS (`border-radius`, `linear-gradient` multiples, `box-shadow` pour flanc et halo, `-webkit-box-reflect` ou copie masquée pour le reflet), sans image.
