import { useState } from "react";
import { Link } from "react-router-dom";

function SongCreate() {
  const [title, titleSet] = useState("");

  function onSubmit(event) {
    event.preventDefault();
  }

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
      </form>
    </div>
  );
}

export default SongCreate;
