import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import ReadAloudBox from "@/components/ReadAloudBox";
import DMNoteBox from "@/components/DMNoteBox";
import StatBlockBox from "@/components/StatBlockBox";
import SceneImage from "@/components/SceneImage";
import { DividerLine } from "@/components/DividerLine";
import { motion } from "framer-motion";

export default function PaluurDraal() {
  return (
    <Layout>
      <Breadcrumb segments={[
        { label: "Home", path: "/" },
        { label: "Scenes", path: "/scenes/paluur-draal" },
        { label: "Paluur Draal" }
      ]} />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853]">SCENE 17 · NEW</p>
        <h1 className="text-h1 text-[#e8e4dc] mt-2">Paluur Draal</h1>
        <p className="text-body text-[#9a958c] mt-4">
          A Dhakaani outpost in the deep stone, where a half-elf scholar called the Splicer waits with his charcoal and his questions. 
          A fire drake nests in the ruins. A gnome named Niraza Tovaal offers tea and a choice.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853] mb-4">17a · THE THRESHOLD</p>
        <ReadAloudBox>
          <p className="text-body-lg italic text-[#e8e4dc]">
            The passage ends in a wall of worked stone — not natural, not rough, but cut with deliberate precision and carved with geometric patterns in an iron-red mineral that glows faintly when your light touches it. The patterns are not random. They repeat. They are a language, or they were once.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            Kixil stops ten feet from the wall. She does not touch it. She does not look at it directly.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Kixil: <span className="italic">"This is where I stop. What is beyond this wall is not kobold. It was here before us. It will be here after. I do not enter places that do not know my name."</span>
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            She sits against the passage wall, her lamp turned low, and she waits. She will not speak again unless spoken to. She will not enter. She will not leave.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            The wall has a door. Or rather, it has a place where a door was — a rectangular gap, shoulder-wide, filled now with rubble and time. Beyond the gap, darkness. And somewhere in that darkness, a sound: slow, deliberate, the sound of something being drawn on stone.
          </p>
        </ReadAloudBox>

        <DMNoteBox>
          <p className="text-body text-[#e8e4dc]">
            Kixil's refusal to enter is absolute. She will not be persuaded, bribed, or threatened. This is a cultural boundary, not a tactical choice. If the party tries to force her, she leaves entirely — not angry, just gone, back the way they came. She will wait for them at the Last Spring if they survive. If they do not, she will tell Vrathek what happened.
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
        <p className="text-label text-[#d4a853] mb-4">17b · THE RUINS</p>
        <SceneImage
          src="/24_splicer_ruins.png"
          alt="Splicer sketching in Dhakaani ruins"
          caption="The Splicer at work in the ruin chamber"
        />

        <ReadAloudBox>
          <p className="text-body-lg italic text-[#e8e4dc]">
            The door opens into a chamber that was once a hall — vaulted ceiling, collapsed in places, supported in others by pillars of the same iron-red stone. The floor is littered with debris: broken pottery, rusted metal that might once have been weapons, fragments of something ceramic and white. The walls are covered in the geometric script, thousands of characters, floor to ceiling, every surface that faces inward.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            And the walls are not intact. Someone has been drawing on them.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            Charcoal marks, fresh, overlay the ancient script. Notes, sketches, diagrams — measurements, comparisons, translations in progress. Pages pinned to the stone with iron nails. A camp set up in the corner: a bedroll, a small brazier, a stack of notebooks, three empty teacups arranged in a careful row.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            The drawer is kneeling at the far wall, his back to you, a piece of charcoal in his right hand, his left hand holding a notebook open on his knee. He is sketching the script, annotating it, muttering to himself in a language you almost recognize — Common, but with words that have no Common equivalent, words he is making up as he goes.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            He has not heard you. Or he has, and he has decided not to turn around yet.
          </p>
        </ReadAloudBox>

        <h3 className="text-h3 text-[#d4a853] mt-8 mb-4">The Three Corridors</h3>
        <p className="text-body text-[#9a958c] mb-4">
          Beyond the main hall, three passages branch. The Splicer has been in all three. He knows what is in each.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[#12121e] rounded-lg p-4 border border-[#8b0000]/20">
            <p className="text-label text-[#8b0000] mb-2">THE WARM CORRIDOR</p>
            <p className="text-body text-[#9a958c]">
              The air here is noticeably warmer. The stone is dry and slightly tacky, as if something has coated it. At the end: a collapsed section where a drake has made its nest. The Splicer does not go here. He calls it "the tenant's room."
            </p>
          </div>
          <div className="bg-[#12121e] rounded-lg p-4 border border-[#5f9ea0]/20">
            <p className="text-label text-[#5f9ea0] mb-2">THE QUIET CORRIDOR</p>
            <p className="text-body text-[#9a958c]">
              Silent. No sound of water, no breath of air. The Splicer has mapped this corridor extensively. At its end: a sealed door with Dhakaani script that he has partially translated. He believes it leads to a lower level — a vault or treasury. He has not opened it. He lacks the key.
            </p>
          </div>
          <div className="bg-[#12121e] rounded-lg p-4 border border-[#d4a853]/20">
            <p className="text-label text-[#d4a853] mb-2">THE OPEN CORRIDOR</p>
            <p className="text-body text-[#9a958c]">
              This passage climbs gradually toward the surface. Fresh air moves through it. The Splicer uses it for his supply runs and for the occasional visitor. At its end: a hidden surface entrance, overgrown with mountain scrub, that opens into the foothills east of the Seawall.
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
        <p className="text-label text-[#d4a853] mb-4">17c · THE SPLICER</p>
        <p className="text-body text-[#9a958c] mb-4">
          The Splicer is a new PC, handed off to a player at this point. He has been in the ruins for weeks, alone, funded by an anonymous grant to study Dhakaani script. He does not know about the party. The party does not know about him. Their meeting is coincidence — or it is not. Let the table decide which.
        </p>

        <ReadAloudBox>
          <p className="text-body-lg italic text-[#e8e4dc]">
            He turns when you make a sound — a foot on stone, a breath, the creak of leather. He turns without hurry, as if he has been expecting someone for a long time and has finally stopped expecting them.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            He is half-elf, dark hair gone gray at the temples, wearing traveling clothes that were once clean. His hands are stained with charcoal. His eyes are the color of old paper — not old in the sense of fragile, but old in the sense of having absorbed a great deal.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Splicer: <span className="italic">"You are not the next supply runner. The runner is a dwarf, and he is not due for four days. You are not Marguul — they smell differently, and they do not walk quietly even when they try. You are not Tharashk — Tharashk people carry too much metal and too much certainty."</span>
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            He looks at each of you in turn. His gaze lingers on the dragonmark, if it is visible. It lingers on the warforged, if one is present. It lingers longest on whoever is holding the light.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Splicer: <span className="italic">"You are something else. Something else is usually interesting. Sit, if you like. I have tea that is still warm. I was not expecting to share it, but I am not unwilling."</span>
          </p>
        </ReadAloudBox>

        <h3 className="text-h3 text-[#d4a853] mt-6 mb-4">What the Splicer Knows</h3>
        <div className="space-y-3">
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">About the ruins:</strong> <em>"Paluur Draal was an outpost, not a city. A listening post, I think — though for what, I do not know. The script is administrative, mostly. Inventory lists, duty rosters, supply records. But there are older layers beneath the administrative layer. Writing that predates the Dhakaani empire itself. Writing that uses the same characters to mean different things. I am trying to map the shift. It is slow work."</em></p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">About the fire drake:</strong> <em>"It came three weeks ago. I heard it before I saw it — a sound like a forge, breathing. It has claimed the warm corridor. I do not go there. It does not come here. We have an understanding, the drake and I. I do not disturb its nest. It does not burn my notes. So far, this has held."</em></p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">About his presence here:</strong> <em>"I am funded by an organization that prefers not to name itself. They are interested in pre-Galifar cultures. The Dhakaani are the most accessible of the deep cultures, because they built in stone and stone lasts. I report when I have something worth reporting. I have not had something worth reporting in some time."</em></p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">About the sealed door:</strong> <em>"The quiet corridor ends in a door I cannot open. The script around it speaks of guardians, of keys that are not metal, of a time when the door will open of its own accord. I do not know if that is poetry or prophecy. I do not know if the door has already opened, long ago, and what came through it is still here."</em></p>
          </ReadAloudBox>
        </div>

        <DMNoteBox>
          <p className="text-body text-[#e8e4dc]">
            <strong className="text-[#d4a853]">PC Handoff Notes:</strong> The Splicer player should receive a brief written summary: who the Splicer is, why he's here, what he's discovered, and what his current goals are (translate the sealed door script, survive the drake, finish the grant work). The Splicer has no pre-existing relationship with the party. His integration is an organic roleplay challenge. He may join them, he may ask them to leave, he may simply trade information and stay behind — all of these are valid outcomes.
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
        <p className="text-label text-[#d4a853] mb-4">17d · THE DRAKE COMES HOME</p>
        <SceneImage
          src="/25_fire_drake.png"
          alt="Fire drake in ruin chamber"
          caption="The fire drake — territorial guardian of the warm corridor"
        />

        <p className="text-body text-[#9a958c] mb-4">
          The fire drake is not a boss fight unless the party insists on one. It is a territorial creature that has claimed part of the ruins. It can be avoided, negotiated with, or killed — but only one of these is easy.
        </p>

        <StatBlockBox>
          <p className="text-label text-[#8b0000] mb-1">FIRE DRAKE</p>
          <p className="text-h4 text-[#e8e4dc] mb-2">CR 3 · Medium dragon</p>
          <div className="text-mono text-[#9a958c] space-y-1">
            <p>AC 16 (natural armor) | HP 78 (12d8+24)</p>
            <p>Speed 30 ft., climb 30 ft., fly 60 ft.</p>
            <div className="mt-2 space-y-0.5">
              <p>STR 16 (+3) DEX 14 (+2) CON 15 (+2)</p>
              <p>INT 6 (-2) WIS 12 (+1) CHA 8 (-1)</p>
            </div>
            <div className="mt-2 space-y-1">
              <p><strong className="text-[#e8e4dc]">Bite.</strong> +5 to hit, reach 5 ft., 1d8+3 piercing + 1d6 fire.</p>
              <p><strong className="text-[#e8e4dc]">Claws.</strong> +5 to hit, reach 5 ft., 2d4+3 slashing.</p>
              <p><strong className="text-[#e8e4dc]">Fire Breath (Recharge 5-6).</strong> 15-foot cone, DC 13 Dex save, 6d6 fire damage (half on save).</p>
              <p><strong className="text-[#e8e4dc]">Nimble Escape.</strong> The drake can take the Disengage or Hide action as a bonus action on each of its turns.</p>
              <p><strong className="text-[#e8e4dc]">Stone Camouflage.</strong> In rocky terrain, the drake has advantage on Stealth checks.</p>
            </div>
          </div>
        </StatBlockBox>

        <h3 className="text-h3 text-[#d4a853] mt-6 mb-4">Drake Encounter Options</h3>
        <div className="space-y-4">
          <div className="bg-[#12121e] rounded-lg p-5 border border-[#5f9ea0]/20">
            <p className="text-label text-[#5f9ea0] mb-2">OPTION 1: AVOIDANCE</p>
            <p className="text-body text-[#9a958c]">
              The party simply does not enter the warm corridor. The drake never encounters them. The Splicer's "understanding" with the drake remains intact. This is the easiest option and costs nothing. The party misses whatever is in the warm corridor (mostly drake nest debris and a partially eaten mountain goat), but they also avoid a CR 3 fight.
            </p>
          </div>
          <div className="bg-[#12121e] rounded-lg p-5 border border-[#d4a853]/20">
            <p className="text-label text-[#d4a853] mb-2">OPTION 2: OFFERING</p>
            <p className="text-body text-[#9a958c]">
              The Splicer knows the drake's behavior — it is territorial, not hungry. If the party leaves a significant offering of meat (at least 20 pounds of fresh meat, or a whole animal) at the corridor entrance, the drake will drag the offering into its nest and not emerge for several hours. This buys the party time to explore the warm corridor safely. The offering must be fresh — the drake rejects spoiled or preserved meat.
            </p>
          </div>
          <div className="bg-[#12121e] rounded-lg p-5 border border-[#8b0000]/20">
            <p className="text-label text-[#8b0000] mb-2">OPTION 3: COMBAT</p>
            <p className="text-body text-[#9a958c]">
              The drake fights if its territory is invaded, if the Splicer's notes are threatened, or if it is directly attacked. It uses the corridor walls for cover, pops out to breathe fire, then retreats. It is not stupid — if reduced below 20 HP, it attempts to flee toward the surface. If cornered, it fights to the death.
            </p>
            <p className="text-body text-[#9a958c] mt-2">
              <strong className="text-[#d4a853]">Environmental hazard:</strong> The warm corridor has patches of stone heated by volcanic venting. Standing in these patches causes 1d4 fire damage per round. The drake is immune. The party is not.
            </p>
          </div>
          <div className="bg-[#12121e] rounded-lg p-5 border border-[#8b0000]/20">
            <p className="text-label text-[#8b0000] mb-2">OPTION 4: DRIVE IT OUT</p>
            <p className="text-body text-[#9a958c]">
              A creative solution: use cold, water, or smoke to make the warm corridor uninhabitable for the drake. A Create Water spell, a cold-based attack, or collapsing the corridor entrance could drive the drake toward the surface. It will not return. The party gains the corridor but loses any future drake-related opportunities (the drake's nest contains a scorched brass ring with Dhakaani script — worth 25 gp to a collector, or a clue to a future arc).
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
        <p className="text-label text-[#d4a853] mb-4">17e · NIRAZA TOVAAL</p>
        <SceneImage
          src="/23_niraza_tovaal.png"
          alt="Niraza Tovaal with tea"
          caption="Niraza Tovaal, Trust of the Lost"
        />

        <p className="text-body text-[#9a958c] mb-4">
          Niraza arrives at Paluur Draal through the Open Corridor — the surface entrance. She has been watching the party since the Tharashk camp, through contacts and informants. She is not here by accident. She is here because the party has become interesting.
        </p>

        <ReadAloudBox>
          <p className="text-body-lg italic text-[#e8e4dc]">
            The sound that announces her is the soft clink of porcelain on porcelain — teacups, settling into a carrying case. Then the sound of footsteps, deliberate and unhurried, from the Open Corridor.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            She is a gnome woman of perhaps sixty, gray-streaked black hair pulled back tight in a severe bun that does not match her smile. She wears dark traveling clothes of fine quality — not ostentatious, but expensive in the way that only people who do not need to impress anyone can afford. She carries a small folding stool in one hand and a tea service in the other.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            She sets the stool down in the center of the hall. She sets the tea service on a flat stone. She looks at the party, at the Splicer, at the charcoal marks on the walls, and she nods as if everything she sees confirms something she already suspected.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Niraza: <span className="italic">"You have been busy. Burning camps, crossing bridges, making friends with kobolds. I have been watching. I am not ashamed to say it. The Trust of the Lost watches everyone who might matter. You might matter."</span>
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            She pours tea. She does not ask if anyone wants any. She simply pours, and holds out a cup to whoever is closest.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Niraza: <span className="italic">"My name is Niraza Tovaal. I represent an organization that collects knowledge about people who do unusual things. You have done unusual things. The question is whether you will do more, and whether those things will be useful to us."</span>
          </p>
        </ReadAloudBox>

        <h3 className="text-h3 text-[#d4a853] mt-6 mb-4">What Niraza Offers</h3>
        <div className="space-y-3">
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Information:</strong> She knows about Velder. Not everything, but enough to confirm Halvern's intelligence. Velder is a broker, not a leader — he connects Tharashk resources to outside interests for a percentage. He has been active for three years. He has at least four other operations running, none of them legal.</p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Safe passage:</strong> The Trust can arrange surface transport from the foothills to Korranberg, avoiding Tharashk patrols and Marguul territory. Cost: a favor, not money. The favor will be called in later.</p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">The Splicer's funding:</strong> Niraza reveals, if asked, that the anonymous grant funding the Splicer's work comes from the Trust. The Splicer did not know this — he was told only that a "scholarly society" was interested in Dhakaani culture. This complicates the Splicer's relationship with both the Trust and the party.</p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">A warning:</strong> House Tharashk has received the ping from the focus stone, if it went through. Tharashk enforcers are being mobilized. They will not arrive for several days, but the party should not linger in the Seawall region. Niraza can provide a timeline: five days until the first patrol, ten days until a full extraction team.</p>
          </ReadAloudBox>
        </div>

        <DMNoteBox>
          <p className="text-body text-[#e8e4dc]">
            <strong className="text-[#d4a853]">Niraza's tea:</strong> She serves a Zilargo blend — slightly bitter, with a honey aftertaste. If anyone drinks it, they feel calm, focused, and slightly more honest than usual (disadvantage on Deception for 1 hour). This is not magical — it is just very good tea, served by someone who knows that offering refreshment before negotiation is an old gnomish custom that puts the other party at ease. The disadvantage is subtle. Do not announce it. Let the players notice that they are being more forthcoming than they intended.
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
        <p className="text-label text-[#d4a853] mb-4">17f · THE RETURN</p>
        <ReadAloudBox>
          <p className="text-body-lg italic text-[#e8e4dc]">
            When the party is ready to leave — with or without the Splicer, with or without Niraza's offer accepted — Kixil is waiting at the threshold wall. She has not moved. Her lamp is lower than it was, but it is still lit.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Kixil: <span className="italic">"You came back. That is not certain, in the deep places. I will guide you to the surface road. From there, you are as you were — alone, or with whoever you have gathered."</span>
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            She looks at the Splicer, if he is with them. She looks at him longer than she looks at the others.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Kixil: <span className="italic">"You carry the marks of the old place now. Whether that is a burden or a gift, I do not know. The stone will teach you, if you listen."</span>
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            She turns and begins walking. The journey back is shorter — she knows the faster routes now, the ones she would not risk on the way in. Three days to the surface, maybe four. The air changes gradually — cooler, then warmer, then suddenly full of the smells of the surface: pine, rain, the distant smoke of a cooking fire.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            At the surface entrance — a cave mouth hidden behind a waterfall, the last secret of the kobold road — Kixil stops.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Kixil: <span className="italic">"This is where my road ends. Your road continues. Remember what you learned in the stone. The surface forgets quickly. The stone does not forget at all."</span>
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            She does not say goodbye. She turns and walks back into the dark, her lamp a small blue-green star that dwindles and is gone.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            And the party stands at the edge of the waterfall, in the light of a world they left ten days ago, carrying everything they found and everything they lost, and the mountain behind them is already silent.
          </p>
        </ReadAloudBox>
      </motion.section>
    </Layout>
  );
}
