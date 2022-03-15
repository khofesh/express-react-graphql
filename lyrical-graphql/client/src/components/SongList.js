import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery, gql, useMutation } from "@apollo/client";
import fetchSongs from "../queries/fetchSongs";

const DELETE_SONG = gql`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
    }
  }
`;

function SongList(props) {
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

  useEffect(() => {}, []);

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
