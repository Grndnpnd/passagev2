export function DividerLine({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex-1 h-px bg-[#8a7342]/40" />
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L11.1962 9H0.803848L6 0Z" fill="#d4a853" opacity="0.6" />
      </svg>
      <div className="flex-1 h-px bg-[#8a7342]/40" />
    </div>
  );
}
