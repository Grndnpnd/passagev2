import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Filter } from "lucide-react";

const allImages = [
  { src: "/01_underground_chamber.png", title: "The Waking", category: "Scenes", scene: "Scene 1" },
  { src: "/02_voss_portrait.png", title: "Captain Voss", category: "NPCs", scene: "Scene 2" },
  { src: "/03_burning_braid.png", title: "Vaerek's Braid-Burning", category: "Scenes", scene: "Scene 3" },
  { src: "/04_brelish_foothills.png", title: "Brelish Foothills", category: "Landscapes", scene: "Scene 5" },
  { src: "/05_vrathek_portrait.png", title: "Vrathek the Blood Seer", category: "NPCs", scene: "Scene 4" },
  { src: "/06_kixil_portrait.png", title: "Kixil the Kobold Guide", category: "NPCs", scene: "Scene 6" },
  { src: "/07_coldfire_passage.png", title: "Cold-Fire Passage", category: "Landscapes", scene: "Scene 7" },
  { src: "/08_bone_bridge.png", title: "Bridge of Bones", category: "Landscapes", scene: "Encounter 1" },
  { src: "/09_choker_ambush.png", title: "The Crawl", category: "Landscapes", scene: "Encounter 2" },
  { src: "/10_salt_burial.png", title: "Salt-Vein Burial", category: "Landscapes", scene: "Encounter 3" },
  { src: "/11_halfling_burial.png", title: "Halfling Burial", category: "Scenes", scene: "Encounter 3" },
  { src: "/12_mining_camp.png", title: "Tharashk Mining Camp", category: "Landscapes", scene: "Scene 9" },
  { src: "/13_brogan_kesh.png", title: "Brogan Kesh", category: "NPCs", scene: "Scene 11" },
  { src: "/14_dragonshard_focus.png", title: "Dragonshard Focus Stone", category: "Scenes", scene: "Scene 9" },
  { src: "/15_scribe_rat.png", title: "Marrik the Scribe-Rat", category: "NPCs", scene: "Scene 10" },
  { src: "/16_iron_cage.png", title: "Iron Cage", category: "Scenes", scene: "Scene 10" },
  { src: "/17_combat_aftermath.png", title: "Combat Aftermath", category: "Scenes", scene: "Scene 12" },
  { src: "/18_velder_writ.png", title: "Velder's Writ", category: "Scenes", scene: "Scene 12" },
  { src: "/19_burning_maps.png", title: "Burning the Maps", category: "Scenes", scene: "Scene 12" },
  { src: "/20_sunset_vista.png", title: "Sunset Vista", category: "Landscapes", scene: "Scene 14" },
  { src: "/21_tessa_laborer.png", title: "Tessa the Gnome Laborer", category: "NPCs", scene: "Scene 10" },
  { src: "/22_halvern_prisoner.png", title: "Halvern Stalgert", category: "NPCs", scene: "Scene 10" },
  { src: "/23_niraza_tovaal.png", title: "Niraza Tovaal", category: "NPCs", scene: "Scene 17e" },
  { src: "/24_splicer_ruins.png", title: "The Splicer", category: "NPCs", scene: "Scene 17c" },
  { src: "/25_fire_drake.png", title: "Fire Drake", category: "Scenes", scene: "Scene 17d" },
  { src: "/BM-01_warren_map.png", title: "BM-01: Kobold Warren", category: "Battle Maps", scene: "VTT" },
  { src: "/BM-02_bridge_map.png", title: "BM-02: Bridge of Bones", category: "Battle Maps", scene: "VTT" },
  { src: "/BM-03_crawlspace_map.png", title: "BM-03: The Crawl", category: "Battle Maps", scene: "VTT" },
  { src: "/BM-04_salt_gallery_map.png", title: "BM-04: Salt Burial", category: "Battle Maps", scene: "VTT" },
  { src: "/BM-05_camp_overlook_map.png", title: "BM-05: Camp Overlook", category: "Battle Maps", scene: "VTT" },
  { src: "/BM-06_camp_interior_map.png", title: "BM-06: Camp Interior", category: "Battle Maps", scene: "VTT" },
  { src: "/BM-07_paluur_draal_map.png", title: "BM-07: Paluur Draal", category: "Battle Maps", scene: "VTT" },
];

const categories = ["All", "Scenes", "NPCs", "Landscapes", "Battle Maps"];

export default function ImageGallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? allImages : allImages.filter((img) => img.category === filter);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const nextImage = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % filtered.length);
  };
  const prevImage = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  };

  return (
    <Layout>
      <Breadcrumb segments={[
        { label: "Home", path: "/" },
        { label: "Gallery" }
      ]} />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-h1 text-[#e8e4dc]">Image Gallery</h1>
        <p className="text-body text-[#9a958c] mt-4">
          All campaign illustrations, NPC portraits, landscapes, and VTT battle maps. 
          Click any image to enlarge. Use these as player handouts or screen shares.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-4 h-4 text-[#d4a853]" />
          <span className="text-label text-[#d4a853]">FILTER</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setLightbox(null); }}
              className={`px-4 py-2 rounded text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-[#d4a853] text-[#0a0a12]"
                  : "border border-[#d4a853]/30 text-[#d4a853] hover:bg-[#d4a853]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, idx) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-[#12121e] rounded-lg overflow-hidden border border-[#d4a853]/10 hover:border-[#d4a853]/40 cursor-pointer group"
                onClick={() => openLightbox(idx)}
              >
                <div className="aspect-square bg-[#0a0a12] relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <p className="text-body text-[#e8e4dc] truncate">{img.title}</p>
                  <p className="text-caption text-[#5a5650]">{img.scene}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-[#0a0a12]/95 flex items-center justify-center" onClick={closeLightbox}>
          <button
            className="absolute top-6 right-6 text-[#d4a853] hover:text-[#e8e4dc] transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-[#d4a853] hover:text-[#e8e4dc] transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-[#d4a853] hover:text-[#e8e4dc] transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <div className="max-w-[90vw] max-h-[80vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <p className="text-h4 text-[#e8e4dc]">{filtered[lightbox].title}</p>
              <p className="text-body text-[#9a958c]">{filtered[lightbox].scene} · {filtered[lightbox].category}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
