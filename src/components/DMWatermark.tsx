export function DMWatermark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="100"
        y="28"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="20"
        fontStyle="italic"
        opacity="0.05"
      >
        GM ONLY
      </text>
    </svg>
  );
}
