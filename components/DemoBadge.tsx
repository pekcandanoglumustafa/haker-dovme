"use client";

import { useState } from "react";

export default function DemoBadge() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="fixed bottom-4 left-4 z-[60] flex max-w-[calc(100vw-2rem)] items-center gap-2.5 rounded-[3px] border border-line bg-graphite/90 px-3 py-2 font-mono text-[11px] tracking-[0.03em] text-ash backdrop-blur">
      <span>
        <b className="font-medium text-heat-mid">DEMO</b> · Haker için Kona AI örnek tasarımı
      </span>
      <button
        aria-label="Kapat"
        onClick={() => setShow(false)}
        className="text-ash-dim hover:text-pearl"
      >
        ✕
      </button>
    </div>
  );
}
