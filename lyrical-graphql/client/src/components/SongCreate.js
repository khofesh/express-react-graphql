import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_SONG } from "../queries/addSong";

function SongCreate() {
  let navigate = useNavigate();
  const [addSong, { loading, error }] = useMutation(ADD_SONG);
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
