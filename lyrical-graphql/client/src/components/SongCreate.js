import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

const ADD_SONG = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

function SongCreate() {
  let navigate = useNavigate();
  const [addSong, { data, loading, error }] = useMutation(ADD_SONG);
  const [title, titleSet] = useState("");

  async function onSubmit(event) {
    event.preventDefault();

    await addSong({ variables: { title } });
    navigate("/");
  }

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>Create a New Song</h3>
      <form onSubmit={onSubmit}>
        <label>Song Title:</label>
        <input
          onChange={(event) => titleSet(event.target.value)}
          value={title}
        />
        <button type="submit"> submit </button>
      </form>
    </div>
  );
}

export default SongCreate;
