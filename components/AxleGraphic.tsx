export default function AxleGraphic({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1180 220"
      role="img"
      aria-label="Sıcak dövülmüş ERAXLE arka aks mili"
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id="steelBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a414c" />
          <stop offset=".28" stopColor="#8a909c" />
          <stop offset=".5" stopColor="#c9ccd2" />
          <stop offset=".72" stopColor="#6b727d" />
          <stop offset="1" stopColor="#2b3039" />
        </linearGradient>
        <linearGradient id="hotHead" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff2b0" />
          <stop offset=".35" stopColor="#ffce3b" />
          <stop offset=".68" stopColor="#ff7a1e" />
          <stop offset="1" stopColor="#c42d0e" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ff7a1e" stopOpacity=".55" />
          <stop offset="1" stopColor="#ff7a1e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c42d0e" />
          <stop offset="1" stopColor="#5a5f68" />
        </linearGradient>
      </defs>

      <ellipse className="animate-ember" cx="200" cy="110" rx="230" ry="130" fill="url(#glow)" />

      <rect x="360" y="94" width="760" height="32" rx="4" fill="url(#steelBody)" />
      <g fill="url(#steelBody)">
        <rect x="1116" y="88" width="10" height="44" rx="2" />
        <rect x="1128" y="92" width="7" height="36" rx="2" />
      </g>
      <rect x="330" y="82" width="42" height="56" rx="6" fill="url(#fade)" />

      <g>
        <ellipse cx="205" cy="110" rx="150" ry="92" fill="url(#hotHead)" />
        <ellipse
          cx="205"
          cy="110"
          rx="150"
          ry="92"
          fill="none"
          stroke="#fff2b0"
          strokeOpacity=".5"
          strokeWidth="1.5"
        />
        <g fill="#2b1405" opacity=".55">
          <circle cx="205" cy="46" r="9" />
          <circle cx="205" cy="174" r="9" />
          <circle cx="150" cy="78" r="9" />
          <circle cx="150" cy="142" r="9" />
          <circle cx="262" cy="78" r="9" />
          <circle cx="262" cy="142" r="9" />
        </g>
        <circle cx="205" cy="110" r="26" fill="#2b1405" opacity=".55" />
        <circle cx="205" cy="110" r="26" fill="none" stroke="#ffe28a" strokeOpacity=".5" />
      </g>

      <g fill="#ffd24a">
        <circle
          className="animate-spark"
          style={{ ["--dx" as string]: "-90px", ["--dy" as string]: "-60px" }}
          cx="120"
          cy="80"
          r="3"
        />
        <circle
          className="animate-spark"
          style={{ ["--dx" as string]: "-70px", ["--dy" as string]: "70px", animationDelay: ".7s" }}
          cx="150"
          cy="150"
          r="2.4"
        />
        <circle
          className="animate-spark"
          style={{ ["--dx" as string]: "-110px", ["--dy" as string]: "10px", animationDelay: "1.3s" }}
          cx="110"
          cy="112"
          r="2"
        />
        <circle
          className="animate-spark"
          style={{ ["--dx" as string]: "-60px", ["--dy" as string]: "-90px", animationDelay: "1.9s" }}
          cx="180"
          cy="60"
          r="2.6"
        />
      </g>
    </svg>
  );
}
