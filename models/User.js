const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: String,
    phone: Number,
    isAdmin: Number,
    email: String,
    password: String,
    point: Number,
    vouchers: [
      {
        voucher_id: mongoose.Schema.Types.ObjectId,
        code: String,
      },
    ],
  },
  { versionKey: false }
);

module.exports = mongoose.model("User", userSchema);
