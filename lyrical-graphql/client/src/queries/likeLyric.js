import { gql } from "@apollo/client";

export const LIKE_LYRIC = gql`
  mutation LikeLyric($id: ID!) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;
