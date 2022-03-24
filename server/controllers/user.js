import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const signUp = async (req, res) => {
  const { name, email, password, image } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      res.status(400).json({ message: "User already exists you dumb bitch!" });

    if (name && email && password && image) {
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = await User.create({
        name: name,
        email: email,
        password: hashedPassword,
        image: image,
      });

      const token = jwt.sign(
        { email: newUser.email, id: newUser._id },
        "test",
        {
          expiresIn: "1h",
        }
      );

      res.status(200).json({ result: newUser, token });
    } else {
      res.status(403).json({ message: "Please input all information!" });
    }
  } catch (error) {}
};
export const logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) res.status(404).json({ message: "User doesnt exist!" });

    const isPassCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPassCorrect) res.status(400).json({ message: "Wrong pass bitch" });

    const token = jwt.sign({ email: email, id: existingUser._id }, "test", {
      expiresIn: "1h",
    });

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(591).json({ error: error });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users).status(200);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const removeAllUsers = async (req, res) => {
  try {
    const users = await User.deleteMany({});
    res.json(users).status(200);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const buyItems = async (req, res) => {
  const items = req.body;

  if (!req.userId) {
    return res.json({ message: "Unauthenticated" });
  }

  try {
    const existingUser = await User.findById(req.userId);

    items.map((item) => existingUser.itemsBought.push(item));

    const updatedUser = await User.findByIdAndUpdate(req.userId, existingUser, {
      new: true,
    });

    res.status(200).json({ message: "bug", updatedUser});
  } catch (error) {
    res.status(400);
  }
};
