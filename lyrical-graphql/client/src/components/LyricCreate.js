import { useState } from "react";

function LyricCreate(props) {
  const [content, contentSet] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Add a Lyric</label>
      <input
        value={content}
        onChange={(event) => contentSet(event.target.value)}
      />
    </form>
  );
}

export default LyricCreate;
