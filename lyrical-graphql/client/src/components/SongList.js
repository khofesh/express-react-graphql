import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import fetchSongs from "../queries/fetchSongs";
import { DELETE_SONG } from "../queries/deleteSong";

function SongList(props) {
  let location = useLocation();
  const { loading, error, data, refetch } = useQuery(fetchSongs);
  const [deleteSong, {}] = useMutation(DELETE_SONG);
  console.log(data);

  console.error(error);

  async function onSongDelete(id) {
    await deleteSong({
      variables: {
        id,
      },
    });

    await refetch();
  }

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

  useEffect(() => {
    console.log("location", location);
    if (location.state === "from /song/new") {
      console.log("from /song/new");
      refetch();
    }
  }, [location]);

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
