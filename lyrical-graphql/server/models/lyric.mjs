import mongoose from "mongoose";
const Schema = mongoose.Schema;

const LyricSchema = new Schema({
  song: {
    type: Schema.Types.ObjectId,
    ref: "song",
  },
  likes: { type: Number, default: 0 },
  content: { type: String },
});

LyricSchema.statics.like = async function (id) {
  const Lyric = mongoose.model("lyric");

  const lyric = await Lyric.findById(id);
  ++lyric.likes;
  return lyric.save();
};

mongoose.model("lyric", LyricSchema);
