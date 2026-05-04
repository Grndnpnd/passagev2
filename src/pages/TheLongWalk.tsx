import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import ReadAloudBox from "@/components/ReadAloudBox";
import DMNoteBox from "@/components/DMNoteBox";
import { DividerLine } from "@/components/DividerLine";
import { motion } from "framer-motion";

export default function TheLongWalk() {
  return (
    <Layout>
      <Breadcrumb segments={[
        { label: "Home", path: "/" },
        { label: "Scenes", path: "/scenes/the-long-walk" },
        { label: "The Long Walk" }
      ]} />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853]">NEW · TRAVEL SYSTEM</p>
        <h1 className="text-h1 text-[#e8e4dc] mt-2">The Long Walk</h1>
        <p className="text-body text-[#9a958c] mt-4">
          Ten days beneath the Seawall Mountains. Three legs, six branch points, and the mountain's own rhythm. 
          The journey between set-pieces is not filler — it is where the party becomes a unit, where resources matter, 
          and where the stone teaches its own lessons.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-h2 text-[#e8e4dc] mb-4">Core Principles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Sparingly:</strong> Run a full travel day only when the table needs a breather from intensity, or when you want to build pressure before a set-piece. Most sessions should include 1-2 full travel days maximum. The rest can be summarized in a sentence.</p>
          </DMNoteBox>
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Kixil is the oracle:</strong> She knows the road, she does not know the future. She can warn about what the road has done before. She cannot warn about what it will do tomorrow.</p>
          </DMNoteBox>
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Camp set pieces are earned:</strong> Each leg ends with a significant camp scene — the Listening Stone, the Iron Shrine, the Last Spring. These are not random encounters. They are culmination points that reward or punish the choices made during the leg.</p>
          </DMNoteBox>
          <DMNoteBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Resource tracking is real:</strong> Food, water, lamp oil, rope, healing supplies. The party should feel the weight of what they carry. Running out of something meaningful should create a problem that requires a creative solution, not just a penalty.</p>
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
        <h2 className="text-h2 text-[#e8e4dc] mb-4">Travel Day Structure</h2>
        <p className="text-body text-[#9a958c] mb-4">
          Each full travel day runs through five phases. Not every phase needs a die roll — some are just narrative beats.
        </p>

        <div className="space-y-4">
          <div className="bg-[#12121e] rounded-lg p-5 border border-[#d4a853]/10">
            <p className="text-label text-[#d4a853] mb-2">1. MORNING BRIEFING</p>
            <p className="text-body text-[#9a958c]">
              Kixil describes the day's route — what she knows, what she suspects, what she doesn't know. The party makes their plan: marching order, who carries what, who scouts ahead. This is a natural moment for roleplay and party coordination.
            </p>
          </div>
          <div className="bg-[#12121e] rounded-lg p-5 border border-[#d4a853]/10">
            <p className="text-label text-[#d4a853] mb-2">2. TRAVEL</p>
            <p className="text-body text-[#9a958c]">
              The actual walking. Usually 6-8 hours of game time. Roll on the Road Phenomena table (d12) once per day. Most results are atmospheric — a sound, a smell, a change in the stone. Some require a decision or a check. Describe the walking itself — the rhythm of boots on stone, the changing air, the way the lamplight moves.
            </p>
          </div>
          <div className="bg-[#12121e] rounded-lg p-5 border border-[#d4a853]/10">
            <p className="text-label text-[#d4a853] mb-2">3. MIDDAY DECISION</p>
            <p className="text-body text-[#9a958c]">
              A natural break point. The party encounters a branch point, a hazard, or an opportunity. This is where the day's real choice happens. Not every day has a midday decision — some are just "keep walking."
            </p>
          </div>
          <div className="bg-[#12121e] rounded-lg p-5 border border-[#d4a853]/10">
            <p className="text-label text-[#d4a853] mb-2">4. EVENING CAMP</p>
            <p className="text-body text-[#9a958c]">
              Setting up camp in the deep stone. Finding water, managing lamps, preparing food, posting watch. Roll on the Camp Encounters table (d20) once per camp. Most results are interpersonal or atmospheric — a dream, an argument, a moment of connection. Some are external threats.
            </p>
          </div>
          <div className="bg-[#12121e] rounded-lg p-5 border border-[#d4a853]/10">
            <p className="text-label text-[#d4a853] mb-2">5. NIGHT WATCH</p>
            <p className="text-body text-[#9a958c]">
              Who sleeps, who watches, what happens in the dark. The night watch is when the mountain is most alive. Sounds from above, sounds from below, the breathing of the stone. Some nights are quiet. Some nights are not.
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
        <h2 className="text-h2 text-[#e8e4dc] mb-4">Road Phenomena (d12)</h2>
        <p className="text-body text-[#9a958c] mb-4">
          Roll once per travel day, or skip if the day is being summarized. Most of these are sensory and require no action. Use them to build atmosphere.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { n: "1", text: "The stone breathes — a deep, slow hum passes through the rock, lasting about a minute. Kixil bows her head. Animals (if any) freeze." },
            { n: "2", text: "Water sounds — rushing, somewhere very close but not visible. The air grows damp. Kixil notes: 'An old river, above us.'" },
            { n: "3", text: "Cold spot — the temperature drops sharply for fifty feet, then returns to normal. No explanation. Kixil does not comment." },
            { n: "4", text: "Fungal bloom — phosphorescent moss or mushrooms light a section of passage in soft blue-green. Beautiful, slightly toxic if touched." },
            { n: "5", text: "Old markings — Dhakaani script, kobold claw-marks, or something older carved into the wall. Kixil may or may not translate." },
            { n: "6", text: "Collapsed section — the passage is partially blocked by a rockfall. Must climb over (Athletics DC 12) or find a way around (adds 2 hours)." },
            { n: "7", text: "Animal encounter — bats, rats, or something larger. Not hostile unless provoked. Kixil guides the party past quietly." },
            { n: "8", text: "Wind from nowhere — a steady breeze from a passage that should be dead. Kixil sniffs the air. 'Surface air. Close.' Or: 'Not surface air. Deeper.'" },
            { n: "9", text: "Echo anomaly — voices from hours ago echo back, distorted. Or future sounds, impossible to identify. Kixil: 'The stone remembers.'" },
            { n: "10", text: " mineral vein — exposed silver, iron, or dragonshard glitter in the lamplight. Worth noting, not worth mining without tools and time." },
            { n: "11", text: "The smell of smoke — distant, very faint. Someone has burned something recently, or something is burning still. Kixil becomes cautious." },
            { n: "12", text: "Structural instability — the ceiling or wall shows fresh cracking. Kixil urges speed. A second d20: on 1, a partial collapse occurs behind the party (no damage, but the way back is now harder)." },
          ].map((item) => (
            <div key={item.n} className="bg-[#12121e] rounded-lg p-4 border border-[#d4a853]/10">
              <p className="text-label text-[#d4a853] mb-1">{item.n}</p>
              <p className="text-body text-[#9a958c]">{item.text}</p>
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
        <h2 className="text-h2 text-[#e8e4dc] mb-4">Camp Encounters (d20)</h2>
        <p className="text-body text-[#9a958c] mb-4">
          Roll once per evening camp. Most of these are interpersonal — moments for character development, not combat. Use them to let the party breathe between set-pieces.
        </p>
        <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
          {[
            { n: "1", text: "Quiet night. Nothing happens. The dark is just dark." },
            { n: "2", text: "Kixil tells a story — a kobold folktale about the first road, or the first breach, or the first time the stone spoke. It may be true. It may not." },
            { n: "3", text: "Someone's dream is vivid — quori-touched, dragonmarked, or just the mountain's influence. The dreamer wakes with a single image burned into memory." },
            { n: "4", text: "A small argument breaks out — about rations, about marching order, about something old. Let it play out. The mountain amplifies tension." },
            { n: "5", text: "Reeks speaks — voluntarily, without being asked. What he says is brief and matters. Afterward, he is quiet again." },
            { n: "6", text: "A discovery in the packs — something someone forgot they carried, or something that shouldn't be there. A letter, a token, a seed." },
            { n: "7", text: "Kixil teaches something — how to read kobold trail-marks, how to tell safe water from iron-poisoned water, how to sleep in the deep without dreaming." },
            { n: "8", text: "The lamps flicker in unison — all of them, for three seconds, then steady. No one knows why. Kixil does not explain." },
            { n: "9", text: "A song — Gnoggin starts humming, or someone else does. The acoustics of the chamber make it strange and beautiful. Kixil listens without comment." },
            { n: "10", text: "Clarari's spirit speaks — the quori voice she carries says something she does not understand. It is not hostile. It is lost." },
            { n: "11", text: "Cyrus recognizes a landmark — a rock formation, a smell, a sound. He knows this country, even beneath it. He shares what he knows." },
            { n: "12", text: "The sound of distant digging — not kobolds, not the party. Something is excavating, somewhere nearby. Kixil is concerned." },
            { n: "13", text: "A visitor — small, not hostile. A bat, a rat, something that watches from the edge of the lamplight and then leaves. Kixil calls it a 'stone-ghost' and does not elaborate." },
            { n: "14", text: "Equipment failure — a strap breaks, a flask leaks, a lamp wick burns through. Manageable, but annoying. Requires improvisation." },
            { n: "15", text: "A confession — someone says something they have not said before. Not under pressure, just because the dark is listening and will not tell." },
            { n: "16", text: "Kixil asks a question — about the surface, about the war, about something she has only heard of. She listens to the answer carefully." },
            { n: "17", text: "The stone is warm — the floor or wall is noticeably warmer than the surrounding rock. Kixil says: 'Old fire. Very old.'" },
            { n: "18", text: "A cache — hidden by previous travelers: water, dried meat, a rope, a note. The note may be helpful, cryptic, or a warning." },
            { n: "19", text: "Night watch sees something — movement at the edge of darkvision, a shape that does not approach and does not leave. Gone by morning." },
            { n: "20", text: "The mountain's breath — the deep hum, but at night, closer, louder. It lasts five minutes. No one sleeps through it. Kixil is afraid. She does not show it, but she does not sleep after either." },
          ].map((item) => (
            <div key={item.n} className="bg-[#12121e] rounded-lg p-3 border border-[#d4a853]/10 flex gap-3">
              <span className="text-label text-[#d4a853] flex-shrink-0 w-6">{item.n}</span>
              <p className="text-body text-[#9a958c]">{item.text}</p>
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
        <h2 className="text-h2 text-[#e8e4dc] mb-4">The Three Legs</h2>

        <div className="space-y-8">
          <div className="bg-[#12121e] rounded-xl p-6 border border-[#5f9ea0]/20">
            <p className="text-label text-[#5f9ea0] mb-2">LEG 1</p>
            <h3 className="text-h3 text-[#e8e4dc] mb-2">Warren → Bridge of Bones</h3>
            <p className="text-caption text-[#9a958c] mb-4">3 days · 2 branch points · Camp: The Listening Stone</p>

            <h4 className="text-h4 text-[#d4a853] mt-4 mb-2">Branch Point 1: The Wet Fork or the Dry Spine</h4>
            <p className="text-body text-[#9a958c] mb-3">
              Day 1, mid-morning. The road splits. The Wet Fork descends through water-carved channels — slower, safer, but the damp is dangerous for equipment and cold. The Dry Spine climbs through a narrow ridge of volcanic rock — faster, but the passage is tight and the air is thin.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#5f9ea0] mb-1">WET FORK</p>
                <p className="text-body text-[#9a958c]">+1 day. No equipment damage from dry heat. Risk: damp weakens bowstrings, ruins paper, chills the party. Kixil prefers this route — she knows the water sources.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#d4a853] mb-1">DRY SPINE</p>
                <p className="text-body text-[#9a958c]">Standard time. Risk: Constitution save DC 12 or gain 1 level of exhaustion from thin air and heat. Bowstrings dry and may snap on a natural 1. Kixil warns: 'The spine remembers fire.'</p>
              </div>
            </div>

            <h4 className="text-h4 text-[#d4a853] mt-4 mb-2">Branch Point 2: Pilgrims' Camp or Direct Approach</h4>
            <p className="text-body text-[#9a958c] mb-3">
              Day 3, afternoon. Near the Bridge of Bones. The Pilgrims' Camp is a kobold resting place — safe, stocked with resin and water, but it requires a half-day detour. The Direct Approach reaches the bridge faster but with no rest and depleted resources.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#5f9ea0] mb-1">PILGRIMS' CAMP</p>
                <p className="text-body text-[#9a958c]">+0.5 day. Full rest, resupply of lamp resin, clean water. Kixil can perform a brief kobold rite that grants advantage on the next Wisdom save. The attendants who travel with you are more relaxed.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#d4a853] mb-1">DIRECT APPROACH</p>
                <p className="text-body text-[#9a958c]">No time cost. Arrive at the bridge tired. The first party member to cross the Bridge of Bones does so with disadvantage on any Dexterity check due to fatigue. The attendants are nervous — they expected the camp.</p>
              </div>
            </div>

            <h4 className="text-h4 text-[#d4a853] mt-6 mb-2">Camp Set Piece: The Listening Stone</h4>
            <ReadAloudBox>
              <p className="text-body-lg italic text-[#e8e4dc]">
                On the night before the Bridge, the party camps in a chamber where a single stalagmite rises from the floor like a finger pointing up. Kixil calls it the Listening Stone. She says the first kobold guides used to speak their fears to it before crossing the bridge, so the stone would carry the fear and let them walk without it.
              </p>
              <p className="text-body-lg italic text-[#e8e4dc] mt-4">
                She does not ask the party to do this. She does it herself — a whispered sentence in Draconic, too quiet to hear. Then she sleeps.
              </p>
            </ReadAloudBox>
            <p className="text-body text-[#9a958c] mt-3">
              If any party member whispers something to the stone — a fear, a hope, a secret — they gain advantage on their first Wisdom save during the Bridge of Bones crossing. If they mock the stone or break a piece off, they gain disadvantage. The stone does not punish. It simply does not help.
            </p>
          </div>

          <div className="bg-[#12121e] rounded-xl p-6 border border-[#d4a853]/20">
            <p className="text-label text-[#d4a853] mb-2">LEG 2</p>
            <h3 className="text-h3 text-[#e8e4dc] mb-2">Bridge of Bones → Tharashk Camp</h3>
            <p className="text-caption text-[#9a958c] mb-4">3 days · 2 branch points · Camp: The Iron Shrine</p>

            <h4 className="text-h4 text-[#d4a853] mt-4 mb-2">Branch Point 1: Old Patrol Road or Cousin's Path</h4>
            <p className="text-body text-[#9a958c] mb-3">
              Day 4, mid-morning. The Old Patrol Road is a wider passage, once used by Dhakaani soldiers — straighter, faster, but more exposed. Cousin's Path is a kobold tunnel network — narrow, winding, with multiple exits and dead ends. Kixil's grandmother taught her the marks.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#d4a853] mb-1">OLD PATROL ROAD</p>
                <p className="text-body text-[#9a958c]">Standard time. The road is wide enough to walk two abreast. Risk: Dhakaani traps (old but functional). Kixil knows where most are. One she doesn't know: a pit trap, DC 14 to spot, 2d6 falling damage.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#5f9ea0] mb-1">COUSIN'S PATH</p>
                <p className="text-body text-[#9a958c]">+0.5 day. Multiple false turns. Kixil must make Survival checks (DC 13) to navigate; on failure, the party loses 2 hours backtracking. Advantage: the path passes near The Crawl, allowing the party to scout the choker territory before entering it.</p>
              </div>
            </div>

            <h4 className="text-h4 text-[#d4a853] mt-4 mb-2">Branch Point 2: The Long Climb or the Sump</h4>
            <p className="text-body text-[#9a958c] mb-3">
              Day 6, morning. The Long Climb is a steep ascent through worked stone — exhausting but direct. The Sump is a flooded lower passage — wading through cold, black water up to chest height, but it bypasses the climb entirely.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#d4a853] mb-1">LONG CLIMB</p>
                <p className="text-body text-[#9a958c]">Standard time. Athletics DC 12 or gain 1 exhaustion. The climb offers a vantage: from a high ledge, the party can see the Tharashk camp's lantern-glow before they reach it, giving them a stealth advantage at the Breach.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#5f9ea0] mb-1">THE SUMP</p>
                <p className="text-body text-[#9a958c]">Standard time. Constitution DC 13 or gain 1 exhaustion from cold water. All metal equipment must be dried and oiled afterward or risks rust. Advantage: the sump exits directly into the gallery overlooking the camp — the perfect approach for stealth.</p>
              </div>
            </div>

            <h4 className="text-h4 text-[#d4a853] mt-6 mb-2">Camp Set Piece: The Iron Shrine</h4>
            <ReadAloudBox>
              <p className="text-body-lg italic text-[#e8e4dc]">
                On the night before the Breach, the party camps in a small chamber where a Dhakaani iron relic stands against the wall — a helmet, or perhaps a mask, set into the stone as if the wall grew around it. Kixil will not touch it. The kobolds do not touch it. It has been here longer than their road.
              </p>
              <p className="text-body-lg italic text-[#e8e4dc] mt-4">
                If anyone touches the mask, nothing happens. If anyone speaks to it, nothing happens. If anyone offers it something — food, water, a coin — it does not respond.
              </p>
              <p className="text-body-lg italic text-[#e8e4dc] mt-4">
                But in the morning, the offering is gone. And the mask's eye-slits, which were dark, now hold a faint red glow. Kixil sees this and says nothing. She does not look at the mask again.
              </p>
            </ReadAloudBox>
            <p className="text-body text-[#9a958c] mt-3">
              The mask is foreshadowing for a future arc — Dhakaani, perhaps, or something older. Do not explain it now. Let it sit. The party will remember it when the time comes.
            </p>
          </div>

          <div className="bg-[#12121e] rounded-xl p-6 border border-[#8b0000]/20">
            <p className="text-label text-[#8b0000] mb-2">LEG 3</p>
            <h3 className="text-h3 text-[#e8e4dc] mb-2">Tharashk Camp → Paluur Draal</h3>
            <p className="text-caption text-[#9a958c] mb-4">4 days · 2 branch points · Camp: The Last Spring</p>

            <h4 className="text-h4 text-[#d4a853] mt-4 mb-2">Branch Point 1: Buried Road or Surface Skirt</h4>
            <p className="text-body text-[#9a958c] mb-3">
              Day 8, morning. The Buried Road is an ancient Dhakaani passage, mostly collapsed — slow, dangerous, but it leads directly to Paluur Draal's lower entrance. The Surface Skirt climbs to a series of shallow caves near the surface — faster, but exposed to Marguul patrols and weather.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#5f9ea0] mb-1">BURIED ROAD</p>
                <p className="text-body text-[#9a958c]">+1 day. Multiple collapse zones requiring climbing, squeezing, or excavation. Kixil (if present) knows safe paths through most. Risk: the road passes through older, deeper passages — roll on the Road Phenomena table twice per day here, and any result of 11-12 is automatic (no d20 override).</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#d4a853] mb-1">SURFACE SKIRT</p>
                <p className="text-body text-[#9a958c]">Standard time. Marguul patrol check: DC 15 group Stealth. On failure, a bugbear scouting party (3 bugbears, CR 1 each) detects the party. They demand tribute (50 gp worth of goods) or attack. Kixil knows a hiding spot if she is present — automatic success if the party follows her lead.</p>
              </div>
            </div>

            <h4 className="text-h4 text-[#d4a853] mt-4 mb-2">Branch Point 2: Direct Descent or Whispering Stair</h4>
            <p className="text-body text-[#9a958c] mb-3">
              Day 10, late afternoon. The final approach to Paluur Draal. The Direct Descent is a straight drop down a worked shaft — fast, requiring rope and climbing gear, but no navigation. The Whispering Stair spirals down around the same shaft — safe, walkable, but the walls are covered in Dhakaani script that seems to whisper when the wind moves through it.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#d4a853] mb-1">DIRECT DESCENT</p>
                <p className="text-body text-[#9a958c]">Standard time. Athletics DC 14 to descend safely. Failure: 1d6 falling damage and a noisy landing that may alert anything waiting below. Requires 100 feet of rope or equivalent magic. Kixil has 60 feet of kobold cord — strong, but not enough alone.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#5f9ea0] mb-1">WHISPERING STAIR</p>
                <p className="text-body text-[#9a958c]">+0.5 day. No checks required to navigate. The whispers are atmospheric — old Dhakaani commands, names, prayers. Some are in languages no one recognizes. Wisdom save DC 12 or become distracted (disadvantage on Perception for 1 hour). Advantage: the whispers include the name 'Paluur' repeated many times — the party knows they are close.</p>
              </div>
            </div>

            <h4 className="text-h4 text-[#d4a853] mt-6 mb-2">Camp Set Piece: The Last Spring</h4>
            <ReadAloudBox>
              <p className="text-body-lg italic text-[#e8e4dc]">
                On the night before Paluur Draal, the party camps at the last fresh water before the ruin — a spring bubbling from a crack in the stone, cold and sweet. Kixil calls it the Last Spring. She says the Dhakaani built their outposts near water, and this was the spring that fed Paluur Draal when it lived.
              </p>
              <p className="text-body-lg italic text-[#e8e4dc] mt-4">
                The spring flows into a small pool, and the pool overflows into a channel that leads deeper into the rock — toward Paluur Draal, Kixil says. The water moves constantly, a soft sound that fills the chamber.
              </p>
              <p className="text-body-lg italic text-[#e8e4dc] mt-4">
                Kixil fills her flask and then does something she has not done before: she sits by the pool and does not immediately prepare for sleep. She watches the water. After a long moment she says, without turning: <em>"I have never been to Paluur Draal. My mother went, once. She did not speak of it after. I do not know what waits there. I know only that the road ends, and you must walk the last part without me."</em>
              </p>
            </ReadAloudBox>
            <p className="text-body text-[#9a958c] mt-3">
              If the party asks why she will not enter, she says: <em>"It is not my place. The Dhakaani did not build for kobolds. Their ghosts, if they remain, would not know my shape."</em> She will wait at the threshold. She will not leave them, but she will not cross it.
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
        <h2 className="text-h2 text-[#e8e4dc] mb-4">Resource Tracking</h2>
        <p className="text-body text-[#9a958c] mb-4">
          The party should track these resources. They begin with standard adventuring gear. The kobold road offers limited resupply. Running out of something should create interesting problems, not just numeric penalties.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-[#d4a853]/40">
                <th className="py-3 px-4 text-label text-[#d4a853]">RESOURCE</th>
                <th className="py-3 px-4 text-label text-[#d4a853]">STARTING AMOUNT</th>
                <th className="py-3 px-4 text-label text-[#d4a853]">CONSUMPTION</th>
                <th className="py-3 px-4 text-label text-[#d4a853]">IF DEPLETED</th>
              </tr>
            </thead>
            <tbody className="text-body text-[#9a958c]">
              <tr className="border-b border-[#d4a853]/10"><td className="py-3 px-4">Lamp Oil / Resin</td><td className="py-3 px-4">7 days' worth</td><td className="py-3 px-4">1 per day of travel</td><td className="py-3 px-4">Darkvision-only travel. Non-darkvision characters must hold shoulders or use magic light. Kixil can share her resin sparingly (3 extra days max).</td></tr>
              <tr className="border-b border-[#d4a853]/10"><td className="py-3 px-4">Rations</td><td className="py-3 px-4">10 days' worth</td><td className="py-3 px-4">1 per person per day</td><td className="py-3 px-4">Foraging possible (Survival DC 14, Kixil advantage). Underground food sources: fungi, cave fish, lichen. All require preparation time.</td></tr>
              <tr className="border-b border-[#d4a853]/10"><td className="py-3 px-4">Water</td><td className="py-3 px-4">5 days' worth</td><td className="py-3 px-4">1 per person per day</td><td className="py-3 px-4">Water is the easiest resource to find. Most legs pass near underground streams or springs. The risk is quality — some water carries mineral poisoning (Con DC 12 or 1d4 poison damage).</td></tr>
              <tr className="border-b border-[#d4a853]/10"><td className="py-3 px-4">Rope</td><td className="py-3 px-4">100 feet hemp</td><td className="py-3 px-4">Variable</td><td className="py-3 px-4">Critical for the Direct Descent to Paluur Draal. Kobold cord (60 ft) is available if Kixil trusts the party. Cannot be purchased underground.</td></tr>
              <tr className="border-b border-[#d4a853]/10"><td className="py-3 px-4">Healing Supplies</td><td className="py-3 px-4">2 potions + 1 healer's kit</td><td className="py-3 px-4">As needed</td><td className="py-3 px-4">No resupply underground except from caches (Camp Encounters 18) or camp loot. Kixil carries 1 potion for herself, which she will share only if a party member saves her life.</td></tr>
              <tr><td className="py-3 px-4">Ammunition</td><td className="py-3 px-4">Standard starting</td><td className="py-3 px-4">As needed</td><td className="py-3 px-4">Cannot be replaced underground. Ranged characters should be aware of every shot. Camp loot may include crossbow bolts.</td></tr>
            </tbody>
          </table>
        </div>
      </motion.section>
    </Layout>
  );
}
