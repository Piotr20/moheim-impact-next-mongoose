import mongoose from "mongoose";

/* NewsletterSchema will correspond to a collection in your MongoDB database. */
const FurnitureSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  imgUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.models.Furniture || mongoose.model("Furniture", FurnitureSchema);
