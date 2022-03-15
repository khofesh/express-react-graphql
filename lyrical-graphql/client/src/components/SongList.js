import { useState } from "react";
import { Link } from "react-router-dom";

function SongList(props) {
  function onSongDelete(id) {}

  function renderSongs() {
    return props.data.songs.map(({ id, title }) => {
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

  if (props.data.loading) {
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
