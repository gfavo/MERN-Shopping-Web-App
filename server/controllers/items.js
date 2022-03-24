import mongoose from "mongoose";
import Item from "../models/itemsModel.js";

export const getItems = async (req, res) => {
  // const { department } = req.params;

  try {
    const items = await Item.find();

    console.log(items);

    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getItemsByDep = async (req, res) => {
  const { department } = req.params;

  try {
    const items = await Item.find({ department: department });

    console.log(items);

    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const mockItems = async (req, res) => {
  try {
    await Item.create({
      title: "Cellphone",
      description: "Nice smartphone",
      image: "a",
      price: "200",
      department: "electronics",
    });
    await Item.create({
      title: "Microwave",
      description: "Nice product",
      image: "a",
      price: "10000",
      department: "electronics",
    });
    await Item.create({
      title: "Freezer",
      description: "Bad product",
      image: "a",
      price: "2",
      department: "electronics",
    });
    await Item.create({
      title: "Time machine",
      description: "Amazing but dangerous",
      image: "a",
      price: "1",
      department: "electronics",
    });
    await Item.create({
      title: "Belt",
      description: "Nice and firm",
      image: "a",
      price: "200",
      department: "clothing",
    });
    await Item.create({
      title: "Pants",
      description: "Blue like the blues",
      image: "a",
      price: "10000",
      department: "clothing",
    });
    await Item.create({
      title: "Cap",
      description: "A hat.",
      image: "a",
      price: "2",
      department: "clothing",
    });
    await Item.create({
      title: "Jacket",
      description: "Look amazing",
      image: "a",
      price: "200",
      department: "clothing",
    });
    await Item.create({
      title: "Pinochio",
      description: "An amazing tale about a wooden boy :)",
      image: "a",
      price: "200",
      department: "books",
    });
    res.status(200).json({ message: "Item created sucessfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const postItem = async (req, res) => {
  const { title, description, image, price, department } = req.body;

  try {
    const newItem = await Item.create({
      title: title,
      description: description,
      image: image,
      price: price,
      department: department,
    });

    res.status(200).JSON(newItem);
  } catch (error) {
    res.status(500).JSON({ message: error.message });
  }
};

export const removeAll = async (req, res) => {
  try {
    await Item.deleteMany({});
    res.json({ message: "All items removed" });
  } catch (error) {
    res.status(400);
  }
};

export const getItemsByIds = async (req, res) => {
  const ids = req.body;
  try {
    const items = await Item.find();
    const result = [];
      ids.map((id) => {    
        const currentItem = items.find(item => item._id.equals(id.id));
        console.log(currentItem);
        if(currentItem){
          result.push({ name: currentItem.title, dateBought: id.boughtAt });
        } 
      });
      console.log(result);
    res.json(result);
  } catch (error) {
    res.status(100);
  }
};
