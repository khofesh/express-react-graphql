import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";
import fetchSong from "../queries/fetchSong";

function SongDetail(props) {
  let { id } = useParams();
  console.log("id", id);
  const { loading, error, data } = useQuery(fetchSong, {
    variables: {
      id,
    },
  });

  console.log("data", data);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred</div>;
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{data.song.title}</h3>
      <LyricList lyrics={data.song.lyrics} />
      <LyricCreate songId={id} />
    </div>
  );
}

export default SongDetail;
