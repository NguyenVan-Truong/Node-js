import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requered: true,
    },
    price: {
      type: Number,
      // minlength: 1000,
    },
    description: {
      type: String,
      requered: true,
    },
    image: {
      type: String,
      requered: true,
    },
    author: {
      type: String,
      requered: true,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("Product", productSchema);
