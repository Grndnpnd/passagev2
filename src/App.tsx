import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Departure from './pages/Departure'
import TheOffer from './pages/TheOffer'
import IntoTheStone from './pages/IntoTheStone'
import TheBridge from './pages/TheBridge'
import TheCrawl from './pages/TheCrawl'
import TheOldSalt from './pages/TheOldSalt'
import TheBreach from './pages/TheBreach'
import TheCamp from './pages/TheCamp'
import Aftermath from './pages/Aftermath'
import DMReference from './pages/DMReference'
import BattleMaps from './pages/BattleMaps'
import TheLongWalk from './pages/TheLongWalk'
import PaluurDraal from './pages/PaluurDraal'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scenes/departure" element={<Departure />} />
      <Route path="/scenes/the-offer" element={<TheOffer />} />
      <Route path="/scenes/into-the-stone" element={<IntoTheStone />} />
      <Route path="/encounters/the-bridge" element={<TheBridge />} />
      <Route path="/encounters/the-crawl" element={<TheCrawl />} />
      <Route path="/encounters/the-old-salt" element={<TheOldSalt />} />
      <Route path="/scenes/the-breach" element={<TheBreach />} />
      <Route path="/scenes/the-camp" element={<TheCamp />} />
      <Route path="/scenes/aftermath" element={<Aftermath />} />
      <Route path="/dm-reference" element={<DMReference />} />
      <Route path="/battle-maps" element={<BattleMaps />} />
      <Route path="/scenes/the-long-walk" element={<TheLongWalk />} />
      <Route path="/scenes/paluur-draal" element={<PaluurDraal />} />
    </Routes>
  )
}
