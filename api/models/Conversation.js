const mongoose = require("mongoose");

// creating a convesation model
const ConversationSchema = new mongoose.Schema(
  {
    // collection of object with an array property
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conversation", ConversationSchema);
