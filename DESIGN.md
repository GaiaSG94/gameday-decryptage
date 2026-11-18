# DESIGN — Décryptage

> Journal tenu par Claude (prompt design, `PROMPT-DESIGN.md`). Versions datées, jamais écrasées.
> Livrables : `G-DESIGN/` (PAGES, REFS, STYLE, planches).

## LOCK — 2026-11-18

Gaia a validé la V4 sur les 4 pages et verrouillé le style (`/lock`).
- Référence : `G-DESIGN/STYLE.md` (§1 à §8) et `G-DESIGN/planches/v4/` (01-post, 02-jeu, 03-carte-de-fin, 04-series-classement).
- Fin des explorations ; toute modification passe par `/delta` avec une entrée datée ici.
- À trancher avant l'implémentation (`G-DESIGN/PAGES.md`) : saisie lettre par lettre (q. 1), indice supplémentaire (q. 2), limite d'essais (q. 3), données du classement (q. 4).
- À faire dans l'app : embarquer Saira Extra Condensed et IBM Plex Mono (OFL), reproduire le kit laqué en CSS.

## V4 — 2026-11-18 · Brouillage laqué (plus « jeu »)

**Statut** : **validée et verrouillée** le 2026-11-18.

Retour de Gaia sur la V3.1 : rendre beaucoup plus gamifié, angles arrondis, travailler la texture des éléments, noir et rouge lisses et réfléchissants, un peu de 3D.

Fait :
- Kit de composants laqués (tuiles, touches, boutons, médaillon, jauge, panneaux, sol réfléchissant), documenté dans `STYLE.md` §8.
- `planches/v4/` : 01-post, 02-jeu, 03-carte-de-fin, 04-series-classement, desktop seul, mêmes données et mêmes contenus que la V3.1.

Décisions :
- Le message passe de lettres géantes à **tuiles en relief** : plus tactile, et l'état « en cours » devient une tuile soulevée.
- La lettre chiffrée devient un onglet sur le haut de la tuile, pour laisser la place au reflet.
- Série = médaillon rouge ; progression = jauge ; compte à rebours = chiffres-tuiles.
- La V3.1 reste dans `planches/brouillage/`.

## V3.1 — 2026-11-18 · déclinaison Brouillage

**Statut** : remplacée par la V4 (retours Gaia du 2026-11-18).

Fait :
- `G-DESIGN/STYLE.md` : couleurs (un seul rouge), typo, grille, composants, mouvement, états transverses.
- `planches/brouillage/` : 01-post (aperçu dans le feed, 724 × 480), 02-jeu (copie de la planche validée), 03-carte-de-fin, 04-series-classement. Desktop seul.

Décisions :
- Post : l'accroche est le message chiffré du jour en grand, avec des tranches rouges décalées ; aucun compteur de joueurs (pas dans l'API).
- Carte de fin : le message en clair remplace le message brouillé (rouge = trouvé par toi, os = donné) ; une seule action principale, commenter, avec un aperçu sans spoiler ; compte à rebours jusqu'au prochain intercept (00:00 UTC). L'état raté est décrit sur la planche, pas dessiné.
- Séries & classement : série + calendrier 28 jours à gauche, classement au temps à droite, ta ligne en bloc os. Les données sont des exemples : le classement demande de nouvelles clés Redis (question ouverte n° 4).

## V3 — 2026-11-18 · page Jeu, parti pris graphique (références Jeux Vidéo)

**Statut** : direction 02 Brouillage **validée** par Gaia le 2026-11-18 ; 01 et 03 écartées.

Retour de Gaia sur la V2 : toujours « slop IA » (matière, couleurs, motifs pas travaillés, pas d'identité) ; aller voir les références design de la catégorie jeu. Fait : les 22 sites de webdesign-inspiration.com « Jeux Vidéo » parcourus, Firewatch et Den of Wolves ouverts (détail dans `G-DESIGN/REFS.md`).

Diagnostic : la V2 imitait des objets anciens par filtres (laiton, bois, cuir), c'est le pastiche « vintage espion » par défaut. Les références stylisent : rampe monochrome, texte-image, trames, peu d'encres. La V3 abandonne la matière simulée.

Fait — 3 planches desktop (`planches/v3/`) :
- `01-crepuscule.html` : affiche de paysage au crépuscule en **une teinte bleu-vert sur 8 valeurs** + une seule lumière chaude ; le message pend au fil d'antenne entre un pylône et une cabane, une étiquette par lettre ; tes lettres prennent la couleur de la lampe.
- `02-brouillage.html` : noir tramé, parabole en points, message en **condensée rouge de 200 px** ; les lettres inconnues sont des **glyphes brouillés en tranches décalées qui tremblent**, motif propre au jeu ; alphabet en bande de 26 cases.
- `03-decodeur.html` : fanzine **risographie deux encres** (bleu + rose fluo, décalage de calage, trames, surimpression) ; radio tramée qui parle dans une bulle de BD, cases du message, touches en badges, étoile « Decrypt! ».

Décisions :
- Plus aucune texture simulée (bois, métal, cuir) ; seulement aplats, trames, grain léger.
- Polices de planche ajoutées : URW Gothic (→ Jost OFL), URW Bookman en réserve. Correspondances OFL pour l'app indiquées sur chaque planche.

## V2 — 2026-11-18 · page Jeu refaite (scènes matérielles, desktop seul)

**Statut** : **rejetée par Gaia** le 2026-11-18 (« slop IA », voir V3).

Retours de Gaia sur la V1 :
1. « Ça fait slop IA » : matière, couleurs et motifs pas travaillés, pas d'identité visuelle.
2. Pas de téléphone par défaut : on ne montre le mobile que si le hackathon le demande. Vérifié : le règlement (page Devpost) ne demande pas de mobile, seulement « fit the UI in the viewport ». Cela annule le §6 de `PROMPT-DESIGN.md` pour ce projet.
3. Aller voir les références jeux (voir `G-DESIGN/REFS.md`, section ajoutée).

Fait :
- 3 planches, cadre desktop 1440 × 900, jeu ouvert depuis le post (zone 1220 × 768), chaque scène dessinée en SVG (grain, relief, ombres, lumière) avec polices embarquées dans le fichier :
  - `planches/v2/01-machine.html` : téléscripteur en tôle givrée sur bureau en noyer, bande perforée sortant d'un rouleau, ruban bicolore (noir = intercept, rouge = joueur), touches chromées à dessus bakélite, curseur de lecture en laiton.
  - `planches/v2/02-tampons.html` : télégramme intercepté sur sous-main en cuir, cases du formulaire, lettres posées au tampon à l'encre violine, casier de 26 tampons en chêne, série oblitérée comme des timbres.
  - `planches/v2/03-standard.html` : standard téléphonique en chêne et laque noire ; le message est une rangée de lampes, la substitution est un tableau de branchement (câble de la prise chiffrée vers la prise en clair), câble pendant pour la lettre en cours.
- Mêmes données réelles qu'en V1 (intercept du 18/11, 5 lettres sur 9 posées, F sélectionnée).

Décisions :
- Chaque direction = un objet-monde avec une seule couleur d'accent (rouge ruban / violine / ambre de lampe). Le laiton, le bois et le papier sont des matières, pas des accents.
- Polices de planche : Nimbus Mono PS, Nimbus Sans Narrow, C059, Nimbus Sans (URW, embarquées en base64). Dans l'app, elles seront remplacées par des équivalents OFL à embarquer : Courier Prime, une condensée et Libre Caslon.
- La V1 reste dans `planches/v1/` (versions jamais écrasées), marquée rejetée.

## V1 — 2026-11-18 · exploration de la page Jeu

**Statut** : **rejetée par Gaia** le 2026-11-18 (voir V2).

Fait :
- `G-DESIGN/REFS.md` : Santalarch et Adam Perlis ouverts et décodés (filets fins, échelle typo par la taille, mono = signal / sans = interface, lignes étiquette-valeur, un seul gris).
- `G-DESIGN/PAGES.md` : 4 pages proposées (Post, Jeu, Carte de fin, Séries & classement) + 4 questions produit ouvertes.
- 3 planches de la page Jeu, cadres desktop 1440 × 900 (post dans le feed, zone de jeu 724 × 640) et mobile 390 × 844 (vue de jeu plein écran) côte à côte :
  - `planches/v1/01-bande-perforee.html` : direction de départ. Papier `#efe7d3`, machine `#2a2e33`, perforation `#8b1e1e`. Le message sur une bande perforée (5 trous par lettre, codés depuis la lettre), clavier rond de machine qui sert d'alphabet de substitution.
  - `planches/v1/02-table-ecoute.html` : console de nuit, ambre `#f0a43a` seul accent. Message en grand (clair au-dessus du chiffré) + table des 26 substitutions qui se remplit en direct. La plus dense.
  - `planches/v1/03-carbone.html` : écart assumé. Papier blanc `#f4f4f1`, encre `#0f0f0f`, bleu carbone `#2b3bff`. Lettres géantes en sans, filets fins par colonne, aucune texture.

Décisions :
- Données de démo **réelles** : intercept du 2026-11-18 tel que le génère `generateCipher` (`rzuf qzskbki` = *cold morning*, indices r→c, z→o, u→l). État dessiné : en cours de partie, 5 lettres sur 9 posées, F sélectionnée, chrono 01:42, série 6.
- Saisie dessinée **lettre par lettre** (motif « l'alphabet qui se substitue en direct » du brief), alors que le code actuel prend la phrase entière : question ouverte n° 1 de `PAGES.md`.
- Clavier A–Z intégré au jeu dans les 3 directions : le clavier natif du téléphone masquerait la moitié du message, alors que la règle « UI dans le viewport » l'interdit.
- Polices visées : Inter + IBM Plex Mono (OFL, à embarquer dans l'app à cause de la CSP Devvit). Les planches tombent sur Helvetica / DejaVu Sans Mono si elles ne sont pas installées.
- Les planches s'ouvrent en double-cliquant le fichier. Bouton « Taille réelle » pour voir les cadres à 100 %.

Prochaine étape : choix d'une direction (ou `/variantes`, `/compare`), puis `STYLE.md` et les 3 autres planches.
