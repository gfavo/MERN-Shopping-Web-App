import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  title: String,
  description: String,
  price: String,
  department: String,
  image: String,
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
