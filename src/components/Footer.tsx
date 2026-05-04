import { DragonshardGlyph } from './DragonshardGlyph';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a12] py-8 px-4">
      <div className="max-w-[800px] mx-auto flex flex-col items-center gap-3">
        <div className="flex items-center gap-3 w-full max-w-xs">
          <div className="flex-1 h-px bg-[#8a7342]/30" />
          <DragonshardGlyph className="w-4 h-4 text-[#5f9ea0]/60" />
          <div className="flex-1 h-px bg-[#8a7342]/30" />
        </div>
        <p className="text-caption text-[#5a5650] text-center">
          The Stone Passage — An Eberron Campaign Arc
        </p>
        <p className="text-caption text-[#5a5650]/60 text-center">
          For private campaign use
        </p>
      </div>
    </footer>
  );
}
