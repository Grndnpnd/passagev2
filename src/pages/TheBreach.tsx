import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import ReadAloudBox from "@/components/ReadAloudBox";
import DMNoteBox from "@/components/DMNoteBox";
import SceneImage from "@/components/SceneImage";
import { DividerLine } from "@/components/DividerLine";
import { motion } from "framer-motion";

export default function TheBreach() {
  return (
    <Layout>
      <Breadcrumb segments={[
        { label: "Home", path: "/" },
        { label: "Scenes", path: "/scenes/the-breach" },
        { label: "The Breach" }
      ]} />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853]">SCENES 9-10 · REDESIGNED</p>
        <h1 className="text-h1 text-[#e8e4dc] mt-2">The Breach</h1>
        <p className="text-body text-[#9a958c] mt-4">
          The Tharashk camp seen from above. Three clocks are visible. Kixil sees them all and names what she sees. 
          The camp is not a single problem — it is three problems moving at different speeds.
        </p>
      </motion.section>

      <SceneImage
        src="/12_mining_camp.png"
        alt="Tharashk mining camp"
        caption="The Tharashk camp from the overlook"
      />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-label text-[#d4a853] mb-4">SCENE 9 · THE BREACH</p>
        <ReadAloudBox>
          <p className="text-body-lg italic text-[#e8e4dc]">
            The passage climbs, steep and cold, for an hour. Then it opens.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            Not into open air — into a wide, low gallery, perhaps forty feet across, its ceiling lost in shadow. Below you, the floor of the gallery drops away into a worked space: a mining camp, lit by oil lanterns and the blue-green glow of a House Tharashk dragonshard focus-stone set in a tripod frame at the camp's center.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            The camp is small. Twelve to fifteen people, you judge. Workers in rough clothes, armed guards in leather with Tharashk dragon's-head badges. A foreman in a better coat, walking among them with a pocket watch in his hand — not checking the time, just turning it over and over.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            Kixil drops to a crouch at the gallery's edge, her body low, her lamp turned to its smallest flame. She does not look at the camp below. She looks at the three separate things happening in it.
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            She points, in order.
          </p>
          <p className="text-body-lg font-medium text-[#d4a853] mt-4">
            Kixil: <span className="italic">"The stone. The man. The change."</span>
          </p>
          <p className="text-body-lg italic text-[#e8e4dc] mt-4">
            She does not explain. She waits for you to see what she sees.
          </p>
        </ReadAloudBox>

        <h3 className="text-h3 text-[#d4a853] mt-8 mb-4">What the Party Can See (Passive Perception 12+)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[#12121e] rounded-lg p-4 border border-[#5f9ea0]/20">
            <p className="text-label text-[#5f9ea0] mb-2">1. THE STONE</p>
            <p className="text-body text-[#9a958c]">
              The focus-stone in the tripod frame. A House Tharashk locator crystal, tuned to Eberron dragonshard resonance — the same technology prospectors use to find shard veins. It is glowing steadily, pulsing slowly. Two workers are adjusting something on its base. They look tired. They have been working on it for hours.
            </p>
            <p className="text-caption text-[#5a5650] mt-2">
              Clock: Focus Stone. Slow tick. Strategic.
            </p>
          </div>
          <div className="bg-[#12121e] rounded-lg p-4 border border-[#8b0000]/20">
            <p className="text-label text-[#8b0000] mb-2">2. THE MAN</p>
            <p className="text-body text-[#9a958c]">
              At the far edge of the camp, an iron cage. Inside it: a man, sitting with his back to the bars, hands on his knees, head up. He is not struggling. He is watching the camp with the patience of someone who has been watching for a long time. A guard stands near the cage but not close to it — nervous, keeping distance.
            </p>
            <p className="text-caption text-[#5a5650] mt-2">
              Clock: Halvern's Execution. Medium tick. Emotional.
            </p>
          </div>
          <div className="bg-[#12121e] rounded-lg p-4 border border-[#d4a853]/20">
            <p className="text-label text-[#d4a853] mb-2">3. THE CHANGE</p>
            <p className="text-body text-[#9a958c]">
              A group of workers — not guards, workers — are gathered near the equipment pile, speaking low and fast. One of them, a gnome woman with burn marks on her wrists, is pointing at the passage the party just came from, then at the cage, then at the focus-stone. The others are nodding. They are planning something. They are running out of time to do it.
            </p>
            <p className="text-caption text-[#5a5650] mt-2">
              Clock: Shift Change. Fast tick. Tactical.
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
        <h2 className="text-h2 text-[#e8e4dc] mb-4">The Three Clocks</h2>
        <p className="text-body text-[#9a958c] mb-6">
          These are not combat rounds. They are narrative pressure. Track them visibly. Let the players see time moving.
        </p>

        <div className="space-y-4">
          <div className="bg-[#12121e] border border-[#5f9ea0]/40 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 rounded-full bg-[#5f9ea0] animate-pulse" />
              <span className="text-h3 text-[#5f9ea0]">Clock 1: Focus Stone</span>
              <span className="text-label text-[#5f9ea0] ml-auto">SLOW</span>
            </div>
            <p className="text-body text-[#9a958c] mb-3">
              The Tharashk team is calibrating a large locator crystal. When it goes active, it will ping the House Tharashk network — announcing the breach location to the entire dragonmarked house. That cannot be allowed to happen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#5f9ea0]">SEGMENT 1-3</p>
                <p className="text-body text-[#9a958c] mt-1">Workers adjusting the tripod. No urgency yet. Party has time to observe.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#5f9ea0]">SEGMENT 4-6</p>
                <p className="text-body text-[#9a958c] mt-1">The foreman joins them. The stone's pulse quickens. A low hum becomes audible. Workers look up nervously.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#8b0000]">SEGMENT 7-9</p>
                <p className="text-body text-[#9a958c] mt-1">The stone flares. A visible pulse of blue-white light shoots through the tripod frame. The ping has gone out. The House knows. Everything after this is harder.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#12121e] border border-[#8b0000]/40 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 rounded-full bg-[#8b0000] animate-pulse" />
              <span className="text-h3 text-[#8b0000]">Clock 2: Halvern's Execution</span>
              <span className="text-label text-[#8b0000] ml-auto">MEDIUM</span>
            </div>
            <p className="text-body text-[#9a958c] mb-3">
              The man in the cage is Halvern Stalgert, Tharashk Internal Affairs. He was investigating the illegal operation. They caught him. The foreman, Brogan Kesh, has been ordered to "deal with him" by morning. The guard near the cage is the one who will do it.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#8b0000]">SEGMENT 1-3</p>
                <p className="text-body text-[#9a958c] mt-1">Halvern sits quietly. The guard paces. The execution is scheduled but not imminent. Rescue is possible.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#8b0000]">SEGMENT 4-6</p>
                <p className="text-body text-[#9a958c] mt-1">The guard checks his weapon. Halvern looks up, meets the guard's eyes, does not look away. The guard looks away first.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#8b0000]">SEGMENT 7-9</p>
                <p className="text-body text-[#9a958c] mt-1">The guard opens the cage. Halvern stands. If the party does not intervene now, Halvern dies.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#12121e] border border-[#d4a853]/40 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 rounded-full bg-[#d4a853] animate-pulse" />
              <span className="text-h3 text-[#d4a853]">Clock 3: Shift Change</span>
              <span className="text-label text-[#d4a853] ml-auto">FAST</span>
            </div>
            <p className="text-body text-[#9a958c] mb-3">
              The day shift is ending. The night shift is coming on. During the handover, guard attention will be split, equipment will be unsecured, and the workers who are planning something will have their best window.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#d4a853]">SEGMENT 1-2</p>
                <p className="text-body text-[#9a958c] mt-1">Day workers begin packing tools. Night workers arrive from the passage. The two groups mingle. Guards are distracted.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#d4a853]">SEGMENT 3-4</p>
                <p className="text-body text-[#9a958c] mt-1">The handover is in progress. Equipment is being signed off. The focus-stone is momentarily unattended. The cage is in the guards' blind spot.</p>
              </div>
              <div className="bg-[#0f0f1a] rounded p-3">
                <p className="text-label text-[#d4a853]">SEGMENT 5-6</p>
                <p className="text-body text-[#9a958c] mt-1">The night shift is fully on. New guards at new posts. The window closes. Whatever the party wanted to do during the confusion must be done now or not at all.</p>
              </div>
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
        <p className="text-label text-[#d4a853] mb-4">SCENE 10 · THREE VOICES IN THE CAMP</p>
        <p className="text-body text-[#9a958c] mb-4">
          The party can reach three people in the camp before making their main move. Each offers a different truth about what is happening here. They are not aligned with each other. They are not aligned with the party. They are three people caught in the same machine, each trying to survive it.
        </p>

        <div className="space-y-6">
          <div className="bg-[#12121e] rounded-xl p-6 border border-[#d4a853]/20">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="sm:w-48 flex-shrink-0">
                <SceneImage
                  src="/21_tessa_laborer.png"
                  alt="Tessa the gnome laborer"
                  caption="Tessa, senior laborer"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-h3 text-[#e8e4dc] mb-2">Tessa — The Gnome Laborer</h3>
                <p className="text-body text-[#9a958c] mb-3">
                  A gnome woman in rough work clothes, burn marks on her wrists. She has been with this crew longest — six months. She knows things the others don't.
                </p>
                <ReadAloudBox>
                  <p className="text-body text-[#e8e4dc]">
                    <em>"You're not Tharashk. I can tell. Tharashk people walk like they own the rock. You walk like you're hoping the rock doesn't notice you."</em>
                  </p>
                  <p className="text-body text-[#e8e4dc] mt-2">
                    <em>"The foreman is scared. That's why he's turning that watch over and over — it's not his, it's the boss's. He was supposed to hand it off three days ago. The courier hasn't come. The courier was supposed to come with new orders. Without new orders, the foreman doesn't know if he's supposed to keep digging or pack up and run."</em>
                  </p>
                  <p className="text-body text-[#e8e4dc] mt-2">
                    <em>"The man in the cage — Halvern, they call him — he's not a prisoner, he's a witness. He saw something. I don't know what. But the foreman is waiting for someone to tell him what to do with a witness. That's why he's still alive. That's why he's running out of time."</em>
                  </p>
                </ReadAloudBox>
                <p className="text-body text-[#d4a853] mt-3">
                  <strong>Tessa's agenda:</strong> She wants out. She wants the crew to walk away before the real Tharashk enforcers arrive. She will help the party if their plan includes getting the workers clear. She will oppose them if their plan endangers the workers.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#12121e] rounded-xl p-6 border border-[#8b0000]/20">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="sm:w-48 flex-shrink-0">
                <SceneImage
                  src="/22_halvern_prisoner.png"
                  alt="Halvern Stalgert in iron cage"
                  caption="Halvern Stalgert, Tharashk Internal Affairs"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-h3 text-[#e8e4dc] mb-2">Halvern — The Prisoner</h3>
                <p className="text-body text-[#9a958c] mb-3">
                  A half-elf man with silver at his temples, sitting in an iron cage, watching the camp with the patience of someone who has nothing left to lose.
                </p>
                <ReadAloudBox>
                  <p className="text-body text-[#e8e4dc]">
                    <em>"You are not with the foreman. You are not with the workers. You are something else. Good. I have been waiting for something else."</em>
                  </p>
                  <p className="text-body text-[#e8e4dc] mt-2">
                    <em>"I am Halvern Stalgert. I work for House Tharashk in a capacity that does not appear on any roster you could find. I was sent to find out why a Tharashk foreman was operating in the Seawall without house authorization. I found out. The answer is that he was not operating alone."</em>
                  </p>
                  <p className="text-body text-[#e8e4dc] mt-2">
                    <em>"The foreman has a patron. A man named Velder. Velder is not Tharashk. Velder uses Tharashk resources and Tharashk people, but he answers to someone else. I do not know who. I was taken before I could find out."</em>
                  </p>
                  <p className="text-body text-[#e8e4dc] mt-2">
                    <em>"If you let me live, I will give you Velder. Not his location — I do not have it. But his method. His pattern. The way he finds his people and the way he pays them. That is worth more than his address."</em>
                  </p>
                </ReadAloudBox>
                <p className="text-body text-[#d4a853] mt-3">
                  <strong>Halvern's agenda:</strong> Survive. Expose Velder's network. He is not loyal to the party — he is loyal to the truth. He will trade information for rescue, but he will not lie to them. He has nothing to gain from lying anymore.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#12121e] rounded-xl p-6 border border-[#5f9ea0]/20">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="sm:w-48 flex-shrink-0">
                <SceneImage
                  src="/15_scribe_rat.png"
                  alt="Marrik the scribe-rat"
                  caption="Marrik, scribe-rat of the Haka'jhar"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-h3 text-[#e8e4dc] mb-2">Marrik — The Scribe-Rat</h3>
                <p className="text-body text-[#9a958c] mb-3">
                  A small creature, not quite rat, not quite anything else. Vrathek's eyes in the camp. He moves through the small places — gaps in the rock, under the equipment, through the shadows where the lanterns don't reach.
                </p>
                <ReadAloudBox>
                  <p className="text-body text-[#e8e4dc]">
                    <em>"I have been here three days. I have drawn everything. The camp, the people, the way they move, the way the guards look at the foreman when his back is turned. I have it all on stone."</em>
                  </p>
                  <p className="text-body text-[#e8e4dc] mt-2">
                    <em>"The stone is the important thing. The focus-stone. It is not a locator. Not only a locator. It is tuned to something specific in the rock below the camp. Something the foreman is looking for. I do not know what. But the workers know. They talk about it when the guards are not listening. They call it 'the voice.' They say it speaks when the stone is active."</em>
                  </p>
                  <p className="text-body text-[#e8e4dc] mt-2">
                    <em>"The foreman does not hear the voice. Only the workers hear it. That is why some of them have left. That is why the ones who stayed are afraid. They are not afraid of the foreman. They are afraid of what the foreman is making them dig toward."</em>
                  </p>
                </ReadAloudBox>
                <p className="text-body text-[#d4a853] mt-3">
                  <strong>Marrik's agenda:</strong> Complete Vrathek's contract. Map the camp, identify what Tharashk is looking for, and get out alive. He will share everything he has drawn. He will not fight. He is a scout, not a soldier.
                </p>
              </div>
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
        <h2 className="text-h2 text-[#e8e4dc] mb-4">Kixil's Three Observations</h2>
        <p className="text-body text-[#9a958c] mb-4">
          After the party has observed the camp, Kixil speaks. She does not tell them what to do. She tells them what she sees. Let them connect the dots.
        </p>
        <div className="space-y-3">
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">On the stone:</strong> <em>"That crystal is old Tharashk work. I have seen one before, in the hands of a man who was looking for something dead. It finds what is buried. It does not care if what is buried wants to be found."</em></p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">On the man in the cage:</strong> <em>"He is not afraid. I have watched him for two hours. He has not moved except to breathe. A man who is not afraid of dying is a man who has already decided what he is dying for. That is dangerous. That is useful."</em></p>
          </ReadAloudBox>
          <ReadAloudBox>
            <p className="text-body text-[#e8e4dc]"><strong className="text-[#d4a853]">On the workers:</strong> <em>"The gnome with the burned wrists — she is the leader of the ones who want to leave. I have seen this before. When the workers turn against the work, the work turns against them. The foreman knows. That is why he is turning the watch. He is waiting for orders that will tell him whether to keep the workers or bury them."</em></p>
          </ReadAloudBox>
        </div>

        <DMNoteBox>
          <p className="text-body text-[#e8e4dc]">
            <strong className="text-[#d4a853]">Kixil will not enter the camp.</strong> Her contract extends to the breach only. If the party asks her to join them in the camp, she refuses. <em>"I am a guide, not a soldier. I have shown you the road. What you do at its end is your choice."</em> She will wait at the gallery overlook. She will not leave them, but she will not fight for them either.
          </p>
        </DMNoteBox>
      </motion.section>
    </Layout>
  );
}
