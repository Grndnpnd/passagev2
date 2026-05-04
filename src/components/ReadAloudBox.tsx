import type { ReactNode } from 'react';

interface ReadAloudBoxProps {
  children: ReactNode;
  label?: string;
}

export default function ReadAloudBox({ children, label = 'READ ALOUD' }: ReadAloudBoxProps) {
  return (
    <div className="relative bg-[#1a1814] border-l-[3px] border-l-[#d4a853] rounded-r-lg p-6 my-6">
      <span className="absolute top-3 left-4 text-label text-[#8a7342]">{label}</span>
      <div className="mt-5 font-heading italic text-[#e8e4dc] text-body leading-relaxed">
        {children}
      </div>
    </div>
  );
}
