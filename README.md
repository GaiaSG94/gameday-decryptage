# Decryptage

A daily cipher game for Reddit, built on [Devvit Web](https://developers.reddit.com/).

Every day a short English message is scrambled with a fresh substitution
alphabet. A few letter hints are shown. Type the decoded message; the check is
case- and punctuation-insensitive. The puzzle (phrase + key + hints) is
deterministic per day, the same for everyone.

## How to play

1. Read the scrambled message and the letter hints.
2. Type what you think the message says.
3. Tap Decrypt. A correct read extends your streak.

Streaks stored per user in Redis.

## Stack

- React 19 + Tailwind 4 + Vite (client inside a Reddit post)
- Hono server on Devvit (`/api/init`, `/api/submit`), Redis persistence
- Deterministic daily generation (UTC seed), substitution permutation tested

## Development

```bash
npm install
npm run dev
npm test
npm run type-check
npm run build
```

## Submission (Reddit's Game of the Day Hackathon)

- App listing: `developers.reddit.com/apps/gameday-decryptage` (private until judging ends)
- Demo post: public test subreddit, post running the game
