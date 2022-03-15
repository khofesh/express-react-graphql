import { Routes, Route } from "react-router";
import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";

function App() {
  return (
    <Routes>
      <Route path="/" component={SongList} />
      <Route path="songs/new" component={SongCreate} />
      <Route path="songs/:id" component={SongDetail} />
    </Routes>
  );
}

export default App;
