import { Routes, Route } from "react-router";
import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SongList />} />
      <Route path="songs/new" element={<SongCreate />} />
      <Route path="songs/:id" element={<SongDetail />} />
    </Routes>
  );
}

export default App;
