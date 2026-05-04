import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import DMNoteBox from "@/components/DMNoteBox";
import SceneImage from "@/components/SceneImage";
import { DividerLine } from "@/components/DividerLine";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function DMReference() {
  return (
    <Layout showSidebar={false}>
      <Breadcrumb segments={[
        { label: "Home", path: "/" },
        { label: "DM Reference" }
      ]} />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-h1 text-[#e8e4dc]">DM Quick Reference</h1>
        <p className="text-body text-[#9a958c] mt-4">
          NPC roster, loot tables, threads forward, and mechanical summaries for running Arc II: The Stone Passage.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-h2 text-[#e8e4dc] mb-6">NPC Roster</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-[#12121e] rounded-xl p-5 border border-[#d4a853]/20">
            <SceneImage src="/02_voss_portrait.png" alt="Captain Voss" caption="Captain Sable Voss" />
            <p className="text-caption text-[#9a958c] mt-3">Human veteran, cynical, protective. Leaves in Scene 2. May return in future arcs.</p>
            <Link to="/scenes/departure" className="text-link text-sm mt-2 inline-block">Scene 2</Link>
          </div>
          <div className="bg-[#12121e] rounded-xl p-5 border border-[#d4a853]/20">
            <SceneImage src="/06_kixil_portrait.png" alt="Kixil" caption="Kixil, Kobold Guide" />
            <p className="text-caption text-[#9a958c] mt-3">Senior Haka'jhar guide. Quiet, observant, culturally bound. Her trust is earned, not given.</p>
            <Link to="/scenes/into-the-stone" className="text-link text-sm mt-2 inline-block">Scenes 6-7</Link>
          </div>
          <div className="bg-[#12121e] rounded-xl p-5 border border-[#d4a853]/20">
            <SceneImage src="/05_vrathek_portrait.png" alt="Vrathek" caption="Vrathek, Blood Seer" />
            <p className="text-caption text-[#9a958c] mt-3">Haka'jhar seer and contract-maker. Knows more than she shares. Long memory.</p>
            <Link to="/scenes/the-offer" className="text-link text-sm mt-2 inline-block">Scene 4</Link>
          </div>
          <div className="bg-[#12121e] rounded-xl p-5 border border-[#d4a853]/20">
            <SceneImage src="/21_tessa_laborer.png" alt="Tessa" caption="Tessa, Gnome Laborer" />
            <p className="text-caption text-[#9a958c] mt-3">Senior camp worker, burned wrists, wants out. Leader of the worker exodus. Will help if the party protects her people.</p>
            <Link to="/scenes/the-breach" className="text-link text-sm mt-2 inline-block">Scene 10</Link>
          </div>
          <div className="bg-[#12121e] rounded-xl p-5 border border-[#d4a853]/20">
            <SceneImage src="/22_halvern_prisoner.png" alt="Halvern" caption="Halvern Stalgert" />
            <p className="text-caption text-[#9a958c] mt-3">Tharashk Internal Affairs. Investigating illegal operations. Knows Velder's network pattern. Lives or dies based on party choices.</p>
            <Link to="/scenes/the-breach" className="text-link text-sm mt-2 inline-block">Scene 10</Link>
          </div>
          <div className="bg-[#12121e] rounded-xl p-5 border border-[#d4a853]/20">
            <SceneImage src="/15_scribe_rat.png" alt="Marrik" caption="Marrik, Scribe-Rat" />
            <p className="text-caption text-[#9a958c] mt-3">Vrathek's scout and map-maker. Small, stealthy, not a fighter. Carries full camp intelligence on stone tablets.</p>
            <Link to="/scenes/the-breach" className="text-link text-sm mt-2 inline-block">Scene 10</Link>
          </div>
          <div className="bg-[#12121e] rounded-xl p-5 border border-[#d4a853]/20">
            <SceneImage src="/24_splicer_ruins.png" alt="Splicer" caption="The Splicer" />
            <p className="text-caption text-[#9a958c] mt-3">Half-elf scholar, new PC handoff. Funded by the Trust (unwittingly). Expert on Dhakaani script. Has been alone in Paluur Draal for weeks.</p>
            <Link to="/scenes/paluur-draal" className="text-link text-sm mt-2 inline-block">Scene 17c</Link>
          </div>
          <div className="bg-[#12121e] rounded-xl p-5 border border-[#d4a853]/20">
            <SceneImage src="/23_niraza_tovaal.png" alt="Niraza" caption="Niraza Tovaal" />
            <p className="text-caption text-[#9a958c] mt-3">Trust of the Lost operative, ~60, gnomish. Watches, offers tea, trades information for favors. Knows Velder's pattern.</p>
            <Link to="/scenes/paluur-draal" className="text-link text-sm mt-2 inline-block">Scene 17e</Link>
          </div>
          <div className="bg-[#12121e] rounded-xl p-5 border border-[#d4a853]/20">
            <SceneImage src="/13_brogan_kesh.png" alt="Brogan Kesh" caption="Brogan Kesh" />
            <p className="text-caption text-[#9a958c] mt-3">Tharashk foreman, scared, turning a pocket watch that isn't his. Waiting for courier orders that aren't coming. Will run or fight depending on pressure.</p>
            <Link to="/scenes/the-camp" className="text-link text-sm mt-2 inline-block">Scene 11</Link>
          </div>
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
        <h2 className="text-h2 text-[#e8e4dc] mb-4">Mechanics Summary</h2>

        <div className="space-y-4">
          <div className="bg-[#12121e] rounded-lg p-5 border border-[#d4a853]/20">
            <h3 className="text-h3 text-[#d4a853] mb-2">The Three Clocks</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-body text-[#9a958c]">
              <div>
                <p className="text-label text-[#5f9ea0] mb-1">Focus Stone (SLOW)</p>
                <p>9 segments. 3 segments per day. Pings House Tharashk at Segment 7-9. Silenced by sabotage or damage.</p>
              </div>
              <div>
                <p className="text-label text-[#8b0000] mb-1">Halvern's Execution (MEDIUM)</p>
                <p>9 segments. 3 segments per day. Guard opens cage at Segment 7-9. Stopped by rescue or guard neutralization.</p>
              </div>
              <div>
                <p className="text-label text-[#d4a853] mb-1">Shift Change (FAST)</p>
                <p>6 segments. 3 segments per handover. Night shift fully on at Segment 5-6. Creates stealth window at Segment 3-4.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#12121e] rounded-lg p-5 border border-[#d4a853]/20">
            <h3 className="text-h3 text-[#d4a853] mb-2">Reverence Ladder (Bridge of Bones)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-body text-[#9a958c]">
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#5f9ea0] mb-1">TIER 1</p>
                <p>Full reverence. Bow, quiet crossing, no steel. Kixil's trust deepens. Bone token gift. Shortcut knowledge shared.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#8a7342] mb-1">TIER 2</p>
                <p>Tolerated. Cross without incident but without honor. Professional completion. No extras.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#8b0000] mb-1">TIER 3</p>
                <p>Disrespected. Loud, careless, laughing. Trust damaged. Kobold network hears about it. Recoverable with effort.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#8b0000] mb-1">TIER 4</p>
                <p>Desecrated. Drawing blades, breaking bones, fire. Deal off. Kobold road closed permanently.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#12121e] rounded-lg p-5 border border-[#d4a853]/20">
            <h3 className="text-h3 text-[#d4a853] mb-2">The Crawl — Approach Outcomes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-body text-[#9a958c]">
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#5f9ea0] mb-1">BURN ROOTS</p>
                <p>1d6 fire + exhaustion. No combat. Smoke clears chokers.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#5f9ea0] mb-1">SHATTER CEILING</p>
                <p>2d6 bludgeoning. Buried (Str 14 to escape). Opens upper passage. No combat.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#5f9ea0] mb-1">QUIET WAY</p>
                <p>Stealth DC 16 group. Success = no combat. Failure = 1 choker drops on rearmost.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#5f9ea0] mb-1">SEAL IT</p>
                <p>Seal behind party. Requires speed. No combat if sealed before choker territory ends.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#8b0000] mb-1">CHARGE IN</p>
                <p>3 chokers attack. Combat. Squeeze: non-chokers have -2 AC if immobile. Chokers have advantage on grapple.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#12121e] rounded-lg p-5 border border-[#d4a853]/20">
            <h3 className="text-h3 text-[#d4a853] mb-2">Camp Outcome Bands</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-body text-[#9a958c]">
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#5f9ea0] mb-1">BAND 1: PERFECT</p>
                <p>All 3 clocks stopped. Halvern lives. Stone silenced. Workers free. Kixil shares shortcut. Future kobold trust maxed.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#d4a853] mb-1">BAND 2: GOOD</p>
                <p>2 clocks stopped. Partial worker escape. Stone may have pinged (d20 11+). Professional completion.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#8b0000] mb-1">BAND 3: MESSY</p>
                <p>1 clock stopped. Halvern dead or stone pinged. Combat occurred. Workers dead/scattered. Kixil trust damaged.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#8b0000] mb-1">BAND 4: DISASTER</p>
                <p>No clocks stopped. Massacre. Kixil leaves. Kobold road permanently closed. Tharashk enforcers dispatched.</p>
              </div>
            </div>
          </div>
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
        <h2 className="text-h2 text-[#e8e4dc] mb-4">Threads Forward</h2>
        <p className="text-body text-[#9a958c] mb-4">
          Hooks that lead from this arc into future sessions. Plant 2-3 per session, let the players decide which ones they bite.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Velder's Network:</strong> Halvern's notebook (or his living testimony) reveals Velder operates in at least four locations. One is Korranberg — close to the party's destination. Another is the Marguul highlands — Cyrus's old territory. A third is a House Orien rail junction called Thornwatch. A fourth has only a code name: "The Well."</p>
          </DMNoteBox>
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">The Trust of the Lost:</strong> Niraza's favor is owed, not paid. She will call it in — perhaps in Korranberg, perhaps when the party least expects it. The Trust collects unusual people doing unusual things. The party is now in their ledger.</p>
          </DMNoteBox>
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">The Sealed Door:</strong> The Splicer has partially translated the quiet corridor's sealed door. It speaks of a "key that is not metal" and a "time when the guardians sleep." This is a long-term hook — a future dungeon, a future arc, a future revelation about what the Dhakaani were guarding.</p>
          </DMNoteBox>
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Kixil's Bone Token:</strong> If the party earned Tier 1 at the Bridge of Bones, one of them carries a kobold bone token. It has no magical properties, but it marks them as "friend of the Haka'jhar" to any kobold who recognizes it. This will open doors in future underground travel — or close them, if the bearer has since desecrated kobold sacred spaces.</p>
          </DMNoteBox>
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Tharashk Enforcers:</strong> If the focus stone pinged, House Tharashk knows about the breach. They will send people to investigate. The party's description will circulate. Future encounters with Tharashk personnel will begin with suspicion or hostility. A bounty may be posted. The writ (if kept) is leverage — or evidence.</p>
          </DMNoteBox>
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">The Iron Shrine Mask:</strong> If anyone offered the mask something on Leg 2, its eyes now glow red. What this means is unknown — for now. The mask is tied to whatever the Dhakaani were guarding, and the Dhakaani were guarding something that predated them.</p>
          </DMNoteBox>
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">The Splicer's Grant:</strong> The Splicer discovers, if Niraza reveals it, that his funding came from the Trust. This complicates his academic independence. Does he continue working for them knowingly? Does he cut ties and lose funding? Does he try to play both sides? This is a long-term character tension, not a immediate plot point.</p>
          </DMNoteBox>
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Vrathek's Assessment:</strong> Vrathek, through Kixil's reports and Marrik's maps, will know exactly how the party handled every set-piece. His future contracts will reflect this. If they were careful and respectful, his next offer will be more valuable and more dangerous. If they were loud and destructive, he will not offer again — but he will sell what he knows about them to the right buyer.</p>
          </DMNoteBox>
        </div>
      </motion.section>
    </Layout>
  );
}
