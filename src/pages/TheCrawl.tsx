import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import ReadAloudBox from "@/components/ReadAloudBox";
import DMNoteBox from "@/components/DMNoteBox";
import SceneImage from "@/components/SceneImage";
import { DividerLine } from "@/components/DividerLine";
import { motion } from "framer-motion";

export default function TheCrawl() {
  return (
    <Layout>
      <Breadcrumb segments={[
        { label: "Home", path: "/" },
        { label: "Encounters", path: "/encounters/the-crawl" },
        { label: "The Crawl" }
      ]} />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853]">ENCOUNTER 2 · REDESIGNED</p>
        <h1 className="text-h1 text-[#e8e4dc] mt-2">The Crawl</h1>
        <p className="text-body text-[#9a958c] mt-4">
          A trap, not an ambush — but one the party can disarm before it triggers if they read the space carefully. 
          A puzzle with teeth. Five ways through. The chokers wait as a fallback.
        </p>
      </motion.section>

      <SceneImage
        src="/09_choker_ambush.png"
        alt="Choker in narrow passage"
        caption="The Crawl — squeeze tunnels in the deep stone"
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
            The passage shrinks.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            What was a corridor becomes a tunnel. What was a tunnel becomes a throat. You walk single file now, shoulders brushing both walls, heads ducked. The light from the lamps is small and blue-green and does not carry far.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            Kixil stops. She sets down her pack — the first time she has set down anything on this journey. She presses her palm flat against the left wall. Then the right. Then she leans forward, and her body goes very still.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Kixil: <span className="italic">"There is a sound ahead. Not water. Not stone. Something waiting for the stone to move."</span>
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            She looks back at you. Her face in the lamplight is the same flat mask you have seen for three days, but the set of her shoulders has changed — the tension before a door you were not told to expect.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Kixil: <span className="italic">"This part of the road has been closed before. When something moved in, we sealed it. We sealed it and we walked around it and we did not speak of it. The sealing has broken. The something is still here."</span>
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            She points upward. The ceiling here is not stone. It is packed earth — hard and dry and cracked, with roots dangling from the cracks like fingers from a closed fist. Some of the roots twitch. Not from air. From something inside the earth.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Kixil: <span className="italic">"We cannot go back. The way behind is longer than the food. The way forward is through. But how we go through — that is your choice, not mine."</span>
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
        <h2 className="text-h2 text-[#e8e4dc] mb-4">Layered Clues — What Can Be Observed</h2>
        <p className="text-body text-[#9a958c] mb-4">
          Distribute these observations naturally as the party explores. Let them ask questions. Let them look. The clues are there for anyone paying attention.
        </p>

        <div className="space-y-4">
          <div className="bg-[#12121e] border border-[#d4a853]/20 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-label text-[#d4a853]">FREE</span>
              <span className="text-h4 text-[#e8e4dc]">Dust Patches</span>
            </div>
            <p className="text-body text-[#9a958c]">
              The floor is not uniformly dirty. Long stretches are clean — scoured by something brushing against them repeatedly, at shoulder height. Other stretches are dust-covered, undisturbed for years. The clean patches form a pattern: they are on the walls, the ceiling, and the inner corners of every bend.
            </p>
            <p className="text-body text-[#d4a853] mt-2">
              This means: something with long arms moves through this passage, reaches out to the walls and ceiling as it passes, and has done so many times. (Chokers use walls and ceiling to travel silently, their tentacle-arms leaving those marks.)
            </p>
          </div>

          <div className="bg-[#12121e] border border-[#d4a853]/20 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-label text-[#5f9ea0]">EARNED</span>
              <span className="text-h4 text-[#e8e4dc]">Ceiling Seams</span>
            </div>
            <p className="text-body text-[#9a958c]">
              If anyone thinks to look at the ceiling carefully (Investigation DC 12, or anyone with Stonecunning or a background in construction/masonry can see it automatically): the packed-earth ceiling is not natural. It was placed there deliberately — a plug of soil and root-matter filling a natural gap above the passage. The kobolds sealed it, and the seal has been breached from above.
            </p>
            <p className="text-body text-[#5f9ea0] mt-2">
              This means: something broke in from above, not from below or from the sides. It came from a higher passage. There is a way up, and there is a way around.
            </p>
          </div>

          <div className="bg-[#12121e] border border-[#d4a853]/20 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-label text-[#5f9ea0]">EARNED</span>
              <span className="text-h4 text-[#e8e4dc]">The Bones in the Wall</span>
            </div>
            <p className="text-body text-[#9a958c]">
              If anyone looks at the walls themselves — not just walking past, but actually looking — there are shapes in the stone. Humanoid shapes. Not carvings. Bodies, compressed into the walls by enormous force, their bones flattened and fused with the rock. There are at least three, visible from different angles as the light moves.
            </p>
            <p className="text-body text-[#5f9ea0] mt-2">
              This means: whatever is here has killed before, and it does not eat its prey in the normal sense. It crushes them into the stone. (These are the remains of previous travelers — miners, adventurers, kobold scouts — who did not read the passage correctly.)
            </p>
          </div>

          <div className="bg-[#12121e] border border-[#d4a853]/20 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-label text-[#8b0000]">DEEPER</span>
              <span className="text-h4 text-[#e8e4dc]">The Smell and the Sound</span>
            </div>
            <p className="text-body text-[#9a958c]">
              If someone specifically smells the air (Perception or Survival DC 14, or Gnoggin's goblin nose automatically): there is a faint but distinct smell of ammonia, like a cat's den, stronger near the clean patches of wall. And if someone specifically listens at the walls (Perception DC 14): there is a soft rhythmic clicking, like slow breathing, coming from inside the rock.
            </p>
            <p className="text-body text-[#8b0000] mt-2">
              This means: there is more than one. There are at least three, and they are not just in the passage — they are inside the walls themselves. They can move through stone.
            </p>
          </div>

          <div className="bg-[#12121e] border border-[#d4a853]/20 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-label text-[#8b0000]">DEEPER</span>
              <span className="text-h4 text-[#e8e4dc]">Kixil's Unspoken Knowledge</span>
            </div>
            <p className="text-body text-[#9a958c]">
              If the party specifically asks Kixil what she knows, she tells them only: <em>"We sealed this passage seven seasons ago. Three of our people were lost in the closing. Whatever lives here has always lived here. It was here before the kobold road, before the Dhakaani, before any of the peoples you call old."</em>
            </p>
            <p className="text-body text-[#8b0000] mt-2">
              If pressed for more, she shakes her head. <em>"I do not have words for what it is. I have only the knowledge of what it does. It reaches. It pulls. It does not let go."</em>
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
        <h2 className="text-h2 text-[#e8e4dc] mb-4">Five Ways Through</h2>
        <p className="text-body text-[#9a958c] mb-6">
          Let the party discuss and choose. Do not hint. Do not correct. The clues are already deployed. If they have been paying attention, they have what they need. If they have not, the chokers will be their teacher.
        </p>

        <div className="space-y-4">
          <div className="bg-[#12121e] border border-[#5f9ea0]/30 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-label text-[#5f9ea0]">OPTION 1</span>
              <span className="text-h4 text-[#e8e4dc]">Burn the Roots</span>
            </div>
            <p className="text-body text-[#9a958c]">
              <strong className="text-[#d4a853]">What they do:</strong> Set fire to the dangling roots, hoping to drive whatever is above them out or destroy it.
            </p>
            <p className="text-body text-[#9a958c] mt-2">
              <strong className="text-[#d4a853]">What happens:</strong> The roots burn surprisingly well — too well. The packed earth above begins to smolder. Within minutes, the party is breathing smoke in a confined space. The smoke forces the chokers to flee upward through their own exits. The party takes 1d6 fire damage and 1 level of exhaustion from smoke inhalation, but the passage is cleared. <strong className="text-[#d4a853]">No combat.</strong>
            </p>
            <p className="text-body text-[#9a958c] mt-2">
              <strong className="text-[#d4a853]">Kixil's reaction:</strong> She does not speak until the smoke clears. Then: <em>"That was not wise. But it was effective. Do not do it again."</em>
            </p>
          </div>

          <div className="bg-[#12121e] border border-[#5f9ea0]/30 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-label text-[#5f9ea0]">OPTION 2</span>
              <span className="text-h4 text-[#e8e4dc]">Shatter the Ceiling</span>
            </div>
            <p className="text-body text-[#9a958c]">
              <strong className="text-[#d4a853]">What they do:</strong> Use blunt force — a hammer, a spell, a shoulder — to break through the packed-earth ceiling and access whatever is above.
            </p>
            <p className="text-body text-[#9a958c] mt-2">
              <strong className="text-[#d4a853]">What happens:</strong> The ceiling shatters easily — too easily. It was already structurally compromised. The collapse fills the passage with loose earth and rock. Anyone directly beneath takes 2d6 bludgeoning damage and is buried (Strength DC 14 to dig free, or someone else can pull them out with an action and a DC 12 Strength check). The collapse also opens a way into the higher passage — a narrow crawl-space between layers of stone, barely wide enough for a Medium creature. It bypasses the chokers entirely. <strong className="text-[#d4a853]">No combat.</strong>
            </p>
            <p className="text-body text-[#9a958c] mt-2">
              <strong className="text-[#d4a853]">Kixil's reaction:</strong> She watches the collapse without expression. Afterward: <em>"This is why we sealed it. The mountain does not forgive the impatient."</em>
            </p>
          </div>

          <div className="bg-[#12121e] border border-[#5f9ea0]/30 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-label text-[#5f9ea0]">OPTION 3</span>
              <span className="text-h4 text-[#e8e4dc]">The Quiet Way</span>
            </div>
            <p className="text-body text-[#9a958c]">
              <strong className="text-[#d4a853]">What they do:</strong> Move through the passage with extreme care — no light, no sound, no touching of walls. Stealth checks all around, with disadvantage if anyone is wearing metal armor or carrying an unsheathed weapon.
            </p>
            <p className="text-body text-[#9a958c] mt-2">
              <strong className="text-[#d4a853]">What happens:</strong> If the party has been paying attention to the clean patches, they can avoid them — the clean patches mark where the chokers' tentacles reach. Moving through the untouched dust-patches avoids the chokers' sensory range. DC 16 group Stealth (at least half must succeed). On success: they pass through without encountering anything. On failure: one choker drops from the ceiling onto the last person in line.
            </p>
            <p className="text-body text-[#9a958c] mt-2">
              <strong className="text-[#d4a853]">Kixil's reaction:</strong> She approves, visibly, for the first time on the journey. <em>"You learn. That is why you are still alive."</em>
            </p>
          </div>

          <div className="bg-[#12121e] border border-[#5f9ea0]/30 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-label text-[#5f9ea0]">OPTION 4</span>
              <span className="text-h4 text-[#e8e4dc]">Seal It Behind Them</span>
            </div>
            <p className="text-body text-[#9a958c]">
              <strong className="text-[#d4a853]">What they do:</strong> Use stone-masonry, Mold Earth, Wall of Stone, or just piled debris to seal the passage behind them as they advance, trapping the chokers in the sealed section.
            </p>
            <p className="text-body text-[#9a958c] mt-2">
              <strong className="text-[#d4a853]">What happens:</strong> The chokers are not fast diggers in solid stone. A proper seal holds them indefinitely. The party must move quickly to get past the chokers' territory before the seal is complete. If they have read the passage correctly, they know the clean patches end at a certain point — that's the edge of choker territory. Seal before that point, and the creatures are trapped behind. <strong className="text-[#d4a853]">No combat.</strong>
            </p>
            <p className="text-body text-[#9a958c] mt-2">
              <strong className="text-[#d4a853]">Kixil's reaction:</strong> She watches the sealing with something like respect. <em>"You do what we could not do with our own hands. That is why you were sent."</em>
            </p>
          </div>

          <div className="bg-[#12121e] border border-[#8b0000]/30 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-label text-[#8b0000]">OPTION 5</span>
              <span className="text-h4 text-[#e8e4dc]">March Through Loudly</span>
            </div>
            <p className="text-body text-[#9a958c]">
              <strong className="text-[#d4a853]">What they do:</strong> Take no precautions. Walk through normally, talking, weapons out, lights bright.
            </p>
            <p className="text-body text-[#9a958c] mt-2">
              <strong className="text-[#d4a853]">What happens:</strong> <strong className="text-[#8b0000]">Combat.</strong> Three chokers attack — one from the ceiling onto the rearmost party member, one from the left wall onto the middle, one from the right wall onto the lead. Standard choker stats (MM p. 40), but the squeeze gives all attacks advantage if the target cannot move 5 feet, and the chokers have half cover from the walls.
            </p>
            <p className="text-body text-[#9a958c] mt-2">
              <strong className="text-[#d4a853]">Kixil's reaction:</strong> She fights if attacked but otherwise does nothing to help. Afterward: <em>"You had eyes. You chose not to use them."</em>
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
        <h2 className="text-h2 text-[#e8e4dc] mb-4">The Chokers — Fallback Only</h2>
        <p className="text-body text-[#9a958c] mb-4">
          If combat does happen, the chokers are not a boss fight. They are a trap sprung. They hit, they grab, they try to pull victims into the walls. If the party fights back effectively, the chokers retreat into the rock after 2-3 rounds — they are territorial, not suicidal. They will not pursue beyond the passage.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Choker Tactics:</strong> One attacks the rearmost (grapple and drag), one attacks the middle (grapple to immobilize), one attacks the lead (surprise strike to drop the torch/light source).</p>
          </DMNoteBox>
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Environmental Hazard:</strong> The squeeze gives all non-choker creatures disadvantage on Dexterity saving throws and -2 to AC if they cannot move freely. The chokers have advantage on grapple checks.</p>
          </DMNoteBox>
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Retreat Signal:</strong> If two chokers are reduced below half HP, the third emits a high clicking sound and all three melt into the walls, leaving the passage clear. They do not return.</p>
          </DMNoteBox>
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Loot:</strong> In the chokers' nesting area (a hollow above the passage, accessible only if the ceiling is breached): 12 gp in mixed coins, a rusted shortsword, and a water-stained journal in Goblin — a miner's diary, last entry dated 4 years ago.</p>
          </DMNoteBox>
        </div>

        <DMNoteBox>
          <p className="text-body text-[#e8e4dc]">
            <strong className="text-[#d4a853]">Kixil's long-term memory:</strong> Kixil does not forget how the party handled The Crawl. If they burned it, she tells the other kobolds — they will be wary of fire near the party forever. If they sealed it, she marks them as clever. If they walked through quietly, she marks them as careful. If they fought, she marks them as loud. <strong className="text-[#d4a853]">These tags carry forward.</strong>
          </p>
        </DMNoteBox>
      </motion.section>
    </Layout>
  );
}
