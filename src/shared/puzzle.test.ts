import assert from 'node:assert/strict';
import { test } from 'node:test';

import { buildKey, dailySeed, encode, generateCipher, isCorrectPhrase, mulberry32, normalize } from './puzzle.ts';

test('seed deterministe', () => {
  assert.equal(dailySeed('2026-12-01'), dailySeed('2026-12-01'));
});

test('le chiffre du jour est deterministe', () => {
  const a = generateCipher('2026-12-01');
  const b = generateCipher('2026-12-01');
  assert.equal(a.cipher, b.cipher);
  assert.deepEqual(a.hints, b.hints);
  assert.equal(a.solution, b.solution);
});

test('les indices correspondent a des lettres du texte', () => {
  const puzzle = generateCipher('2026-12-01');
  for (const [ciphered, plain] of Object.entries(puzzle.hints)) {
    assert.ok(puzzle.cipher.includes(ciphered), ciphered);
    assert.ok(puzzle.solution.includes(plain), plain);
  }
});

test('la normale enleve la ponctuation et les doubles espaces', () => {
  assert.equal(normalize('  Old   LIGHTHOUSE! '), 'old lighthouse');
});

test('la bonne phrase valide le puzzle', () => {
  const puzzle = generateCipher('2026-12-05');
  assert.ok(isCorrectPhrase(puzzle, puzzle.solution));
  assert.ok(isCorrectPhrase(puzzle, puzzle.solution.toUpperCase()));
  assert.ok(!isCorrectPhrase(puzzle, 'wrong answer'));
});

test('la cle de substitution est une permutation', () => {
  const key = buildKey(mulberry32(42));
  const values = Object.values(key).sort();
  const sortedAlphabet = [...'abcdefghijklmnopqrstuvwxyz'].sort();
  assert.deepEqual(values, sortedAlphabet);
  assert.ok(Object.entries(key).every(([k, v]) => encode(k, key) === v));
});
