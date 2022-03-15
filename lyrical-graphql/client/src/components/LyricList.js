function LyricList(props) {
  const onLike = (id, likes) => {};

  const renderLyrics = () => {
    return props.lyrics.map(({ id, content, likes }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <i className="material-icons" onClick={() => onLike(id, likes)}>
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      );
    });
  };

  return <ul className="collection">{renderLyrics()}</ul>;
}

export default LyricList;
