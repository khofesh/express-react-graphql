import mongoose from "mongoose";
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
} from "graphql";
import SongType from "./song_type.mjs";

const Lyric = mongoose.model("lyric");

const LyricType = new GraphQLObjectType({
  name: "LyricType",
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    song: {
      type: SongType,
      async resolve(parentValue) {
        const lyric = await Lyric.findById(parentValue).populate("song");

        console.log(lyric);
        return lyric.song;
      },
    },
  }),
});

export default LyricType;
