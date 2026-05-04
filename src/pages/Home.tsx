import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { motion, useInView } from 'framer-motion';
import {
  Scroll,
  Handshake,
  Pickaxe,
  Bone,
  Anchor,
  Skull,
  Eye,
  Warehouse,
  Sunrise,
  BookOpen,
  Map,
  Image,
  ArrowRight,
  Footprints,
  Landmark,
} from 'lucide-react';
import Layout from '@/components/Layout';
import ReadAloudBox from '@/components/ReadAloudBox';
import DMNoteBox from '@/components/DMNoteBox';
import StatBlockBox from '@/components/StatBlockBox';
import { DividerLine } from '@/components/DividerLine';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const navCards = [
  { title: 'The Departure', range: 'Scenes 1–3', icon: Scroll, path: '/scenes/departure' },
  { title: 'The Offer', range: 'Scenes 4–5', icon: Handshake, path: '/scenes/the-offer' },
  { title: 'Into the Stone', range: 'Scenes 6–7', icon: Pickaxe, path: '/scenes/into-the-stone' },
  { title: 'The Long Walk', range: 'Travel System', icon: Footprints, path: '/scenes/the-long-walk' },
  { title: 'The Bridge', range: 'Encounter 1', icon: Bone, path: '/encounters/the-bridge' },
  { title: 'The Crawl', range: 'Encounter 2', icon: Anchor, path: '/encounters/the-crawl' },
  { title: 'The Old Salt', range: 'Encounter 3', icon: Skull, path: '/encounters/the-old-salt' },
  { title: 'The Breach', range: 'Scenes 9–10', icon: Eye, path: '/scenes/the-breach' },
  { title: 'The Camp', range: 'Scenes 11–12', icon: Warehouse, path: '/scenes/the-camp' },
  { title: 'Aftermath', range: 'Outcome Bands', icon: Sunrise, path: '/scenes/aftermath' },
  { title: 'Paluur Draal', range: 'Scene 17', icon: Landmark, path: '/scenes/paluur-draal' },
];

const threads = [
  { title: 'The Stone Passage', summary: 'A hidden route through the Seawall Mountains, controlled by House Tharashk', status: 'Hot' },
  { title: "Vaerek's Braid", summary: 'Vaerek has severed ties with his clan; his honor debt is unpaid', status: 'Warm' },
  { title: 'The Three Clocks', summary: 'Focus Stone, Halvern\'s Execution, Shift Change — moving at different speeds', status: 'Hot' },
  { title: "Vrathek's Bargain", summary: 'The blood seer has offered passage at a price not yet named', status: 'Warm' },
  { title: 'Captain Voss', summary: 'A Brelish officer with orders he will not fully explain', status: 'Background' },
  { title: "Kixil's Promise", summary: 'A kobold guide who knows more than she shares', status: 'Warm' },
  { title: 'Velder\'s Network', summary: 'Tharashk Internal Affairs has found an illegal operation with a shadowy patron', status: 'Hot' },
  { title: 'The Trust of the Lost', summary: 'Niraza Tovaal watches. The Trust collects unusual people doing unusual things.', status: 'Warm' },
];

const statusStyle = (status: string) => {
  switch (status) {
    case 'Hot':
      return 'bg-[#8b0000]/80 text-[#e8e4dc]';
    case 'Warm':
      return 'bg-[#8a7342]/60 text-[#e8e4dc]';
    default:
      return 'bg-[#1a1a2e] text-[#5a5650] border border-[#5a5650]/30';
  }
};

function ScrollSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Layout showSidebar={false}>
      {/* Hero Banner */}
      <section className="relative -mx-4 sm:-mx-6 lg:-mx-8 -mt-6 lg:-mt-8 min-h-[400px] max-h-[600px] h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-banner.png"
            alt="Dark underground tunnel"
            className="w-full h-full object-cover animate-hero-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/80 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="text-display text-[#d4a853]"
          >
            THE STONE PASSAGE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            className="font-heading italic text-[#9a958c] text-xl mt-4"
          >
            An Eberron Campaign Arc
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
            className="text-body text-[#5a5650] mt-6"
          >
            The Last War is over. The stones remember.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
            className="mt-8"
          >
            <Link
              to="/scenes/departure"
              className="inline-flex items-center gap-2 border border-[#d4a853] text-[#d4a853] px-6 py-3 rounded hover:bg-[#d4a853] hover:text-[#0a0a12] transition-all duration-200 animate-pulse-glow"
            >
              Begin the Arc
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[800px] mx-auto">
        {/* GM Guidance */}
        <section className="py-24">
          <ScrollSection>
            <motion.p variants={staggerItem} className="text-label text-[#d4a853]">
              GM GUIDANCE
            </motion.p>
            <motion.h2 variants={staggerItem} className="text-h1 text-[#e8e4dc] mt-2">
              Running the Arc
            </motion.h2>
            <div className="mt-6 space-y-4">
              <motion.p variants={staggerItem} className="text-body text-[#9a958c]">
                This site is organized chronologically — run scenes in the order presented for the best narrative flow.
              </motion.p>
              <motion.p variants={staggerItem} className="text-body text-[#9a958c]">
                Use Read Aloud boxes (amber left border) to narrate directly to your players. These passages set the atmosphere and advance the story.
              </motion.p>
              <motion.p variants={staggerItem} className="text-body text-[#9a958c]">
                DM Notes (crimson left border) contain secrets, contingencies, and information only the GM should know.
              </motion.p>
              <motion.p variants={staggerItem} className="text-body text-[#9a958c]">
                Images can be shown to players as handouts at key moments to enhance immersion.
              </motion.p>
              <motion.p variants={staggerItem} className="text-body text-[#9a958c]">
                Battle maps are downloadable for VTT use — print or import them into your virtual tabletop of choice.
              </motion.p>
            </div>

            {/* Visual Guide */}
            <motion.div variants={staggerItem} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <ReadAloudBox>
                  <span className="font-body not-italic text-sm">
                    <strong className="text-[#d4a853]">Voss:</strong> “We leave at dawn. Be ready.”
                  </span>
                </ReadAloudBox>
                <p className="text-caption text-[#5a5650] text-center mt-1">Read Aloud</p>
              </div>
              <div>
                <DMNoteBox>
                  <span className="text-sm">Voss is hiding orders from High Command about the dragonshard extraction.</span>
                </DMNoteBox>
                <p className="text-caption text-[#5a5650] text-center mt-1">DM Note</p>
              </div>
              <div>
                <StatBlockBox>
                  <span className="text-sm"><strong className="text-[#5f9ea0]">Choker</strong> — AC 13, HP 22, Speed 30 ft.</span>
                </StatBlockBox>
                <p className="text-caption text-[#5a5650] text-center mt-1">Stat Block</p>
              </div>
            </motion.div>
          </ScrollSection>
        </section>

        <DividerLine />

        {/* Active Threads */}
        <section className="py-16">
          <ScrollSection>
            <motion.div variants={staggerItem} className="bg-[#12121e] rounded-xl p-6 sm:p-8">
              <p className="text-label text-[#d4a853]">ACTIVE THREADS</p>
              <h2 className="text-h2 text-[#e8e4dc] mt-2">What the Party Knows</h2>
              <div className="mt-6 space-y-3">
                {threads.map((thread, idx) => (
                  <motion.div
                    key={thread.title}
                    variants={staggerItem}
                    custom={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[#0f0f1a] hover:bg-[#1a1a2e] transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#d4a853]">{thread.title}</p>
                      <p className="text-caption text-[#9a958c] mt-0.5">{thread.summary}</p>
                    </div>
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.06, duration: 0.3 }}
                      className={`shrink-0 text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded ${statusStyle(thread.status)}`}
                    >
                      {thread.status}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollSection>
        </section>

        <DividerLine />

        {/* Setting Context */}
        <section className="py-16 space-y-12">
          <ScrollSection>
            <motion.p variants={staggerItem} className="text-label text-[#d4a853]">
              THE WORLD
            </motion.p>
            <motion.h2 variants={staggerItem} className="text-h2 text-[#e8e4dc] mt-2">
              Two Years After the Last War
            </motion.h2>
            <div className="mt-4 space-y-4">
              <motion.p variants={staggerItem} className="text-body text-[#9a958c]">
                The Last War ended not with a treaty but with the Mourning — a cataclysm that consumed the nation of Cyre in a single day. Two years later, the Five Nations still bleed. Refugees choke the roads. Mercenary companies sell their swords to the highest bidder. And the Dragonmarked Houses grow richer while the nations they once served grow weaker.
              </motion.p>
              <motion.p variants={staggerItem} className="text-body text-[#9a958c]">
                Magitech replaces tradition. Lightning rails connect distant cities. Warforged soldiers, once weapons, now seek purpose in a world that no longer needs armies. In the shadows, spies and smugglers thrive where borders remain uncertain and old allegiances dissolve like morning mist.
              </motion.p>
              <motion.p variants={staggerItem} className="text-body text-[#9a958c]">
                This is Eberron noir: a world of gaslit streets, ancient magic, and moral gray. Every hero has a price. Every villain has a reason.
              </motion.p>
            </div>
          </ScrollSection>

          <ScrollSection>
            <motion.p variants={staggerItem} className="text-label text-[#d4a853]">
              THE REGION
            </motion.p>
            <motion.h2 variants={staggerItem} className="text-h2 text-[#e8e4dc] mt-2">
              Border of Zilargo and Darguun
            </motion.h2>
            <div className="mt-4 space-y-4">
              <motion.p variants={staggerItem} className="text-body text-[#9a958c]">
                The Seawall Mountains stretch six hundred miles along Breland's eastern frontier, forming a natural barrier between the civilized west and the wild lands beyond. Sterngate fortress stands at the southern pass, guarding the trade road into Zilargo. But north of Sterngate, the peaks grow treacherous and the passes fewer.
              </motion.p>
              <motion.p variants={staggerItem} className="text-body text-[#9a958c]">
                The Marguul Pass — named for the hobgoblin clans who once controlled it — offers a hidden route through the stone. House Tharashk, ever hungry for dragonshards, has found something in the deep tunnels. And Breland wants to know what.
              </motion.p>
            </div>
          </ScrollSection>
        </section>

        <DividerLine />

        {/* Quick Navigation Grid */}
        <section className="py-16 max-w-[1000px] mx-auto">
          <ScrollSection>
            <motion.p variants={staggerItem} className="text-label text-[#d4a853] text-center">
              NAVIGATE THE ARC
            </motion.p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {navCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div key={card.title} variants={staggerItem}>
                    <Link
                      to={card.path}
                      className="block bg-[#12121e] border border-[#8a7342]/40 rounded-lg p-6 hover:border-[#d4a853] hover:bg-[#1a1a2e] hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <Icon className="w-6 h-6 text-[#d4a853] mb-3" />
                      <h3 className="text-h3 text-[#d4a853]">{card.title}</h3>
                      <p className="text-caption text-[#5a5650] mt-1">{card.range}</p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </ScrollSection>
        </section>

        <DividerLine />

        {/* DM Tools Quick Access */}
        <section className="py-16">
          <ScrollSection>
            <motion.p variants={staggerItem} className="text-label text-[#d4a853]">
              DM TOOLS
            </motion.p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <motion.div variants={staggerItem}>
                <Link
                  to="/dm-reference"
                  className="flex items-center justify-center gap-3 border border-[#d4a853] text-[#d4a853] px-6 py-4 rounded hover:bg-[#d4a853] hover:text-[#0a0a12] transition-all duration-200"
                >
                  <BookOpen className="w-5 h-5" />
                  <span className="font-medium">DM Reference</span>
                </Link>
              </motion.div>
              <motion.div variants={staggerItem}>
                <Link
                  to="/battle-maps"
                  className="flex items-center justify-center gap-3 border border-[#d4a853] text-[#d4a853] px-6 py-4 rounded hover:bg-[#d4a853] hover:text-[#0a0a12] transition-all duration-200"
                >
                  <Map className="w-5 h-5" />
                  <span className="font-medium">Battle Maps</span>
                </Link>
              </motion.div>
              <motion.div variants={staggerItem}>
                <Link
                  to="/gallery"
                  className="flex items-center justify-center gap-3 border border-[#d4a853] text-[#d4a853] px-6 py-4 rounded hover:bg-[#d4a853] hover:text-[#0a0a12] transition-all duration-200"
                >
                  <Image className="w-5 h-5" />
                  <span className="font-medium">Image Gallery</span>
                </Link>
              </motion.div>
            </div>
          </ScrollSection>
        </section>
      </div>
    </Layout>
  );
}
