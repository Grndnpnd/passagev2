import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import ReadAloudBox from "@/components/ReadAloudBox";
import DMNoteBox from "@/components/DMNoteBox";
import SceneImage from "@/components/SceneImage";
import { DividerLine } from "@/components/DividerLine";
import { motion } from "framer-motion";

export default function Departure() {
  return (
    <Layout>
      <Breadcrumb segments={[
        { label: "Home", path: "/" },
        { label: "Scenes", path: "/scenes/departure" },
        { label: "The Departure" }
      ]} />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853]">SCENES 1-3</p>
        <h1 className="text-h1 text-[#e8e4dc] mt-2">The Departure</h1>
        <p className="text-body text-[#9a958c] mt-4">
          The Last War is over, but the stones remember. Captain Voss and Vaerek take their leave, 
          and the party steps into the dark beneath the Seawall Mountains.
        </p>
      </motion.section>

      <SceneImage
        src="/01_underground_chamber.png"
        alt="Underground kobold chamber at pre-dawn"
        caption="Scene 1 · The Waking"
      />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853] mb-4">SCENE 1 · THE WAKING</p>
        <ReadAloudBox>
          <p className="text-body-lg italic text-[#e8e4dc]">
            The chamber smells of cold stone and the resin the kobolds burn for light — a slow, blue-green flame that gives off no smoke and almost no warmth. You woke before any of them came to fetch you.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            Vaerek is already up. He has been up for some time. He is sitting near the doorway, his pack already shouldered, looking at nothing in particular.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            Voss is across the chamber on a flat stone slab, sharpening a small curved knife with a scaled, bone-handled grip — kobold work, gifted or traded for, you are not sure which. She does not look up when you stir.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            Somewhere deeper in the rock, a child is laughing. Somewhere deeper still, water is moving through a passage that has not seen sunlight since the dragons walked.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Voss: <span className="italic">"We need to talk about what happens next."</span>
          </p>
        </ReadAloudBox>

        <DMNoteBox>
          <p className="text-body text-[#e8e4dc]">
            Let the players sit with this. Whoever speaks first has set the tone of the goodbye. If they're slow to respond, have Voss continue: <em>"You don't have to make it easy on me. But I'm leaving."</em>
          </p>
        </DMNoteBox>
      </motion.section>

      <DividerLine />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853] mb-4">SCENE 2 · VOSS' DEPARTURE</p>
        <SceneImage
          src="/02_voss_portrait.png"
          alt="Captain Sable Voss portrait"
          caption="Captain Sable Voss"
        />
        <ReadAloudBox>
          <p className="text-body-lg font-medium text-[#d4a853]">
            Voss: <span className="italic">"I won't lie to you. I liked you all more than I expected to. That's a problem for me, professionally."</span>
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Voss: <span className="italic">"Cyran kid on the wheel, goblin who keeps getting up after he should stay down, the changeling who I'm fairly sure is at least three different people — I liked all of it."</span>
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Voss: <span className="italic">"But I am not getting on a House Orien rail with the lot of you and I am not walking south through a kobold's mouth. So this is where it goes."</span>
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            She nods toward Vaerek without looking at him.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Voss: <span className="italic">"He's coming with me. He's got his own thing to chase and it's not in the rocks. I'll see him on a train and turn him loose. After that, the rail goes north and so do I."</span>
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            She finally looks up. Her eyes go to Cyrus first, then to Clarari, deliberately.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Voss: <span className="italic">"Don't follow. Don't write. If you make it to Korranberg, light a candle for the boat — it deserved better. And listen to me on one thing."</span>
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Voss: <span className="italic">"What is on your hands. Don't let anyone see it who hasn't earned the right. The houses don't forgive what they thought they buried."</span>
          </p>
        </ReadAloudBox>

        <DMNoteBox>
          <p className="text-body text-[#e8e4dc]">
            If Cyrus or Clarari ask Voss what she knows about the Mark of Death, she shakes her head once. <em>"I know what it costs to be hunted. Same thing it always costs."</em> She genuinely doesn't know more — but she has lived long enough to recognize a death sentence when she sees it inked into someone's skin.
          </p>
        </DMNoteBox>

        <h3 className="text-h3 text-[#d4a853] mt-8 mb-4">Player Pushback Lines</h3>
        <p className="text-body text-[#9a958c] mb-4">
          If the players try to talk Voss into staying, use one of these and move on — don't let it become a debate.
        </p>
        <div className="space-y-3">
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">If asked to come with them:</strong> <em>"I'd be a corpse in a fortnight and you'd be a corpse two days after, dragging me. No."</em></p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">If offered more money:</strong> <em>"I am not for sale at a price you can pay. That is a compliment, not a refusal."</em></p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">If asked where she's really going:</strong> <em>"Somewhere I can be useless to a house for a few months. After that we'll see."</em></p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">If guilted about leaving:</strong> <em>"I owe you my life. I'm paying that back by not being one more body to drag through your story. Take the gift."</em></p>
          </ReadAloudBox>
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
        <p className="text-label text-[#d4a853] mb-4">SCENE 3 · VAEREK'S DEPARTURE</p>
        <SceneImage
          src="/03_burning_braid.png"
          alt="Brazier with burning braid"
          caption="Vaerek's farewell ritual"
        />
        <p className="text-body text-[#9a958c] mb-4">
          This beat belongs to the player. Vaerek's player has chosen to step away — give the character a clean exit and an open door. Hand the table to Vaerek's player and let them choose how their character leaves.
        </p>

        <h3 className="text-h3 text-[#d4a853] mt-6 mb-4">Optional Material — Offer Only If Asked</h3>
        <ul className="list-disc list-inside space-y-2 text-body text-[#9a958c] mb-6">
          <li>Goliath funeral custom: cutting and burning a single braid of one's own hair as a small mourning rite. Vrathek will later remark, unprompted, that she saw it happen and that it was 'good work.'</li>
          <li>Vaerek has carried a whetstone the whole campaign — his father's, by some tellings. It would mean something for him to leave it with someone, or to take it with him. The player chooses.</li>
          <li>The Frostveil Shard hum is louder in the deep mountain. He can feel it pulling him north and west — toward something he cannot name yet.</li>
          <li>Goliaths do not say goodbye lightly. If Vaerek speaks, he speaks plainly. If he does not speak, that is also a goodbye.</li>
        </ul>

        <ReadAloudBox>
          <p className="text-body-lg italic text-[#e8e4dc]">
            Voss shoulders her pack. Vaerek shoulders his. They do not look back as they step into the corridor leading west.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            A kobold guide is waiting for them in the passage. She is small even for her kind, with a lamp held low so as not to blind those who are not used to her dark.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            Then they are gone, and the room is suddenly emptier than it should be. The brazier hisses quietly.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            And then, from the deeper passage, Vrathek arrives.
          </p>
        </ReadAloudBox>
      </motion.section>
    </Layout>
  );
}
