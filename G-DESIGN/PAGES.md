# PAGES — Décryptage

> **Style verrouillé le 2026-11-18 (`/lock`, V4).** Statuts : à dessiner / en revue / validée. Style : `STYLE.md` (direction Brouillage, validée le 2026-11-18).
> Chaque planche montre le cadre desktop 1440 × 900 uniquement (décision Gaia du 2026-11-18 : pas de téléphone, le règlement du hackathon ne demande pas de mobile, seulement une UI qui tient dans le viewport).

| # | Page | Rôle | Contenu clé | Statut |
|---|------|------|-------------|--------|
| 1 | **Post** | Vue dans le feed (splash inline, `splash.html`) : donner envie d'ouvrir l'intercept du jour | En-tête du post, date de l'intercept, message chiffré visible (teaser), série du joueur, bouton « Decode » | **validée** · `planches/v4/01-post.html` |
| 2 | **Jeu** | Écran principal (`game.html`), une seule règle : « each letter stands for exactly one other » | Message chiffré, lettres déjà données (coup de pouce), lettres posées par le joueur, lettre sélectionnée, alphabet de substitution, chrono, série, bouton « Decrypt » | **validée** (V4 laquée) · `planches/v4/02-jeu.html` |
| 3 | **Carte de fin** | Résultat + boucle quotidienne + accroche commentaire | Lu / brouillé, message en clair, temps, série, invitation à commenter, prochain intercept dans HH:MM | **validée** · `planches/v4/03-carte-de-fin.html` |
| 4 | **Séries & classement** | Montrer la série et la communauté | Série perso, scores de la communauté du jour (temps de décodage) | **validée** · `planches/v4/04-series-classement.html` (données d'exemple, voir question 4) |

États transverses à dessiner en déclinaison (pas des pages) : chargement (« Intercepting… » existe dans le code), erreur, déjà résolu aujourd'hui (`solvedToday` existe côté API).

## Questions produit ouvertes (non tranchées)

1. **Saisie lettre par lettre ou phrase entière ?** Le jeu actuel (`src/client/game.tsx`) demande de taper la phrase décodée dans un champ texte. La direction de départ du brief (« l'alphabet qui se substitue en direct ») suppose une saisie **lettre par lettre** : toucher une lettre chiffrée, choisir sa lettre en clair, et toutes les occurrences se remplissent. Les 3 planches dessinent cette saisie-là. À confirmer, car c'est un changement de code.
2. **Le « coup de pouce » (`clue nudge`)** : aujourd'hui, 3 correspondances sont données d'office (`hints`). Les planches les montrent comme lettres verrouillées. Faut-il un indice supplémentaire à la demande (avec coût en temps) ? Non dessiné tant que ce n'est pas décidé.
3. **Erreur** : le code autorise plusieurs essais (« Another pass »). Les planches gardent un bouton « Decrypt » sans limite d'essais. Pénalité ou limite ?
4. **Scores de la communauté** (page 4) : l'API ne stocke aujourd'hui que la série par joueur. La planche 4 propose : classement au temps de lecture + nombre de lecteurs du jour + meilleure série. Il faut stocker le temps de chaque joueur, un compteur par jour et la meilleure série dans Redis. À confirmer.
