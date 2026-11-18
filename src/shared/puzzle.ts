export const PHRASES = [
  'the quick fox',
  'quiet storm',
  'old lighthouse',
  'paper moon',
  'silk river',
  'iron garden',
  'last signal',
  'slow dawn',
  'brass lantern',
  'hidden valley',
  'silent harbor',
  'golden hour',
  'blue window',
  'small wonder',
  'winter garden',
  'pale lantern',
  'second chance',
  'broken compass',
  'quiet harbor',
  'long road',
  'soft thunder',
  'empty theater',
  'cold morning',
  'narrow gate',
  'open sky',
] as const;

export type CipherPuzzle = {
  day: string;
  cipher: string;
  hints: Record<string, string>;
  solution: string;
};

export const dayKeyUTC = (now: Date = new Date()): string => now.toISOString().slice(0, 10);

export const dailySeed = (day: string): number => {
  let hash = 2166136261;
  const input = 'decryptage:' + day;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

export const mulberry32 = (seed: number): (() => number) => {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const buildKey = (rand: () => number): Record<string, string> => {
  const shuffled = [...ALPHABET].sort(() => rand() - 0.5);
  const key: Record<string, string> = {};
  ALPHABET.forEach((letter, i) => {
    key[letter] = shuffled[i] ?? letter;
  });
  return key;
};

export const encode = (plain: string, key: Record<string, string>): string =>
  plain
    .split('')
    .map((ch) => (/[a-z]/.test(ch) ? (key[ch] ?? ch) : ch))
    .join('');

export const normalize = (text: string): string =>
  text.toLowerCase().replace(/\s+/g, ' ').replace(/[^a-z ]/g, '').trim();

export const generateCipher = (day: string): CipherPuzzle => {
  const rand = mulberry32(dailySeed(day));
  const plain = PHRASES[dailySeed(day) % PHRASES.length] ?? 'the quick fox';
  const key = buildKey(rand);
  const clean = normalize(plain).replace(/ /g, '');
  const plainLetters = [...new Set(clean.split(''))];
  const hintCount = Math.min(3, Math.max(1, plainLetters.length - 4));
  const hints: Record<string, string> = {};
  for (const letter of plainLetters.slice(0, hintCount)) {
    const ciphered = key[letter];
    if (ciphered) hints[ciphered] = letter;
  }
  return { day, cipher: encode(plain, key), hints, solution: plain };
};

export const isCorrectPhrase = (puzzle: CipherPuzzle, guess: string): boolean =>
  normalize(guess) === normalize(puzzle.solution);
