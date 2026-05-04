import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import ReadAloudBox from "@/components/ReadAloudBox";
import DMNoteBox from "@/components/DMNoteBox";
import SceneImage from "@/components/SceneImage";
import { DividerLine } from "@/components/DividerLine";
import { motion } from "framer-motion";

export default function TheOffer() {
  return (
    <Layout>
      <Breadcrumb segments={[
        { label: "Home", path: "/" },
        { label: "Scenes", path: "/scenes/the-offer" },
        { label: "The Offer" }
      ]} />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853]">SCENES 4-5</p>
        <h1 className="text-h1 text-[#e8e4dc] mt-2">The Offer</h1>
        <p className="text-body text-[#9a958c] mt-4">
          Vrathek the blood seer makes her bargain — passage through the stone in exchange for clearing the Tharashk breach. 
          And Cyrus receives a warning he did not ask for.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853] mb-4">SCENE 4 · VRATHEK'S OFFER</p>
        <SceneImage
          src="/05_vrathek_portrait.png"
          alt="Vrathek the blood seer"
          caption="Vrathek, Haka'jhar blood seer"
        />

        <ReadAloudBox>
          <p className="text-body-lg italic text-[#e8e4dc]">
            She does not summon you. She arrives with two attendants and a folded skin map, and she sits on the floor of the chamber as if she has always belonged there.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            The attendants do not sit. They stand at her shoulders, hands loose at their sides, eyes on the doorway. They are armed.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            Vrathek herself is unarmed. She does not look at her attendants. She is looking at each of you in turn.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Vrathek: <span className="italic">"You came here in a bad way and we kept you alive. That is one debt, settled. There is another I will ask you to pay."</span>
          </p>
        </ReadAloudBox>

        <ReadAloudBox>
          <p className="text-body-lg italic text-[#e8e4dc]">
            She unfolds the skin map across the stone. It is the mountain — the whole spine of the Seawall, drawn from inside. Tunnels in red. Air shafts in blue. Old places, sealed places, in black ink that has gone almost to brown.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Vrathek: <span className="italic">"There is a road through the stone. From here to a cave above the southern foothills, near the road to Korranberg. My grandfather walked it. His grandfather cut it. It is ten days' walk, sometimes eleven. It will save you a season above ground, where the hunters know the shape of you."</span>
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            She taps a place on the map with one knuckle. The mark she points to is near the southern third of the route.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Vrathek: <span className="italic">"A week ago, men with picks and a Tharashk dragonshard broke through the south-east gallery, here, near the Old Salt. They killed two of mine before we understood what they were."</span>
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Vrathek: <span className="italic">"They are looking for something. We do not know what. Their foreman has a writ from a man named Velder. The writ is not stamped by the house. It is illegal, even by their rules."</span>
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            She closes the map. She does not raise her voice.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Vrathek: <span className="italic">"Take their camp. Empty it. Burn the maps. We do not need them dead — we need them gone, and we need their shape erased from the mountain."</span>
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Vrathek: <span className="italic">"Do this, and the road is yours. We will guide you to the breach, and from the breach you walk south by yourselves. We will watch you from the small places. You will not be alone."</span>
          </p>
        </ReadAloudBox>

        <h3 className="text-h3 text-[#d4a853] mt-8 mb-4">Q&A — If the Party Asks</h3>
        <div className="space-y-3">
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Why us?</strong> <em>"You are here. You are armed. You are already wanted by the same house. There is no other knife in my hand."</em></p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">What's at the Old Salt?</strong> <em>"A vein of salt the old earth left there before there were nations. The men with picks found something near it. They are not telling each other in the open. We listen to them when they sleep."</em></p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Who is Velder?</strong> <em>"A name. Tharashk, but not in the open registry. A man who buys what cannot be put on a manifest. We do not know his face."</em></p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Will we have to kill them?</strong> <em>"That is your question, not mine. I asked for them to leave. I did not ask how."</em></p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">Are there prisoners?</strong> <em>"There is a man in their cage. Not one of theirs. We saw him brought in three nights ago. He has bled and not died. That is all I know of him."</em></p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">What if we say no?</strong> <em>"Then you walk west with the captain, or you walk south above the rocks where the hunters find you. I am not your jailer. I am your offer."</em></p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">What's our payment?</strong> <em>"The road. Your lives, kept until the next thing. Whatever you take from the camp that we do not need — and we need very little of what surface men carry."</em></p>
          </ReadAloudBox>
        </div>

        <DMNoteBox>
          <p className="text-body text-[#e8e4dc]">
            Cyrus may attempt to recognize the name 'Velder' with an Intelligence check (DC 14, History or Investigation). On a success: he doesn't know a Velder personally, but the name was on a fence-list circulating in the Black Highway last winter — a Tharashk operative who pays in House paper that's good at any of the major trade banks. The fact that the writ is not stamped means Tharashk leadership doesn't officially know what Velder is doing. Velder is going around them. That's worth real money to the right buyer.
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
        <p className="text-label text-[#d4a853] mb-4">SCENE 5 · CYRUS AND THE MARGUUL</p>
        <SceneImage
          src="/04_brelish_foothills.png"
          alt="Brelish foothill country at dusk"
          caption="The Marguul Pass"
        />
        <p className="text-body text-[#9a958c] mb-4">
          Before the party departs the warrens, give Cyrus a moment. Vrathek will speak to him alone — she has taken his measure. She knows what he is.
        </p>

        <ReadAloudBox>
          <p className="text-body-lg italic text-[#e8e4dc]">
            Vrathek beckons Cyrus aside as the others are checking their packs. She does not lower her voice; she expects others may hear, and does not care.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Vrathek: <span className="italic">"You know this country."</span>
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            It is not a question.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Vrathek: <span className="italic">"I saw you look at the map. You saw the line we did not draw — the one that goes east, where the rock is cracked. The bugbears use that line. Your kind used it once, too, did you not? The hand without nails. The Hexers, I think you called yourselves, in the Common tongue."</span>
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            She does not wait for an answer.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Vrathek: <span className="italic">"They are in the high places now. Mograath's clan, the fang-faced ones. They watch the southern road from the ridges. If you come up, they will come down. We do not go that way anymore."</span>
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Vrathek: <span className="italic">"I tell you this because the road we are giving you is below them. But the breach is not. The breach is in the salt vein, and the salt vein is at the edge of their hearing."</span>
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Vrathek: <span className="italic">"Be quiet there. Or be very loud, very fast."</span>
          </p>
        </ReadAloudBox>

        <h3 className="text-h3 text-[#d4a853] mt-8 mb-4">What Cyrus Knows About the Marguul</h3>
        <p className="text-body text-[#9a958c] mb-4">
          All of this is automatic — Cyrus' lived history, not a knowledge roll. Hand it to the player and let them decide what to share.
        </p>
        <ul className="list-disc list-inside space-y-2 text-body text-[#9a958c]">
          <li>The Marguul tribe is bugbear-led — the most physically dominant goblinoid clans in the Seawall highlands. They pay only nominal homage to Lhesh Haruuc in Rhukaan Draal.</li>
          <li>The worst are the Kalkor clan, led by Mograath. They follow the Mockery and ignore safe-passage banners. Kalkor warriors carry fang-pattern facial scars.</li>
          <li>The Marguul demand tribute from anyone passing their territory. Cyrus knows three goat-trails the bugbears don't watch. None go where the party needs to go now — but the knowledge will open future doors.</li>
          <li>House Tharashk has been negotiating with goblinoid tribes to mine the eastern Seawall slopes — work the gnomes won't permit on the western face.</li>
        </ul>

        <DMNoteBox>
          <p className="text-body text-[#e8e4dc]">
            This Marguul material is for the player's use, not just yours. Cyrus knowing more than he's saying is a fine note to play. If the player wants to share something specific with the party, narrate that as their own decision; don't gate it behind rolls.
          </p>
        </DMNoteBox>
      </motion.section>
    </Layout>
  );
}
