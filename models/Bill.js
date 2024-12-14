const mongoose = require("mongoose");

const billSchema = new mongoose.Schema(
  {
    // user_id: { type: mongoose.Schema.Types.ObjectId, required: false },
    // products: [
    //   {
    //     product_id: mongoose.Schema.Types.ObjectId,
    //     quantity: Number,
    //   },
    // ],
    // total: Number,
    // table_id: mongoose.Schema.Types.ObjectId,
    // date: {
    //   type: Date,
    //   default: Date.now,
    // },
    // status: {
    //   type: String,
    //   enum: ["Pending Payment", "Paid"],
    //   default: "Pending Payment",
    // },
    order_id: { type: mongoose.Schema.Types.ObjectId, required: false },
    discount: Number,
    surcharge: Number,
    total: Number,
    date: {
      type: Date,
      default: Date.now,
    },
  },

  { versionKey: false }
);

module.exports = mongoose.model("Bill", billSchema);
