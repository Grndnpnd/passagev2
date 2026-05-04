import type { ReactNode } from 'react';

interface StatBlockBoxProps {
  children: ReactNode;
  label?: string;
}

export default function StatBlockBox({ children, label = 'STAT BLOCK' }: StatBlockBoxProps) {
  return (
    <div className="relative bg-[#14141f] border-l-[3px] border-l-[#5f9ea0] rounded-r-lg p-6 my-6">
      <span className="absolute top-3 left-4 text-label text-[#5f9ea0]/70">{label}</span>
      <div className="mt-5 text-[#e8e4dc] text-body leading-relaxed">
        {children}
      </div>
    </div>
  );
}
