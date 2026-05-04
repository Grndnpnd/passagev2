import type { ReactNode } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { DragonshardGlyph } from './DragonshardGlyph';

const scenesLinks = [
  { path: '/scenes/departure', label: 'The Departure' },
  { path: '/scenes/the-offer', label: 'The Offer' },
  { path: '/scenes/into-the-stone', label: 'Into the Stone' },
  { path: '/scenes/the-long-walk', label: 'The Long Walk' },
  { path: '/scenes/the-breach', label: 'The Breach' },
  { path: '/scenes/the-camp', label: 'The Camp' },
  { path: '/scenes/aftermath', label: 'Aftermath' },
  { path: '/scenes/paluur-draal', label: 'Paluur Draal' },
];

const encounterLinks = [
  { path: '/encounters/the-bridge', label: 'The Bridge' },
  { path: '/encounters/the-crawl', label: 'The Crawl' },
  { path: '/encounters/the-old-salt', label: 'The Old Salt' },
];

const topLinks = [
  { path: '/', label: 'Home' },
  { path: '/dm-reference', label: 'DM Reference' },
  { path: '/battle-maps', label: 'Maps' },
  { path: '/gallery', label: 'Gallery' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scenesOpen, setScenesOpen] = useState(false);
  const [encountersOpen, setEncountersOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 bg-[#12121e] border-b border-[#8a7342]/30">
      <div className="flex items-center h-full px-4 lg:px-6 max-w-[1400px] mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <DragonshardGlyph className="w-5 h-5 text-[#5f9ea0]" />
          <span className="font-display text-[#d4a853] text-sm tracking-wider hidden sm:inline">
            THE STONE PASSAGE
          </span>
          <span className="font-display text-[#d4a853] text-sm tracking-wider sm:hidden">
            STONE PASSAGE
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 ml-auto">
          <NavLink to="/" active={isActive('/')}>Home</NavLink>

          <div className="relative">
            <button
              onClick={() => setScenesOpen(!scenesOpen)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded text-sm transition-colors ${
                scenesLinks.some((l) => pathname.startsWith(l.path))
                  ? 'text-[#d4a853]'
                  : 'text-[#9a958c] hover:text-[#d4a853]'
              }`}
            >
              Scenes
              <ChevronDown className={`w-3 h-3 transition-transform ${scenesOpen ? 'rotate-180' : ''}`} />
            </button>
            {scenesOpen && (
              <div className="absolute top-full left-0 mt-1 bg-[#12121e] border border-[#8a7342]/30 rounded-md py-1 min-w-[180px] shadow-lg">
                {scenesLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setScenesOpen(false)}
                    className={`block px-3 py-1.5 text-sm transition-colors ${
                      isActive(link.path)
                        ? 'text-[#d4a853] bg-[#1a1a2e]'
                        : 'text-[#9a958c] hover:text-[#d4a853] hover:bg-[#1a1a2e]/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setEncountersOpen(!encountersOpen)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded text-sm transition-colors ${
                encounterLinks.some((l) => pathname.startsWith(l.path))
                  ? 'text-[#d4a853]'
                  : 'text-[#9a958c] hover:text-[#d4a853]'
              }`}
            >
              Encounters
              <ChevronDown className={`w-3 h-3 transition-transform ${encountersOpen ? 'rotate-180' : ''}`} />
            </button>
            {encountersOpen && (
              <div className="absolute top-full left-0 mt-1 bg-[#12121e] border border-[#8a7342]/30 rounded-md py-1 min-w-[180px] shadow-lg">
                {encounterLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setEncountersOpen(false)}
                    className={`block px-3 py-1.5 text-sm transition-colors ${
                      isActive(link.path)
                        ? 'text-[#d4a853] bg-[#1a1a2e]'
                        : 'text-[#9a958c] hover:text-[#d4a853] hover:bg-[#1a1a2e]/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {topLinks.slice(1).map((link) => (
            <NavLink key={link.path} to={link.path} active={isActive(link.path)}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden ml-auto text-[#9a958c] hover:text-[#d4a853] p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#12121e] border-b border-[#8a7342]/30 px-4 py-3 space-y-1">
          <MobileLink to="/" active={isActive('/')} onClick={() => setMobileOpen(false)}>Home</MobileLink>
          <div className="text-xs text-[#8a7342] uppercase tracking-wider mt-2 mb-1">Scenes</div>
          {scenesLinks.map((link) => (
            <MobileLink key={link.path} to={link.path} active={isActive(link.path)} onClick={() => setMobileOpen(false)}>
              {link.label}
            </MobileLink>
          ))}
          <div className="text-xs text-[#8a7342] uppercase tracking-wider mt-2 mb-1">Encounters</div>
          {encounterLinks.map((link) => (
            <MobileLink key={link.path} to={link.path} active={isActive(link.path)} onClick={() => setMobileOpen(false)}>
              {link.label}
            </MobileLink>
          ))}
          <div className="border-t border-[#8a7342]/20 my-2" />
          {topLinks.slice(1).map((link) => (
            <MobileLink key={link.path} to={link.path} active={isActive(link.path)} onClick={() => setMobileOpen(false)}>
              {link.label}
            </MobileLink>
          ))}
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, active, children }: { to: string; active: boolean; children: ReactNode }) {
  return (
    <Link
      to={to}
      className={`relative px-3 py-1.5 rounded text-sm transition-colors ${
        active ? 'text-[#d4a853]' : 'text-[#9a958c] hover:text-[#d4a853]'
      }`}
    >
      {children}
      {active && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#d4a853] rounded-full" />}
    </Link>
  );
}

function MobileLink({
  to,
  active,
  children,
  onClick,
}: {
  to: string;
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block px-3 py-2 rounded text-sm transition-colors ${
        active
          ? 'text-[#d4a853] bg-[#1a1a2e]'
          : 'text-[#9a958c] hover:text-[#d4a853] hover:bg-[#1a1a2e]/50'
      }`}
    >
      {children}
    </Link>
  );
}
