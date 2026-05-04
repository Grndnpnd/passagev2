export function DragonshardGlyph({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2L6 9.5L12 22L18 9.5L12 2Z"
        fill="url(#dragonshard-gradient)"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M9 7.5L12 5L15 7.5" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      <path d="M7.5 10L12 14L16.5 10" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      <defs>
        <linearGradient id="dragonshard-gradient" x1="6" y1="2" x2="18" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5f9ea0" />
          <stop offset="1" stopColor="#d4a853" />
        </linearGradient>
      </defs>
    </svg>
  );
}
