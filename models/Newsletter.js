import mongoose from "mongoose";

/* NewsletterSchema will correspond to a collection in your MongoDB database. */
const NewsletterSchema = new mongoose.Schema({
  email: {
    type: String,
  },
});

export default mongoose.models.Newsletter || mongoose.model("Newsletter", NewsletterSchema);
