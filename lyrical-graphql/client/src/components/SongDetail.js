import { Link } from "react-router-dom";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

function SongDetail(props) {
  const { song } = props.data;

  if (!song) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{song.title}</h3>
      <LyricList lyrics={song.lyrics} />
      <LyricCreate songId={props.params.id} />
    </div>
  );
}

export default SongDetail;
