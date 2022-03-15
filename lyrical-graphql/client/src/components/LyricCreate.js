import React, { useState } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

function LyricCreate(props) {
  const [content, contentSet] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    props
      .mutate({
        variables: {
          content: content,
          songId: props.songId,
        },
      })
      .then(() => contentSet(""));
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

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
