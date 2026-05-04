import type { ReactNode } from 'react';
import { DMWatermark } from './DMWatermark';

interface DMNoteBoxProps {
  children: ReactNode;
  label?: string;
}

export default function DMNoteBox({ children, label = 'DM NOTE' }: DMNoteBoxProps) {
  return (
    <div className="relative bg-[#1a0f0f] border-l-[3px] border-l-[#8b0000] rounded-r-lg p-6 my-6 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <DMWatermark className="w-full text-[#8b0000]" />
      </div>
      <span className="absolute top-3 left-4 text-label text-[#8b0000]">{label}</span>
      <div className="relative mt-5 text-[#c9a0a0] text-body leading-relaxed">
        {children}
      </div>
    </div>
  );
}
