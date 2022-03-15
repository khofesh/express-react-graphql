import { useMutation } from "@apollo/client";
import { LIKE_LYRIC } from "../queries/likeLyric";

function LyricList(props) {
  const [likeLyric, { data, loading, error }] = useMutation(LIKE_LYRIC);

  const onLike = async (id, likes) => {
    await likeLyric({
      variables: { id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id,
          __typename: "LyricType",
          likes: likes + 1,
        },
      },
    });
  };

  console.log("data", data);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

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
