import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import ReadAloudBox from "@/components/ReadAloudBox";
import DMNoteBox from "@/components/DMNoteBox";
import SceneImage from "@/components/SceneImage";
import { DividerLine } from "@/components/DividerLine";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function IntoTheStone() {
  return (
    <Layout>
      <Breadcrumb segments={[
        { label: "Home", path: "/" },
        { label: "Scenes", path: "/scenes/into-the-stone" },
        { label: "Into the Stone" }
      ]} />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853]">SCENES 6-7</p>
        <h1 className="text-h1 text-[#e8e4dc] mt-2">Into the Stone</h1>
        <p className="text-body text-[#9a958c] mt-4">
          Kixil leads the party into the kobold road. Ten days beneath the Seawall Mountains. 
          Three legs, six branch points, and the mountain's own rhythm.
        </p>
      </motion.section>

      <SceneImage
        src="/06_kixil_portrait.png"
        alt="Kixil the kobold guide"
        caption="Kixil, senior guide of the Haka'jhar road"
      />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853] mb-4">SCENE 6 · DEPARTURE</p>
        <ReadAloudBox>
          <p className="text-body-lg italic text-[#e8e4dc]">
            Kixil does not introduce herself. She turns and starts walking, and the only way to know if you should follow is to follow.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            The passage descends. Within ten minutes the warmth of the warren is behind you. Within twenty, the air has changed entirely — colder, damp, with the mineral smell of stone that has not seen surface in longer than your nation has had a name.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            Kixil's lamp throws a small circle of cold blue-green light around her. Outside that circle, the dark is absolute. There is no torchlight from the warren behind you anymore. There is no light at all ahead.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            She speaks once, without turning.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Kixil: <span className="italic">"Ten days. Maybe eleven. Walk where I walk. Do not touch the walls in places I do not touch. If I stop, you stop. If I go quiet, you go quieter."</span>
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            Then she goes quiet, and you walk.
          </p>
        </ReadAloudBox>
      </motion.section>

      <DividerLine />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853] mb-4">SCENE 7 · THE LONG WALK</p>
        <SceneImage
          src="/07_coldfire_passage.png"
          alt="Cold-fire stone passage"
          caption="The kobold road beneath the Seawall Mountains"
        />

        <p className="text-body text-[#9a958c] mb-4">
          The journey to the breach takes ten days total, in three legs. The travel system turns the underground journey into a sequence of small, real choices. Each day runs through five phases: morning briefing, travel, midday decision, evening camp, and night watch.
        </p>

        <div className="bg-[#12121e] rounded-xl p-6 sm:p-8 border border-[#8a7342]/30 my-6">
          <h3 className="text-h3 text-[#d4a853] mb-4">The Three Legs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#0f0f1a] rounded-lg p-4">
              <p className="text-label text-[#5f9ea0]">LEG 1</p>
              <p className="text-h4 text-[#e8e4dc] mt-1">Warren → Bridge</p>
              <p className="text-caption text-[#9a958c] mt-2">3 days · 2 branch points</p>
              <p className="text-caption text-[#5a5650] mt-1">The Wet Fork or the Dry Spine · Pilgrims' Camp or Direct Approach</p>
            </div>
            <div className="bg-[#0f0f1a] rounded-lg p-4">
              <p className="text-label text-[#5f9ea0]">LEG 2</p>
              <p className="text-h4 text-[#e8e4dc] mt-1">Bridge → Camp</p>
              <p className="text-caption text-[#9a958c] mt-2">3 days · 2 branch points</p>
              <p className="text-caption text-[#5a5650] mt-1">Old Patrol Road or Cousin's Path · The Long Climb or the Sump</p>
            </div>
            <div className="bg-[#0f0f1a] rounded-lg p-4">
              <p className="text-label text-[#5f9ea0]">LEG 3</p>
              <p className="text-h4 text-[#e8e4dc] mt-1">Camp → Paluur Draal</p>
              <p className="text-caption text-[#9a958c] mt-2">4 days · 2 branch points</p>
              <p className="text-caption text-[#5a5650] mt-1">Buried Road or Surface Skirt · Direct Descent or Whispering Stair</p>
            </div>
          </div>
        </div>

        <Link
          to="/scenes/the-long-walk"
          className="inline-flex items-center gap-2 border border-[#d4a853] text-[#d4a853] px-6 py-3 rounded hover:bg-[#d4a853] hover:text-[#0a0a12] transition-all duration-200 mb-8"
        >
          Open the Travel System
          <ArrowRight className="w-4 h-4" />
        </Link>

        <h3 className="text-h3 text-[#d4a853] mt-8 mb-4">Sensory Beats — Use Sparingly</h3>
        <p className="text-body text-[#9a958c] mb-4">
          Drop these in between encounter set-pieces, one or two at a time. Don't run the whole list at once.
        </p>

        <ReadAloudBox>
          <p className="text-body-lg italic text-[#e8e4dc]">
            The light. The kobolds carry resin lamps that burn blue-green and cold. The resin is harvested from a fungus that only grows where dragonshards bleed into the rock. There are no torches. Fire would consume the air faster than the mountain could feed them.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            The water. It moves through the rock constantly — never visible, but always audible, somewhere just out of reach. Sometimes you can feel it in the floor under your boots, a faint cold trembling.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            The breath. Every six or seven hours, a deep hum passes through the stone. It lasts about a minute. Animals in the warrens stop moving when it happens. Kixil bows her head until it passes. She calls it the mountain's breath. She will not say what it is.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            The footsteps. Twice during the journey, you hear something far above — something heavy walking on the surface. The first time, Kixil glances up. The second time, she does not. She does not name them. <em>"Old things. We do not name them where they can hear."</em>
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            The smell. Mineral. Iron, salt, wet copper, in different combinations as you pass through different rock. In one chamber the air smells faintly of incense — a kobold burial chamber, ten thousand years old, sealed and reopened by your passage.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            The dark. Outside the lamp's circle, your darkvision works for those who have it, but the shadows beyond are still deeper than any night you have known. Whoever does not have darkvision walks with one hand on the next person's shoulder. There is no shame in it. The kobolds expect it.
          </p>
        </ReadAloudBox>

        <DMNoteBox>
          <p className="text-body text-[#e8e4dc]">
            The travel system is your ammunition, not your obligation. If the table is moving quickly and engaged in something downstream, skip whole days with a sentence: <em>"Two more days of walking. The road narrows, then widens. Kixil names a chamber 'the Belly,' and you sleep there."</em> Then resume on a day with a real choice.
          </p>
        </DMNoteBox>
      </motion.section>
    </Layout>
  );
}
