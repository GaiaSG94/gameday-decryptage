import './index.css';

import { context, requestExpandedMode } from '@devvit/web/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

export const Splash = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-[#10131a] px-6 text-center text-[#d7dde8]">
      <div className="font-mono text-2xl tracking-[0.3em] text-[#8ef7c0]">KZQ TUQIN</div>
      <h1 className="text-3xl font-black tracking-[0.3em] text-[#8ef7c0]">DECRYPTAGE</h1>
      <p className="max-w-[240px] text-[13px] leading-snug text-[#6b7688]">
        One scrambled message a day. Hi {context.username ?? 'analyst'}.
      </p>
      <button
        onClick={(e) => requestExpandedMode(e.nativeEvent, 'game')}
        className="mt-2 rounded-full bg-[#8ef7c0] px-8 py-2.5 text-sm font-black uppercase tracking-widest text-[#10131a] transition-transform active:scale-[0.98]"
      >
        Intercept
      </button>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Splash />
  </StrictMode>
);
