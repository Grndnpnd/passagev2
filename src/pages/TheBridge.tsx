import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import ReadAloudBox from "@/components/ReadAloudBox";
import DMNoteBox from "@/components/DMNoteBox";
import SceneImage from "@/components/SceneImage";
import { DividerLine } from "@/components/DividerLine";
import { motion } from "framer-motion";

export default function TheBridge() {
  return (
    <Layout>
      <Breadcrumb segments={[
        { label: "Home", path: "/" },
        { label: "Encounters", path: "/encounters/the-bridge" },
        { label: "The Bridge of Bones" }
      ]} />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853]">ENCOUNTER 1 · REDESIGNED</p>
        <h1 className="text-h1 text-[#e8e4dc] mt-2">The Bridge of Bones</h1>
        <p className="text-body text-[#9a958c] mt-4">
          A sacred place that watches who crosses it. The bridge is judging the party more than it is testing them. 
          Kixil and the attendants notice everything. No mechanical checks — only choices.
        </p>
      </motion.section>

      <SceneImage
        src="/08_bone_bridge.png"
        alt="Bridge of Bones across a chasm"
        caption="The Bridge of Bones — kin-road of the kobolds"
      />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853] mb-4">APPROACH</p>
        <ReadAloudBox>
          <p className="text-body-lg italic text-[#e8e4dc]">
            The passage opens without warning into a vault — a natural chamber so tall the lamp does not find the ceiling and so wide the far wall is a darker shadow against the dark. The air is different here. Warmer than the tunnels behind you, and rising, as if the stone itself is breathing.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            Across the middle of the vault, end to end, runs a bridge.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            It is not stone. It is bone — vertebrae the size of cart wheels, ribs the length of spears, a spine of something so large you cannot picture the body it belonged to even now that you are standing on the edge of it. The bones have been arranged with care. Worn smooth in places by centuries of small clawed feet. Lashed at the joints with cord that is older than your grandmother.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            Below the bridge, the chasm goes down farther than your light can follow. A warm updraft rises from it, slow and steady, smelling of dry stone and something faintly mineral.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            The two kobold attendants stop ten feet from the bridge's edge. They set down what they are carrying. They lower their heads — not to the ground, but enough that their snouts touch their own chests. They wait there.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            Kixil walks past them to the edge of the bridge. She does not step on it. She turns to face you.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Kixil: <span className="italic">"This is the Bridge of Bones. The first of our great-cousins, who chose the deep when the sky betrayed them. Their bones are our road. We do not cross without first knowing whose road this is."</span>
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            She bows — not quickly, not theatrically. A long, quiet inclination of the head and the shoulders, eyes closed. She holds it for several seconds. Then she straightens.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Kixil: <span className="italic">"You are not kobold. We do not ask kobold things of you. But this is not a place to be loud, and it is not a place to be careless. Cross when you are ready. Cross one at a time if you wish, or together. The bones will hold you."</span>
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            She turns and waits for you to decide.
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
        <h2 className="text-h2 text-[#e8e4dc] mb-4">The Reverence Ladder</h2>
        <p className="text-body text-[#9a958c] mb-6">
          Run the crossing as roleplay, not dice. Watch what the players do and have their characters do. Place them on the ladder as you go. The two attendants and Kixil are present and observing throughout.
        </p>

        <div className="space-y-4">
          <div className="bg-[#12121e] border border-[#d4a853]/40 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-label text-[#d4a853]">TIER 1</span>
              <span className="text-h4 text-[#e8e4dc]">Full Reverence</span>
            </div>
            <p className="text-body text-[#9a958c]">
              Party pauses at the edge. At least one of them bows or otherwise marks the moment. They cross deliberately, quietly, helping each other where the bones are awkward. No one draws steel. No one speaks loudly. Kixil and the attendants notice.
            </p>
            <p className="text-body text-[#d4a853] mt-2 font-medium">
              Outcome: Full standing with Kixil. She speaks more openly, shares what she knows about Paluur Draal that she would not have shared otherwise. At the end of the journey she gives one of them — whoever showed the most reverence — a small bone token. It does nothing magical. It is a kobold's mark of trust, and it will matter later.
            </p>
          </div>

          <div className="bg-[#12121e] border border-[#8a7342]/30 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-label text-[#8a7342]">TIER 2</span>
              <span className="text-h4 text-[#e8e4dc]">Tolerated</span>
            </div>
            <p className="text-body text-[#9a958c]">
              Party crosses without incident but does not honor the place. They are quiet enough, careful enough, but they do not bow, do not pause, treat the bridge as a thing to get past. Kixil's face goes still. The attendants do not look at the party again.
            </p>
            <p className="text-body text-[#9a958c] mt-2">
              Outcome: Standing intact but cool. Kixil completes her contract. She guides them the rest of the way, shares what she must, and answers direct questions. She does not volunteer. She does not warm. The relationship is professional.
            </p>
          </div>

          <div className="bg-[#12121e] border border-[#8b0000]/30 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-label text-[#8b0000]">TIER 3</span>
              <span className="text-h4 text-[#e8e4dc]">Disrespected</span>
            </div>
            <p className="text-body text-[#9a958c]">
              Party crosses loudly, carelessly, with visible disregard. Someone laughs at the bones. Someone leans on a rib. Someone drops a pack on the spine and lets it slide. Nothing is broken, but the place was not honored. The attendants murmur to each other in Draconic. Kixil does not speak again until they reach the far side.
            </p>
            <p className="text-body text-[#9a958c] mt-2">
              Outcome: Standing damaged but recoverable. Kixil completes the contract grimly. She does not share anything beyond what was paid for. Future kobold contacts in this region will have heard about the party's behavior. Vrathek, if they meet him again, will know. Recovering this standing requires real action — a gift, an apology in Draconic, a service rendered to the kobolds without payment.
            </p>
          </div>

          <div className="bg-[#3a1515]/40 border border-[#8b0000] rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-label text-[#8b0000]">TIER 4</span>
              <span className="text-h4 text-[#e8e4dc]">Desecrated</span>
            </div>
            <p className="text-body text-[#9a958c]">
              Party strikes the bones, breaks a bone, draws a flame on the bridge, or otherwise commits an act that crosses the line. Kixil holds up a hand. The attendants pick up their bundles.
            </p>
            <p className="text-body-lg italic text-[#e8e4dc] mt-2">
              "This is not your road anymore. You will go back."
            </p>
            <p className="text-body text-[#9a958c] mt-2">
              They turn and walk. They will not be argued with. Outcome: Deal off. The party can attempt Paluur Draal alone, but they have no kobold map, no kobold guide, and the kobold network from here forward is closed to them. This is a real, campaign-altering consequence, and it is reserved for active desecration only. <strong className="text-[#d4a853]">Mistakes do not trigger this. Choices do.</strong>
            </p>
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
        <h2 className="text-h2 text-[#e8e4dc] mb-4">The Snag Moment</h2>
        <p className="text-body text-[#9a958c] mb-4">
          Somewhere mid-crossing, give the party a small problem. These are <strong className="text-[#d4a853]">moments of choice</strong>, not skill checks. Pick whichever fits the party best — give the snag to the character who will be most tested by it.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">The Snagged Pack:</strong> A character's pack strap snags on a vertebra. Cut the strap (drawing a blade on the bridge — Tier 4), abandon the pack (lose whatever was in it), or ask for help (Tier 1 behavior, party member helps free it gently).</p>
          </DMNoteBox>
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">The Slip:</strong> A character slips on a worn rib and grabs the nearest handhold — which is a bone. Regain footing on their own, accept a hand from a companion (Tier 1), or grab the bone and shove off it (Tier 3, depending on how described).</p>
          </DMNoteBox>
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">The Lantern Flicker:</strong> A character's lantern flickers and the guttering wick throws sparks. Extinguish it (lose light for the rest of the crossing) or push through (escalating risk).</p>
          </DMNoteBox>
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">The Attendant's Breath:</strong> One of the attendants makes a sharp intake of breath, and the party realizes they can see something below them in the chasm that the party cannot.</p>
          </DMNoteBox>
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
        <h2 className="text-h2 text-[#e8e4dc] mb-4">What Kixil Says on the Far Side</h2>
        <div className="space-y-4">
          <ReadAloudBox>
            <p className="text-label text-[#d4a853] mb-1">TIER 1</p>
            <p className="text-body-lg italic text-[#e8e4dc]">
              Kixil waits until the last of you is across. Then she turns and bows once more, deeper this time, and not toward the bones — toward you. <em>"You did not have to honor them. You did. We will remember this."</em>
            </p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-label text-[#8a7342] mb-1">TIER 2</p>
            <p className="text-body-lg italic text-[#e8e4dc]">
              Kixil waits until the last of you is across. She nods, once, and gestures toward the passage ahead. <em>"We continue. Paluur Draal is two days from here. We should make ground while the air is warm."</em>
            </p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-label text-[#8b0000] mb-1">TIER 3</p>
            <p className="text-body-lg italic text-[#e8e4dc]">
              Kixil does not look at you when the last of you reaches the far side. She begins walking. After a long moment she says, without turning, <em>"We continue. Speak only when you must."</em>
            </p>
          </ReadAloudBox>
        </div>

        <DMNoteBox>
          <p className="text-body text-[#e8e4dc]">
            <strong className="text-[#d4a853]">Key principle:</strong> The line between Tier 3 and Tier 4: <strong>mistakes are Tier 3, choices are Tier 4.</strong> Tripping and grabbing a bone by reflex is a mistake. Drawing a sword to cut a strap is a choice. The bridge is forgiving of fear and clumsiness. It is not forgiving of disrespect.
          </p>
        </DMNoteBox>
      </motion.section>
    </Layout>
  );
}
