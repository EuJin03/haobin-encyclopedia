import mongoose from "mongoose";

const factSchema = mongoose.Schema({
  phraseId: {
    type: Number,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
    min: 20,
  },
  author: {
    type: String,
    required: true,
    min: 5,
  },
});

const Fact = mongoose.model("Fact", factSchema);

export default Fact;
