import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import ReadAloudBox from "@/components/ReadAloudBox";
import DMNoteBox from "@/components/DMNoteBox";
import SceneImage from "@/components/SceneImage";
import { DividerLine } from "@/components/DividerLine";
import { motion } from "framer-motion";

export default function TheOldSalt() {
  return (
    <Layout>
      <Breadcrumb segments={[
        { label: "Home", path: "/" },
        { label: "Encounters", path: "/encounters/the-old-salt" },
        { label: "The Old Salt" }
      ]} />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853]">ENCOUNTER 3</p>
        <h1 className="text-h1 text-[#e8e4dc] mt-2">The Old Salt</h1>
        <p className="text-body text-[#9a958c] mt-4">
          A holy place to the kobolds. Their dead are laid here, packed in salt, to dry and preserve. 
          The party will see two such alcoves on the way through. Some of the bodies are not kobolds.
        </p>
      </motion.section>

      <SceneImage
        src="/10_salt_burial.png"
        alt="Salt-vein burial chamber"
        caption="The Old Salt — a burial gallery in the deep stone"
      />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <ReadAloudBox>
          <p className="text-body-lg italic text-[#e8e4dc]">
            The passage opens into a chamber unlike any you have walked through. The walls are no longer stone — or rather, the stone is shot through with a thick ribbon of pale, crystalline salt, twenty feet across at its widest, glowing very faintly in the lamp-light like distant moonlight on water.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            Kixil stops just inside the chamber. She lowers her lamp.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Kixil: <span className="italic">"The Old Salt. We bury our dead here when we can. The earth gives them back slowly. Be quiet, please."</span>
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            Looking around, you see them — small alcoves carved at intervals into the salt vein, perhaps a dozen visible from where you stand. Some are sealed with stone. Some are open. In the open ones, dried forms lie in repose, packed in salt, peaceful, very old.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            Most are kobold-shaped. Two are not.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            One of the not-kobold-shaped figures is taller than any of you. Its proportions are wrong. Its silhouette is not human, not elf, not orc.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            Kixil sees you looking.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Kixil: <span className="italic">"Older than us. Older than your peoples. We did not put it there. It was already here when our grandmothers found this place. We honor it the same as our own."</span>
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
        <h2 className="text-h2 text-[#e8e4dc] mb-4">Roleplay Beats — Optional</h2>
        <p className="text-body text-[#9a958c] mb-4">
          If the party wants to stop here for a meal or rest, this is the natural place for a quiet roleplay beat. Don't push it; let them choose. Some prompts:
        </p>
        <ul className="list-disc list-inside space-y-3 text-body text-[#9a958c] mb-6">
          <li><strong className="text-[#d4a853]">Reeks</strong> may make a small offering of his own. Changeling tradition: leave a face-coin — a small disk of bone or wood scratched with one of the faces he has worn. The kobolds will not disturb it.</li>
          <li><strong className="text-[#d4a853]">Gnoggin</strong> may sing something. The acoustics of the salt chamber are unlike any other place — voices carry strangely, soft and full at once. The kobolds will listen. They will not say thank you, but Kixil will mark something on the base of her lamp.</li>
          <li><strong className="text-[#d4a853]">Clarari's</strong> quori spirit may stir near the dead. The voice she usually hears goes very quiet here. In its place: a question, in a voice she does not recognize. Use this if you want to seed a Mark of Death moment for her.</li>
          <li><strong className="text-[#d4a853]">Cyrus</strong> may recognize one of the smaller alcoves' contents — a halfling skeleton, packed in salt, with a particular pattern of beading on the wrappings. Talenta Plains burial work, very old. He has no idea how a halfling came to be buried in the deep Seawall.</li>
        </ul>

        <SceneImage
          src="/11_halfling_burial.png"
          alt="Salt-preserved halfling burial"
          caption="Talenta Plains burial work in the deep stone"
        />

        <DMNoteBox>
          <p className="text-body text-[#e8e4dc]">
            The not-kobold body is foreshadowing for a future arc — possibly couatl, possibly draconic, possibly something Eberron-strange. Keep it ambiguous. If asked directly, Kixil will say only: <em>"It was the shape of something we did not have a word for."</em>
          </p>
        </DMNoteBox>

        <DMNoteBox>
          <p className="text-body text-[#e8e4dc]">
            Use Reeks (Religion DC 13 if pressed) to identify a similarity between the kobolds' resin and certain Aerenal funerary practices — the elves of the dead-isle harvest a different but similarly-functioning fungus for their own death-flames. The kobolds do not know this. They simply call the resin 'cold-fire' and keep their lamps lit.
          </p>
        </DMNoteBox>
      </motion.section>
    </Layout>
  );
}
