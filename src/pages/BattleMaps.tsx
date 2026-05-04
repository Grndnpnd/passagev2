import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import DMNoteBox from "@/components/DMNoteBox";
import { DividerLine } from "@/components/DividerLine";
import { motion } from "framer-motion";

const maps = [
  {
    id: "BM-01",
    name: "Kobold Warren",
    file: "/BM-01_warren_chamber.png",
    dims: "30×40",
    scale: "5 ft",
    vtt: "Roll20: 2100×2800px | Foundry: 30×40 grid",
    description: "The Haka'jhar warrens — tunnels, chambers, and the central gathering hall where Vrathek makes her offer."
  },
  {
    id: "BM-02",
    name: "Bridge of Bones",
    file: "/BM-02_bone_bridge.png",
    dims: "20×50",
    scale: "5 ft",
    vtt: "Roll20: 1400×3500px | Foundry: 20×50 grid",
    description: "The bone bridge across the chasm, with approach ledges and the deep below."
  },
  {
    id: "BM-03",
    name: "The Crawl",
    file: "/BM-03_crawlspace.png",
    dims: "25×35",
    scale: "5 ft",
    vtt: "Roll20: 1750×2450px | Foundry: 25×35 grid",
    description: "Squeeze tunnels with choker ambush points, ceiling nest hollows, and dead-end alcoves."
  },
  {
    id: "BM-04",
    name: "Salt-Vein Burial",
    file: "/BM-04_salt_gallery.png",
    dims: "30×30",
    scale: "5 ft",
    vtt: "Roll20: 2100×2100px | Foundry: 30×30 grid",
    description: "The Old Salt — salt-lined alcoves, burial niches, and the non-kobold body."
  },
  {
    id: "BM-05",
    name: "Tharashk Camp Overlook",
    file: "/BM-05_breach_approach.png",
    dims: "35×25",
    scale: "5 ft",
    vtt: "Roll20: 2450×1750px | Foundry: 35×25 grid",
    description: "The gallery overlook and the camp below — guard posts, equipment piles, cage location."
  },
  {
    id: "BM-06",
    name: "Tharashk Camp Interior",
    file: "/BM-06_mining_camp.png",
    dims: "40×30",
    scale: "5 ft",
    vtt: "Roll20: 2800×2100px | Foundry: 40×30 grid",
    description: "The camp itself — tents, equipment, focus-stone tripod, cage, foreman's quarters."
  },
  {
    id: "BM-07",
    name: "Paluur Draal Ruins",
    file: "/BM-07_surface_shelf.png",
    dims: "40×40",
    scale: "5 ft",
    vtt: "Roll20: 2800×2800px | Foundry: 40×40 grid",
    description: "The Dhakaani ruin hall, three corridor entrances, the Splicer's camp, and the sealed door."
  },
];

export default function BattleMaps() {
  return (
    <Layout>
      <Breadcrumb segments={[
        { label: "Home", path: "/" },
        { label: "Battle Maps" }
      ]} />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853]">VTT ASSETS</p>
        <h1 className="text-h1 text-[#e8e4dc] mt-2">Battle Maps</h1>
        <p className="text-body text-[#9a958c] mt-4">
          Seven tactical maps for Roll20, Foundry VTT, or printed tabletop play. 
          Each map is sized for 5-foot grid squares and includes lighting notes.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {maps.map((map) => (
            <div key={map.id} className="bg-[#12121e] rounded-xl overflow-hidden border border-[#d4a853]/20 hover:border-[#d4a853]/50 transition-colors">
              <div className="aspect-square bg-[#0a0a12] relative">
                <img
                  src={map.file}
                  alt={map.name}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-label text-[#d4a853]">{map.id}</span>
                  <span className="text-caption text-[#5a5650]">{map.dims} · {map.scale}</span>
                </div>
                <h3 className="text-h4 text-[#e8e4dc] mb-2">{map.name}</h3>
                <p className="text-body text-[#9a958c] mb-3">{map.description}</p>
                <p className="text-caption text-[#5f9ea0]">{map.vtt}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <DividerLine />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-h2 text-[#e8e4dc] mb-4">VTT Setup Notes</h2>
        <div className="space-y-3">
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Lighting:</strong> All underground maps should use dim light (40 ft bright / 80 ft dim) for areas near lamps or braziers. The Bridge of Bones map has no light sources — only what the party carries. The Paluur Draal map has ambient faint glow from the iron-red script.</p>
          </DMNoteBox>
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Dynamic Lighting:</strong> In Roll20 or Foundry, enable line-of-sight blocking for walls. The Crawl map should have narrow corridors that block movement for Large creatures. The Bridge map should have no floor beyond the bones — falling is an option.</p>
          </DMNoteBox>
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Fog of War:</strong> For the Camp Overlook map, reveal only the gallery edge initially. The camp below should be revealed as the party observes it — Kixil points things out, the players mark what they see. Do not reveal the full camp until they descend or use scrying.</p>
          </DMNoteBox>
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Gridless option:</strong> All maps work without grids for theater-of-the-mind play. Simply describe distances in feet and let players position themselves relatively.</p>
          </DMNoteBox>
        </div>
      </motion.section>
    </Layout>
  );
}
