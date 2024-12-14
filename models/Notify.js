const mongoose = require("mongoose");

const notifySchema = new mongoose.Schema(
  {
    order_id: mongoose.Schema.Types.ObjectId,
    user_id: mongoose.Schema.Types.ObjectId,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Notify", notifySchema);
