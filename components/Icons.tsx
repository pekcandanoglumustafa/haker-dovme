type P = { className?: string };

const base = "none";

export function Icon({ name, className = "w-10 h-10" }: { name: string; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: base,
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };
  switch (name) {
    case "forge":
      return (
        <svg {...common}>
          <path d="M3 21h18M6 21V10l6-4 6 4v11M9 21v-5h6v5M12 6V3" />
        </svg>
      );
    case "wave":
      return (
        <svg {...common}>
          <path d="M4 12h4l2-8 4 16 2-8h4" />
        </svg>
      );
    case "grid":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M4 9h16M9 4v16" />
        </svg>
      );
    case "flask":
      return (
        <svg {...common}>
          <path d="M9 3v6l-5 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9V3M8 3h8M6 15h12" />
        </svg>
      );
    case "gear":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
        </svg>
      );
    case "beaker":
      return (
        <svg {...common}>
          <path d="M8 3v6l-4 8a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-4-8V3M7 3h10" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12Z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M4 5c0 8.3 6.7 15 15 15v-3.5l-4-1.5-2 2a12 12 0 0 1-6-6l2-2L7.5 5H4Z" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    default:
      return null;
  }
}
