import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_LYRIC } from "../queries/addLyric";

function LyricCreate(props) {
  const [addLyricToSong, { data, loading, error }] = useMutation(ADD_LYRIC);
  const [content, contentSet] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await addLyricToSong({
      variables: {
        content,
        songId: props.songId,
      },
    });

    contentSet("");
  };

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

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
