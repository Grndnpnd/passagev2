import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import DMNoteBox from "@/components/DMNoteBox";
import StatBlockBox from "@/components/StatBlockBox";
import { DividerLine } from "@/components/DividerLine";
import { motion } from "framer-motion";

export default function TheCamp() {
  return (
    <Layout>
      <Breadcrumb segments={[
        { label: "Home", path: "/" },
        { label: "Scenes", path: "/scenes/the-camp" },
        { label: "The Camp" }
      ]} />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853]">SCENE 11 · REDESIGNED</p>
        <h1 className="text-h1 text-[#e8e4dc] mt-2">The Levers</h1>
        <p className="text-body text-[#9a958c] mt-4">
          Six ways to move the camp. Each lever has a cost, an effect on the clocks, and a consequence that persists. 
          The party can pull more than one. The camp will respond to the sum of their choices.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853] mb-4">SCENE 11 · THE LEVERS</p>
        <p className="text-body text-[#9a958c] mb-6">
          The party has spent time at the overlook. They have heard from Tessa, from Halvern, from Marrik. They have watched the clocks move. Now they choose. Each lever below is a complete approach — but the party can combine levers, pulling one while another character works a different angle.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-[#d4a853]/40">
                <th className="py-3 px-4 text-label text-[#d4a853]">LEVER</th>
                <th className="py-3 px-4 text-label text-[#d4a853]">WHAT THEY DO</th>
                <th className="py-3 px-4 text-label text-[#d4a853]">CLOCK EFFECT</th>
                <th className="py-3 px-4 text-label text-[#d4a853]">COST / RISK</th>
              </tr>
            </thead>
            <tbody className="text-body text-[#9a958c]">
              <tr className="border-b border-[#d4a853]/10">
                <td className="py-4 px-4 font-medium text-[#e8e4dc]">Wait for Shift Change</td>
                <td className="py-4 px-4">Let Clock 3 (Shift Change) run to Segment 5-6. Enter during the handover confusion.</td>
                <td className="py-4 px-4">Focus Stone +2 segments. Halvern +1 segment.</td>
                <td className="py-4 px-4">Low immediate risk, but the other two clocks advance. Less time to deal with the stone or Halvern afterward.</td>
              </tr>
              <tr className="border-b border-[#d4a853]/10">
                <td className="py-4 px-4 font-medium text-[#e8e4dc]">Sabotage the Focus Stone</td>
                <td className="py-4 px-4">Destroy, disable, or misalign the locator crystal. Prevents the House Tharashk ping.</td>
                <td className="py-4 px-4">Focus Stone stopped entirely.</td>
                <td className="py-4 px-4">Requires Stealth or Athletics to reach the tripod. If spotted, guards converge. High immediate risk, but removes the strategic threat.</td>
              </tr>
              <tr className="border-b border-[#d4a853]/10">
                <td className="py-4 px-4 font-medium text-[#e8e4dc]">Free Halvern</td>
                <td className="py-4 px-4">Open the cage, extract Halvern, get him clear.</td>
                <td className="py-4 px-4">Halvern's Execution stopped entirely.</td>
                <td className="py-4 px-4">The cage guard will fight or raise alarm. Requires speed and silence, or a distraction. Halvern is injured and moves slowly.</td>
              </tr>
              <tr className="border-b border-[#d4a853]/10">
                <td className="py-4 px-4 font-medium text-[#e8e4dc]">Steal the Writ</td>
                <td className="py-4 px-4">Take the foreman's forged writ — the document proving the operation is illegal.</td>
                <td className="py-4 px-4">No direct clock effect, but removes the foreman's legitimacy.</td>
                <td className="py-4 px-4">The writ is on the foreman's person or in his tent. Stealing it requires Theft Sleight of Hand or a distraction. Without the writ, the foreman cannot prove his authority to new Tharashk arrivals.</td>
              </tr>
              <tr className="border-b border-[#d4a853]/10">
                <td className="py-4 px-4 font-medium text-[#e8e4dc]">Help the Workers Escape</td>
                <td className="py-4 px-4">Assist Tessa and the workers in leaving the camp before Tharashk enforcers arrive.</td>
                <td className="py-4 px-4">Shift Change advances +1 (workers moving triggers guard attention).</td>
                <td className="py-4 px-4">The workers are not fighters. They need a clear path and a destination. The kobold road is the obvious route, but Kixil must agree. If the workers escape, the foreman has no labor force — the camp collapses operationally.</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium text-[#e8e4dc]">Charge In</td>
                <td className="py-4 px-4">Frontal assault. No subtlety. Violence as the first resort.</td>
                <td className="py-4 px-4">All clocks stop immediately — combat overrides everything.</td>
                <td className="py-4 px-4">Highest immediate risk. The party is outnumbered (12-15 camp personnel, 3 of them armed guards). Combat will be loud and may draw reinforcements from nearby passages. Some workers may be caught in crossfire. Halvern may die in the chaos.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <DMNoteBox>
          <p className="text-body text-[#e8e4dc]">
            <strong className="text-[#d4a853]">Multiple levers:</strong> The party can absolutely pull more than one. A classic combo: Wait for Shift Change + Sabotage Stone + Free Halvern. Or: Help Workers Escape (creating the distraction) + Steal Writ + Sabotage Stone. Let them plan. Let them execute. The camp responds dynamically.
          </p>
        </DMNoteBox>

        <DMNoteBox>
          <p className="text-body text-[#e8e4dc]">
            <strong className="text-[#d4a853]">Tessa as an ally:</strong> If the party has won Tessa's trust, she can be a lever herself. She knows the guard rotations, the equipment locations, and which workers will fight vs. flee. She can create a worker uprising as a distraction. She can guide the workers out through the passage the party came from. She will not fight — she is not a soldier — but she is a better asset than any of the guards.
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
        <h2 className="text-h2 text-[#e8e4dc] mb-4">Clock Interactions During Action</h2>
        <p className="text-body text-[#9a958c] mb-4">
          Once the party commits to a lever, the clocks don't stop — they interact with the action in real time. Track this visibly.
        </p>

        <div className="space-y-4">
          <div className="bg-[#12121e] rounded-lg p-5 border border-[#5f9ea0]/20">
            <p className="text-label text-[#5f9ea0] mb-2">IF FOCUS STONE REACHES SEGMENT 7-9</p>
            <p className="text-body text-[#9a958c]">
              The ping goes out. The stone flares. Everyone in the camp sees it — guards, workers, foreman. The foreman's demeanor changes: he now knows his superiors will arrive eventually, which means he must clean up evidence before they do. He orders the guards to kill Halvern <em>now</em>, not later. He orders the workers to keep working, under threat. The camp shifts from nervous to desperate.
            </p>
            <p className="text-body text-[#d4a853] mt-2">
              <strong>Game effect:</strong> Halvern's Execution clock jumps to Segment 6 immediately. All guard hostility increases. Workers become more compliant but more afraid. The foreman begins burning documents in his tent.
            </p>
          </div>

          <div className="bg-[#12121e] rounded-lg p-5 border border-[#8b0000]/20">
            <p className="text-label text-[#8b0000] mb-2">IF HALVERN'S EXECUTION REACHES SEGMENT 7-9</p>
            <p className="text-body text-[#9a958c]">
              The guard opens the cage. Halvern stands. He does not resist. He looks at the party — if they are visible — and nods once, a small movement, as if to say <em>"I knew this was possible. Do not blame yourself."</em>
            </p>
            <p className="text-body text-[#9a958c] mt-2">
              If the party intervenes now, it is combat, and it is desperate. The guard has his weapon out. Halvern is in the line of fire. Any ranged attack has a 50% chance of hitting Halvern instead of the guard unless the attacker has clear line of sight and called their shot.
            </p>
            <p className="text-body text-[#d4a853] mt-2">
              <strong>Game effect:</strong> Halvern dies in 1 round if not rescued. The guard who kills him surrenders immediately afterward — he did not want to do it.
            </p>
          </div>

          <div className="bg-[#12121e] rounded-lg p-5 border border-[#d4a853]/20">
            <p className="text-label text-[#d4a853] mb-2">IF SHIFT CHANGE REACHES SEGMENT 5-6</p>
            <p className="text-body text-[#9a958c]">
              The night shift is fully on. New guards at new posts. The handover confusion is over. Any stealth approach now faces fresh, alert guards who have not been lulled by routine. The workers who were planning to leave have missed their window — they are now locked in for the night, under the eyes of guards who don't know them and don't trust them.
            </p>
            <p className="text-body text-[#d4a853] mt-2">
              <strong>Game effect:</strong> All guard Perception checks gain +2. The worker exodus is no longer possible without open combat. Tessa is now watched more closely.
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
        <h2 className="text-h2 text-[#e8e4dc] mb-4">Stat Blocks — If Combat Happens</h2>
        <p className="text-body text-[#9a958c] mb-4">
          Combat is not the default outcome, but it may happen. Use these if the party's plan goes wrong, if they choose violence, or if a clock runs out and forces their hand.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <StatBlockBox>
            <p className="text-label text-[#5f9ea0] mb-1">BROGAN KESH</p>
            <p className="text-h4 text-[#e8e4dc] mb-2">Tharashk Foreman</p>
            <div className="text-mono text-[#9a958c] space-y-1">
              <p>Human, Medium humanoid</p>
              <p>AC 14 (leather coat) | HP 38 (7d8+7)</p>
              <p>Speed 30 ft.</p>
              <div className="mt-2 space-y-0.5">
                <p>STR 12 (+1) DEX 14 (+2) CON 12 (+1)</p>
                <p>INT 13 (+1) WIS 14 (+2) CHA 13 (+1)</p>
              </div>
              <div className="mt-2 space-y-1">
                <p><strong className="text-[#e8e4dc]">Quarterstaff.</strong> +3 to hit, reach 5 ft., 1d6+1 bludgeoning.</p>
                <p><strong className="text-[#e8e4dc]">Pocket Watch (reaction).</strong> When an ally within 30 ft. is attacked, Brogan can use his reaction to call a warning, granting that ally +2 AC against the attack.</p>
                <p><strong className="text-[#e8e4dc]">Tharashk Training.</strong> Brogan has advantage on Survival checks to track or locate creatures. He knows the party's approximate numbers and capabilities from Marrik's scouting.</p>
              </div>
            </div>
          </StatBlockBox>

          <StatBlockBox>
            <p className="text-label text-[#5f9ea0] mb-1">TAREK & VELLA</p>
            <p className="text-h4 text-[#e8e4dc] mb-2">Camp Guards (×3)</p>
            <div className="text-mono text-[#9a958c] space-y-1">
              <p>Human, Medium humanoid</p>
              <p>AC 15 (studded leather) | HP 22 (4d8+4)</p>
              <p>Speed 30 ft.</p>
              <div className="mt-2 space-y-0.5">
                <p>STR 14 (+2) DEX 14 (+2) CON 12 (+1)</p>
                <p>INT 10 (+0) WIS 12 (+1) CHA 10 (+0)</p>
              </div>
              <div className="mt-2 space-y-1">
                <p><strong className="text-[#e8e4dc]">Shortsword.</strong> +4 to hit, reach 5 ft., 1d6+2 piercing.</p>
                <p><strong className="text-[#e8e4dc]">Light Crossbow.</strong> +4 to hit, range 80/320, 1d8+2 piercing.</p>
                <p><strong className="text-[#e8e4dc]">Tharashk Badge.</strong> The guards have a dragon's-head badge that, if displayed to any Tharashk-affiliated NPC, grants them advantage on Persuasion/Intimidation. If the badge is taken, it is evidence of Tharashk involvement.</p>
              </div>
            </div>
          </StatBlockBox>

          <StatBlockBox>
            <p className="text-label text-[#5f9ea0] mb-1">MERRIK</p>
            <p className="text-h4 text-[#e8e4dc] mb-2">Camp Clerk</p>
            <div className="text-mono text-[#9a958c] space-y-1">
              <p>Half-elf, Medium humanoid</p>
              <p>AC 11 (cloth) | HP 16 (3d8+3)</p>
              <p>Speed 30 ft.</p>
              <div className="mt-2 space-y-1">
                <p><strong className="text-[#e8e4dc]">Dagger.</strong> +2 to hit, 1d4 piercing.</p>
                <p><strong className="text-[#e8e4dc]">Record-Keeper.</strong> Merrik has the camp's full inventory, payroll, and correspondence in a locked case (DC 15 to open, or he opens it if threatened). The correspondence includes a letter from "V" dated two weeks ago with instructions about the focus-stone calibration.</p>
              </div>
            </div>
          </StatBlockBox>

          <StatBlockBox>
            <p className="text-label text-[#5f9ea0] mb-1">KASH</p>
            <p className="text-h4 text-[#e8e4dc] mb-2">Pit Boss / Cage Guard</p>
            <div className="text-mono text-[#9a958c] space-y-1">
              <p>Half-orc, Medium humanoid</p>
              <p>AC 16 (chain shirt) | HP 45 (6d8+18)</p>
              <p>Speed 30 ft.</p>
              <div className="mt-2 space-y-0.5">
                <p>STR 16 (+3) DEX 12 (+1) CON 16 (+3)</p>
                <p>INT 8 (-1) WIS 10 (+0) CHA 8 (-1)</p>
              </div>
              <div className="mt-2 space-y-1">
                <p><strong className="text-[#e8e4dc]">War Pick.</strong> +5 to hit, 1d8+3 piercing.</p>
                <p><strong className="text-[#e8e4dc]">Heavy Crossbow.</strong> +3 to hit, range 100/400, 1d10+1 piercing.</p>
                <p><strong className="text-[#e8e4dc]">Relentless (1/rest).</strong> When reduced to 0 HP, Kash drops to 1 HP instead (unless the damage was radiant or from a critical hit).</p>
                <p><strong className="text-[#e8e4dc]">Cage Key.</strong> Kash carries the only key to Halvern's cage. He will surrender it if reduced below 10 HP or if intimidated (DC 14 Intimidation, advantage if the foreman is already dead or captured).</p>
              </div>
            </div>
          </StatBlockBox>
        </div>

        <DMNoteBox>
          <p className="text-body text-[#e8e4dc]">
            <strong className="text-[#d4a853]">Combat as failure, not default:</strong> The redesign treats combat as what happens when the clocks run out or the plan breaks. It is not the expected outcome. If the party successfully pulls their levers, they may never draw steel in the camp. That is a valid and desirable outcome. Do not force combat for the sake of a "boss fight." The tension is in the clocks, not the dice.
          </p>
        </DMNoteBox>
      </motion.section>
    </Layout>
  );
}
