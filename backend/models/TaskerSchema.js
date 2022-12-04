//importing mongoose
const mongoose = require("mongoose");
/**
 * Destructing following from Mongoose
 * a) Schema Constructor - creates schema for database
 * b) model method - to convert schema into model
 */
const { Schema, model } = mongoose;

const TaskerSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is Required"],
      maxLength: [30, "Maximum length is 30 Character"],
    },
    tasks: {
      type: [{ type: String }],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("tasker", TaskerSchema);
