import './index.css';

import { useCallback, useEffect, useState } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

type Init = {
  day: string;
  username: string;
  streak: number;
  solvedToday: boolean;
  startedAt: number;
  cipher: string;
  hints: Record<string, string>;
};

type Result = { won: boolean; streak: number; elapsedMs: number; solution: string };

const App = () => {
  const [init, setInit] = useState<Init | null>(null);
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [seconds, setSeconds] = useState(0);

  const load = useCallback(async () => {
    try {
      const res = await fetch('/api/init');
      const data = await res.json();
      if (data.status === 'error') throw new Error(data.message);
      setInit(data);
      setGuess('');
      setResult(null);
      setSeconds(0);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'load failed');
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const send = async () => {
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guess, elapsedSeconds: seconds }),
      });
      const data = await res.json();
      if (data.status === 'error') throw new Error(data.message);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'submit failed');
    }
  };

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#10131a] text-[#d7dde8]">
        <p>{error}</p>
      </div>
    );
  }
  if (!init) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#10131a] text-[#6b7688]">
        <p className="animate-pulse">Intercepting…</p>
      </div>
    );
  }

  const clock = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;

  return (
    <div className="flex min-h-screen flex-col items-center gap-4 bg-[#10131a] px-4 py-6 text-[#d7dde8]">
      <header className="flex w-full max-w-md items-center justify-between">
        <h1 className="text-xl font-black tracking-[0.3em] text-[#8ef7c0]">DECRYPTAGE</h1>
        <div className="text-sm font-semibold text-[#6b7688]">
          <span className="mr-3">{clock}</span>
          <span>🔥 {result ? result.streak : init.streak}</span>
        </div>
      </header>
      <p className="max-w-md text-center text-[13px] leading-snug text-[#6b7688]">
        Today's message came out of the box scrambled. Decode it - each letter stands for
        exactly one other letter.
      </p>
      <div className="w-full max-w-md rounded-xl border-2 border-[#27313f] bg-[#161b24] p-5 text-center">
        <p className="font-mono text-2xl tracking-[0.35em] text-[#8ef7c0]">{init.cipher}</p>
      </div>
      <div className="flex w-full max-w-md flex-wrap justify-center gap-2">
        {Object.entries(init.hints).map(([ciphered, plain]) => (
          <span
            key={ciphered}
            className="rounded-full border border-[#27313f] bg-[#161b24] px-3 py-1 font-mono text-xs text-[#6b7688]"
          >
            {ciphered} → {plain}
          </span>
        ))}
      </div>
      <input
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="type the decoded message"
        className="w-full max-w-md rounded-xl border-2 border-[#27313f] bg-[#161b24] px-4 py-3 text-center font-mono text-base text-[#d7dde8] outline-none placeholder:text-[#4b5666] focus:border-[#8ef7c0]"
      />
      {!result ? (
        <button
          onClick={() => void send()}
          disabled={guess.trim().length === 0}
          className="w-full max-w-md rounded-full bg-[#8ef7c0] py-3 text-base font-black uppercase tracking-widest text-[#10131a] transition-transform active:scale-[0.98] disabled:opacity-40"
        >
          Decrypt
        </button>
      ) : (
        <div className="flex w-full max-w-md flex-col items-center gap-3 rounded-xl border-2 border-[#27313f] bg-[#161b24] p-5 text-center">
          <p className="text-2xl font-black tracking-widest">
            {result.won ? 'MESSAGE READ' : 'GARBLED'}
          </p>
          <p className="text-sm text-[#6b7688]">
            {result.won
              ? `Decoded in ${clock} — streak 🔥 ${result.streak}.`
              : 'The substitution was wrong. Check the hints and try again.'}
          </p>
          <button
            onClick={() => setResult(null)}
            className="rounded-full border-2 border-[#8ef7c0] px-6 py-2 text-sm font-bold uppercase tracking-widest text-[#8ef7c0]"
          >
            Another pass
          </button>
        </div>
      )}
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
