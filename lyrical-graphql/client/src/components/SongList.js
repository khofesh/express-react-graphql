import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import fetchSongs from "../queries/fetchSongs";

function SongList(props) {
  const { loading, error, data } = useQuery(fetchSongs);
  console.log(data);

  console.error(error);

  function onSongDelete(id) {}

  function renderSongs() {
    return data.songs.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          <Link to={`/songs/${id}`}>{title}</Link>
          <i className="material-icons" onClick={() => onSongDelete(id)}>
            delete
          </i>
        </li>
      );
    });
  }

  if (error) {
    return <div>Error occurred</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul className="collection">{renderSongs()}</ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
}

export default SongList;
