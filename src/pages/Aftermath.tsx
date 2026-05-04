import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import ReadAloudBox from "@/components/ReadAloudBox";
import DMNoteBox from "@/components/DMNoteBox";
import { DividerLine } from "@/components/DividerLine";
import { motion } from "framer-motion";

export default function Aftermath() {
  return (
    <Layout>
      <Breadcrumb segments={[
        { label: "Home", path: "/" },
        { label: "Scenes", path: "/scenes/aftermath" },
        { label: "Aftermath" }
      ]} />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853]">SCENE 12 · REDESIGNED</p>
        <h1 className="text-h1 text-[#e8e4dc] mt-2">Aftermath</h1>
        <p className="text-body text-[#9a958c] mt-4">
          The camp is changed. The clocks have stopped. What remains depends on which levers the party pulled, 
          which clocks they saved, and which they let run down.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853] mb-4">SCENE 12 · THE 4 OUTCOME BANDS</p>
        <p className="text-body text-[#9a958c] mb-6">
          Read the camp after the party's actions. Do not narrate what they did — narrate what the camp <em>is</em> now. The players know their choices. Let them see the results.
        </p>

        <div className="space-y-6">
          <div className="bg-[#12121e] border-2 border-[#5f9ea0] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-4 h-4 rounded-full bg-[#5f9ea0]" />
              <span className="text-h3 text-[#5f9ea0]">Band 1: The Perfect Outcome</span>
            </div>
            <p className="text-label text-[#9a958c] mb-3">ALL THREE CLOCKS STOPPED. HALVERN LIVES. STONE SILENCED. WORKERS FREE.</p>
            <ReadAloudBox>
              <p className="text-body-lg italic text-[#e8e4dc]">
                The camp is quiet. The workers are gone — through the passage the party came from, guided by Tessa, carrying what they could. The focus-stone is dark, its tripod cracked, its hum silenced. The cage is open, its door hanging on one hinge. Halvern sits on a crate near the equipment pile, wrapping his injured wrist in a strip of cloth torn from his own shirt. He looks up when you approach.
              </p>
              <p className="text-body-lg font-medium text-[#d4a853] mt-4">
                Halvern: <span className="italic">"I have been in worse places. I have been in better places. This one will do."</span>
              </p>
            </ReadAloudBox>
            <div className="mt-4 space-y-2">
              <p className="text-body text-[#9a958c]"><strong className="text-[#d4a853]">Halvern:</strong> Lives. Will share Velder's method and network pattern. Becomes a recurring contact — a source inside House Tharashk who owes the party his life.</p>
              <p className="text-body text-[#9a958c]"><strong className="text-[#d4a853]">Tessa & Workers:</strong> Escape through the kobold road. Tessa sends word later (via Marrik) that they reached the surface safely. Some may become allies in future Seawall operations.</p>
              <p className="text-body text-[#9a958c]"><strong className="text-[#d4a853]">Focus Stone:</strong> Silenced. House Tharashk never receives the ping. The illegal operation remains unknown to the house leadership. Velder's patron network is not alerted.</p>
              <p className="text-body text-[#9a958c]"><strong className="text-[#d4a853]">Kixil:</strong> Witnessed the party succeed without mass killing. Her trust deepens. She shares additional kobold road knowledge that will make Leg 3 (Camp → Paluur Draal) easier — she knows a shortcut that saves a day.</p>
              <p className="text-body text-[#9a958c]"><strong className="text-[#d4a853]">Brogan Kesh:</strong> If captured alive, he surrenders the pocket watch (the courier's signal device) and the writ. He can be interrogated for Velder's contact methods. If killed, his body carries the watch and a coded letter from "V."</p>
            </div>
          </div>

          <div className="bg-[#12121e] border border-[#d4a853]/40 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-4 h-4 rounded-full bg-[#d4a853]" />
              <span className="text-h3 text-[#d4a853]">Band 2: The Good Outcome</span>
            </div>
            <p className="text-label text-[#9a958c] mb-3">TWO OF THREE CLOCKS STOPPED. HALVERN LIVES OR WORKERS ESCAPE. STONE MAY HAVE PINGED.</p>
            <ReadAloudBox>
              <p className="text-body-lg italic text-[#e8e4dc]">
                The camp is half-empty. Some workers left with Tessa. Some stayed, afraid of the dark passage, afraid of the kobolds, afraid of everything. The focus-stone is still in its tripod — it hummed, once, you heard it, but whether the ping reached its destination you cannot know. The cage is open. Halvern is gone, or he is dead, or he was never freed — you know what you did, and you know what you didn't do.
              </p>
            </ReadAloudBox>
            <div className="mt-4 space-y-2">
              <p className="text-body text-[#9a958c]"><strong className="text-[#d4a853]">Halvern:</strong> If alive, shares what he knows but is less forthcoming — he knows the party prioritized something else over him. If dead, his body carries a coded notebook with partial Velder intelligence.</p>
              <p className="text-body text-[#9a958c]"><strong className="text-[#d4a853]">Tessa & Workers:</strong> Partial escape. Some reach the surface. Some are caught by remaining guards or refuse to leave. The workers who stayed will be questioned by Tharashk enforcers when they arrive — they know the party's description.</p>
              <p className="text-body text-[#9a958c]"><strong className="text-[#d4a853]">Focus Stone:</strong> May have pinged. Roll a d20: on 11+, the ping went through before the stone was stopped. House Tharashk now knows a breach occurred. Velder's network is alerted. Future encounters with Tharashk-affiliated NPCs will be more hostile.</p>
              <p className="text-body text-[#9a958c]"><strong className="text-[#d4a853]">Kixil:</strong> Watches without comment. She completes her contract. Her trust is maintained but not deepened. She guides the party to Paluur Draal by the standard route.</p>
            </div>
          </div>

          <div className="bg-[#12121e] border border-[#8b0000]/40 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-4 h-4 rounded-full bg-[#8b0000]" />
              <span className="text-h3 text-[#e8e4dc]">Band 3: The Messy Outcome</span>
            </div>
            <p className="text-label text-[#8b0000] mb-3">ONE CLOCK STOPPED. HALVERN DIES OR STONE PINGS. WORKERS SCATTERED. COMBAT OCCURRED.</p>
            <ReadAloudBox>
              <p className="text-body-lg italic text-[#e8e4dc]">
                The camp smells of smoke and spilled oil. Bodies on the ground — not many, but enough. The workers are hiding in the equipment piles, or they have run into the deeper passages, or they are standing still with their hands up, not knowing who to be afraid of anymore. The focus-stone is a cracked husk, or it is humming loudly, or you never reached it. The cage is a cage — empty, or occupied by a body, or broken open by someone who came too late.
              </p>
            </ReadAloudBox>
            <div className="mt-4 space-y-2">
              <p className="text-body text-[#9a958c]"><strong className="text-[#d4a853]">Halvern:</strong> Dead. His intelligence dies with him, except what can be recovered from his belongings (notebook, coded papers on his body). The party gains partial Velder intelligence.</p>
              <p className="text-body text-[#9a958c]"><strong className="text-[#d4a853]">Tessa & Workers:</strong> Scattered. Some dead in crossfire. Some fled into unmapped passages. Some captured by remaining guards. The survivors, if any, will not trust the party. Tessa, if she survived, will blame them for the deaths.</p>
              <p className="text-body text-[#9a958c]"><strong className="text-[#d4a853]">Focus Stone:</strong> Pinged. House Tharashk knows. The party's description will be circulated. Bounty hunters may be hired. Future Tharashk encounters begin with suspicion or hostility.</p>
              <p className="text-body text-[#9a958c]"><strong className="text-[#d4a853]">Kixil:</strong> Her trust is damaged. She saw killing that could have been avoided. She completes her contract but does not offer help beyond the minimum. She will not share shortcuts or extra knowledge. Her reports to Vrathek will note: <em>"They are effective. They are not careful."</em></p>
              <p className="text-body text-[#9a958c]"><strong className="text-[#d4a853]">Brogan Kesh:</strong> If alive, he escapes during the chaos. He knows the party's faces and will report them to Velder. If dead, his body carries the watch and writ.</p>
            </div>
          </div>

          <div className="bg-[#3a1515]/40 border-2 border-[#8b0000] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-4 h-4 rounded-full bg-[#8b0000]" />
              <span className="text-h3 text-[#8b0000]">Band 4: The Disaster</span>
            </div>
            <p className="text-label text-[#8b0000] mb-3">NO CLOCKS STOPPED. HALVERN DEAD. STONE PINGED. WORKERS DEAD OR ENSLAVED. PARTY FLED OR MASSACRED.</p>
            <ReadAloudBox>
              <p className="text-body-lg italic text-[#e8e4dc]">
                The camp is a killing ground. The focus-stone hums steadily, its pulse now regular, its signal sent. The workers who could not run are dead or dying. The cage is open. The body inside it is not moving. Halvern is gone, and whatever he knew is gone with him. You are standing in the middle of a massacre, and the mountain is very quiet, and somewhere above you, something is beginning to move in response to the stone's call.
              </p>
            </ReadAloudBox>
            <div className="mt-4 space-y-2">
              <p className="text-body text-[#9a958c]"><strong className="text-[#d4a853]">Halvern:</strong> Dead. No intelligence recovered.</p>
              <p className="text-body text-[#9a958c]"><strong className="text-[#d4a853]">Tessa & Workers:</strong> Massacred or enslaved. The remaining guards, under Brogan's orders, chain the surviving workers and prepare to move them deeper into Tharashk territory as slave labor.</p>
              <p className="text-body text-[#9a958c]"><strong className="text-[#d4a853]">Focus Stone:</strong> Active. House Tharashk enforcers are dispatched. They will arrive in 3-5 days. The party must be gone before then or face a Tharashk extraction team (CR 5-6 encounter).</p>
              <p className="text-body text-[#9a958c]"><strong className="text-[#d4a853]">Kixil:</strong> She is gone. She watched the massacre from the overlook and left without speaking. She will not guide the party further. The kobold road is closed to them. They must find their own way to Paluur Draal — if they still intend to go — or find their own way out of the mountain entirely.</p>
              <p className="text-body text-[#9a958c]"><strong className="text-[#d4a853]">Long-term:</strong> Vrathek, if they ever meet again, will know what happened here. His assessment: <em>"You were given a knife and you used it like a hammer. I will not give you another."</em> Future kobold contacts in the region will refuse to work with the party.</p>
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
        <h2 className="text-h2 text-[#e8e4dc] mb-4">Loot, Writ, and Burning</h2>
        <p className="text-body text-[#9a958c] mb-4">
          After the outcome band is resolved, the party has time to search the camp. This happens regardless of which band they achieved — even in Band 4, they can loot before fleeing.
        </p>

        <h3 className="text-h3 text-[#d4a853] mt-6 mb-4">Camp Loot Table</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-[#d4a853]/40">
                <th className="py-3 px-4 text-label text-[#d4a853]">ITEM</th>
                <th className="py-3 px-4 text-label text-[#d4a853]">LOCATION</th>
                <th className="py-3 px-4 text-label text-[#d4a853]">VALUE / USE</th>
              </tr>
            </thead>
            <tbody className="text-body text-[#9a958c]">
              <tr className="border-b border-[#d4a853]/10"><td className="py-3 px-4">Pocket Watch (Courier Signal)</td><td className="py-3 px-4">Brogan's person</td><td className="py-3 px-4">Magical signal device. If opened, emits a pulse detectable by Tharashk network receivers. Could be used to lure or misdirect Tharashk agents.</td></tr>
              <tr className="border-b border-[#d4a853]/10"><td className="py-3 px-4">Forged Writ of Operation</td><td className="py-3 px-4">Brogan's tent, locked case</td><td className="py-3 px-4">Legal evidence of illegal Tharashk operation. Worth 200 gp to the right buyer (Trust of the Lost, Zilargo authorities, competing houses). Or can be used to blackmail Tharashk.</td></tr>
              <tr className="border-b border-[#d4a853]/10"><td className="py-3 px-4">Velder's Coded Letter</td><td className="py-3 px-4">Merrik's locked case</td><td className="py-3 px-4">Instructions for focus-stone calibration, signed "V." Can be decoded with Arcana DC 16 or given to a cipher-expert. Reveals Velder's method for locating dragonshard veins — a technique not known to standard Tharashk prospectors.</td></tr>
              <tr className="border-b border-[#d4a853]/10"><td className="py-3 px-4">Tharashk Badge (×3)</td><td className="py-3 px-4">Dead/captured guards</td><td className="py-3 px-4">Grant advantage on Persuasion/Intimidation with Tharashk-affiliated NPCs. Can be sold for 15 gp each. Wearing them openly may attract Tharashk attention.</td></tr>
              <tr className="border-b border-[#d4a853]/10"><td className="py-3 px-4">Prospecting Equipment</td><td className="py-3 px-4">Equipment pile</td><td className="py-3 px-4">Pickaxes, surveying poles, sample bags, rope. Worth 50 gp total if sold. Practical value: can be used for climbing, excavation, or improvised weapons.</td></tr>
              <tr className="border-b border-[#d4a853]/10"><td className="py-3 px-4">Healing Potions (×2)</td><td className="py-3 px-4">Brogan's tent</td><td className="py-3 px-4">Standard healing potions. 2d4+2 each.</td></tr>
              <tr className="border-b border-[#d4a853]/10"><td className="py-3 px-4">Coin Purse</td><td className="py-3 px-4">Brogan's belt</td><td className="py-3 px-4">45 gp in mixed coins (galifars, crowns, brelish sovereigns).</td></tr>
              <tr className="border-b border-[#d4a853]/10"><td className="py-3 px-4">Miner's Journal</td><td className="py-3 px-4">Tessa's belongings</td><td className="py-3 px-4">Written in Gnomish. Accounts of strange sounds from below the camp — "the voice" — and workers who left after hearing it. Includes a rough map of the camp's lower excavation levels.</td></tr>
              <tr><td className="py-3 px-4">Halvern's Notebook</td><td className="py-3 px-4">Halvern's body/possessions</td><td className="py-3 px-4">If Halvern lives, he gives this freely. If dead, it's on his body. Contains partial Velder intelligence: payment methods (House Sivis credit drafts), known contacts (three names, two with question marks), and a list of locations where Velder operations have been suspected.</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-h3 text-[#d4a853] mt-8 mb-4">Burning the Maps</h3>
        <p className="text-body text-[#9a958c] mb-4">
          Vrathek asked for the maps burned. The camp has two sets:
        </p>
        <ul className="list-disc list-inside space-y-2 text-body text-[#9a958c] mb-4">
          <li><strong className="text-[#d4a853]">Surface maps</strong> — standard Seawall Mountain topographical charts, available commercially. Not sensitive, but burning them satisfies the contract literally.</li>
          <li><strong className="text-[#d4a853]">Deep maps</strong> — kobold road maps, annotated by the camp's own scouts. These show passages the kobolds do not want mapped. They are the real prize. Burning them is a genuine service to the Haka'jhar.</li>
        </ul>
        <DMNoteBox>
          <p className="text-body text-[#e8e4dc]">
            If the party keeps the deep maps instead of burning them: Kixil will know. She can smell the paper on them. She will not confront them directly, but her report to Vrathek will include: <em>"They took what they should have destroyed."</em> Future kobold trust is reduced by one tier. The maps are valuable to dragonshard prospectors — worth 150 gp to the right buyer, but selling them makes enemies of the kobolds permanently.
          </p>
        </DMNoteBox>
      </motion.section>

      <DividerLine />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity:1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-h2 text-[#e8e4dc] mb-4">Kixil's Reaction</h2>
        <p className="text-body text-[#9a958c] mb-4">
          After the camp is resolved, Kixil emerges from the overlook. She does not ask what happened. She sees it. Her reaction depends on the outcome band and the party's method.
        </p>

        <div className="space-y-3">
          <ReadAloudBox>
            <p className="text-label text-[#5f9ea0] mb-1">BAND 1 (PERFECT)</p>
            <p className="text-body text-[#e8e4dc]"><em>"You are quieter than I thought you would be. That is good. The mountain prefers quiet."</em> She pauses. <em>"I know a way that saves a day. I will show you."</em></p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-label text-[#d4a853] mb-1">BAND 2 (GOOD)</p>
            <p className="text-body text-[#e8e4dc]"><em>"It is done. The road continues. We will walk it."</em> No extra help, no extra hostility. Professional completion.</p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-label text-[#8b0000] mb-1">BAND 3 (MESSY)</p>
            <p className="text-body text-[#e8e4dc]"><em>"You had choices. You chose quickly. I do not know if that is courage or fear."</em> She walks ahead, not looking back. <em>"I will guide you to Paluur Draal. I will not guide you again after."</em></p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-label text-[#8b0000] mb-1">BAND 4 (DISASTER)</p>
            <p className="text-body text-[#e8e4dc]">She is not there. She left during the chaos. The party finds a single kobold claw-mark scratched into the stone at the overlook — a warning, not a farewell. They are on their own for Leg 3.</p>
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
        <h2 className="text-h2 text-[#e8e4dc] mb-4">Transition to Leg 3</h2>
        <ReadAloudBox>
          <p className="text-body-lg italic text-[#e8e4dc]">
            The camp is behind you. The passage south is narrower than the one you came from — a maintenance road, Kixil calls it, used when the kobolds still traded with the surface. It has not been maintained in a long time.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            Four days to Paluur Draal, if the road is clear. Kixil says it has not been clear in her lifetime. She says this without concern, as if the uncertainty were part of the route.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Kixil: <span className="italic">"The last two days are the oldest part of the road. Before the kobolds. Before the Dhakaani, even, though the Dhakaani used it. You will see their marks. You will know you are close when the stone changes color."</span>
          </p>
        </ReadAloudBox>

        <DMNoteBox>
          <p className="text-body text-[#e8e4dc]">
            The journey to Paluur Draal begins now. Use the travel system for Leg 3 (Camp → Paluur Draal). Kixil's presence or absence changes the difficulty: if she is guiding, she can warn about hazards and knows safe campsites. If she has left, the party must navigate using Marrik's maps (if they kept them) or their own wits.
          </p>
        </DMNoteBox>
      </motion.section>
    </Layout>
  );
}
