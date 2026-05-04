import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { ChevronDown, ChevronRight, ChevronLeft, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface Section {
  title: string;
  items: { path: string; label: string }[];
}

const sections: Section[] = [
  {
    title: 'Departure',
    items: [
      { path: '/scenes/departure', label: 'Scene 1: The Waking' },
      { path: '/scenes/departure', label: 'Scene 2: Captain Voss' },
      { path: '/scenes/departure', label: 'Scene 3: Vaerek' },
    ],
  },
  {
    title: 'The Offer',
    items: [
      { path: '/scenes/the-offer', label: "Scene 4: Vrathek's Offer" },
      { path: '/scenes/the-offer', label: 'Scene 5: Cyrus & Marguul' },
    ],
  },
  {
    title: 'Into the Stone',
    items: [
      { path: '/scenes/into-the-stone', label: 'Scene 6: Departure' },
      { path: '/scenes/into-the-stone', label: 'Scene 7: The Long Walk' },
    ],
  },
  {
    title: 'The Long Walk',
    items: [
      { path: '/scenes/the-long-walk', label: 'Travel System' },
      { path: '/scenes/the-long-walk', label: 'Leg 1: Warren → Bridge' },
      { path: '/scenes/the-long-walk', label: 'Leg 2: Bridge → Camp' },
      { path: '/scenes/the-long-walk', label: 'Leg 3: Camp → Paluur Draal' },
    ],
  },
  {
    title: 'The Bridge',
    items: [{ path: '/encounters/the-bridge', label: 'Encounter: Bridge of Bones' }],
  },
  {
    title: 'The Crawl',
    items: [{ path: '/encounters/the-crawl', label: 'Encounter: The Crawl' }],
  },
  {
    title: 'The Old Salt',
    items: [{ path: '/encounters/the-old-salt', label: 'Encounter: Salt-Vein Burial' }],
  },
  {
    title: 'The Breach',
    items: [
      { path: '/scenes/the-breach', label: 'Scene 9: The Breach' },
      { path: '/scenes/the-breach', label: 'Scene 10: Three Voices' },
      { path: '/scenes/the-breach', label: 'Scene 11: The Levers' },
    ],
  },
  {
    title: 'The Camp',
    items: [
      { path: '/scenes/the-camp', label: 'Scene 12: Aftermath' },
    ],
  },
  {
    title: 'Paluur Draal',
    items: [
      { path: '/scenes/paluur-draal', label: 'Scene 17: The Threshold' },
      { path: '/scenes/paluur-draal', label: 'The Ruins & Splicer' },
      { path: '/scenes/paluur-draal', label: 'The Fire Drake' },
      { path: '/scenes/paluur-draal', label: 'Niraza Tovaal' },
    ],
  },
];

function getAdjacentPages(currentPath: string) {
  const allItems = sections.flatMap((s) => s.items.map((i) => ({ ...i, section: s.title })));
  const idx = allItems.findIndex((i) => i.path === currentPath);
  if (idx === -1) return { prev: undefined, next: undefined };
  return {
    prev: idx > 0 ? allItems[idx - 1] : undefined,
    next: idx < allItems.length - 1 ? allItems[idx + 1] : undefined,
  };
}

export default function Sidebar() {
  const { pathname } = useLocation();
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    sections.forEach((s) => {
      init[s.title] = s.items.some((i) => i.path === pathname);
    });
    return init;
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggle = (title: string) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const { prev, next } = getAdjacentPages(pathname);

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 border-b border-[#8a7342]/20">
        <span className="text-label text-[#8a7342]">Arc Navigation</span>
      </div>
      <div className="flex-1 overflow-y-auto py-2">
        {sections.map((section) => (
          <div key={section.title} className="mb-1">
            <button
              onClick={() => toggle(section.title)}
              className="w-full flex items-center gap-1 px-4 py-2 text-sm text-[#9a958c] hover:text-[#d4a853] hover:bg-[#1a1a2e]/40 transition-colors"
            >
              {expanded[section.title] ? (
                <ChevronDown className="w-3.5 h-3.5 shrink-0" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              )}
              <span className="font-medium">{section.title}</span>
            </button>
            <AnimatePresence initial={false}>
              {expanded[section.title] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  {section.items.map((item) => {
                    const active = item.path === pathname;
                    return (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-1.5 pl-10 text-sm transition-colors border-l-[3px] ${
                          active
                            ? 'border-l-[#d4a853] bg-[#1a1a2e] text-[#d4a853]'
                            : 'border-l-transparent text-[#9a958c] hover:text-[#d4a853] hover:bg-[#1a1a2e]/30'
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Prev/Next */}
      <div className="border-t border-[#8a7342]/20 px-4 py-3 flex items-center justify-between">
        {prev ? (
          <Link
            to={prev.path}
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-1 text-xs text-[#5a5650] hover:text-[#d4a853] transition-colors"
          >
            <ChevronLeft className="w-3 h-3" />
            Prev
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={next.path}
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-1 text-xs text-[#5a5650] hover:text-[#d4a853] transition-colors"
          >
            Next
            <ChevronRight className="w-3 h-3" />
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed bottom-4 left-4 z-50 w-10 h-10 bg-[#12121e] border border-[#8a7342]/40 rounded-full flex items-center justify-center text-[#d4a853] shadow-lg"
        aria-label="Toggle sidebar"
      >
        <Menu className="w-4 h-4" />
      </button>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block fixed left-0 top-14 bottom-0 w-[280px] bg-[#12121e] border-r border-[#8a7342]/20 z-40">
        {sidebarContent}
      </aside>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/70 z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden fixed left-0 top-14 bottom-0 w-[280px] bg-[#12121e] border-r border-[#8a7342]/20 z-50"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-2 right-2 p-1 text-[#9a958c] hover:text-[#d4a853]"
              >
                <X className="w-4 h-4" />
              </button>
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
