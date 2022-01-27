import { generateToken } from "../utils/generateToken.js";
import user from "../models/userModel.js";
import Mongoose from "mongoose";

//@purpose: new user and get token
//@route:  POST user/register
//@access  Public
export const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  const userExists = await user.findOne({ email: email });

  if (userExists) {
    res.status(400);
    const err = new Error("User already exists");
    next(err);
  }

  const User = await user.create({
    username,
    email,
    password,
  });
  if (User) {
    res.json({
      _id: User._id,
      name: User.username,
      password: User.password,
    });
  } else {
    res.status(404);
    const err = new Error("Invalid User Data");
    next(err);
  }
};

// @purpose: Auth user and get token
// @route: user/login
// @access Public
export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const User = await user.findOne({ email: email });

  if (User) {
    res.json({
      _id: User._id,
      name: User.username,
      email: User.email,
      token: generateToken(User._id),
    });
  } else {
    res.status(401);
    const err = new Error("Invalid email or password");
    next(err);
  }
};

// @purpose: get user
// @route: user/
export const getUsers = async (req, res) => {
  try {
    const notefetch = await user.find();
    res.status(200).json(notefetch);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @purpose: Delete user
// @route: user/delete
export const deleteUser = async (req, res) => {
  const { id: id } = req.params;
  console.log(req.params);
  if (!Mongoose.Types.ObjectId.isValid(id))
    res.status(404).send("No post with that is Found");
  try {
    await user.findByIdAndDelete(id);
    res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
