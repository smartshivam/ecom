import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique:true
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
});

export const Categories = mongoose.model("Categories", categorySchema);
