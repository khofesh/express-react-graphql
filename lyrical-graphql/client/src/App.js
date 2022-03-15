import { Routes, Route } from "react-router";
import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<SongList />} />
        <Route path="songs/new" element={<SongCreate />} />
        <Route path="songs/:id" element={<SongDetail />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
