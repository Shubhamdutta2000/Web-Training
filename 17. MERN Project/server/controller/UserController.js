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
    res.json({
      error: {
        message: error.message,
      },
    });
  }

  // Method 1 (for hashing password)
  // bcrypt.hash(password, 4, function (err, hash) {
  // // Store hash in your password DB.
  //   const User = await user.create({
  //     username,
  //     email,
  //     password,
  //   });
  // });

  const User = await user.create({
    username,
    email,
    password,
  });
  if (User) {
    res.json({
      _id: User._id,
      name: User.username,
    });
  } else {
    res.status(404);
    const err = new Error("Invalid User Data");
    res.json({
      error: {
        message: error.message,
      },
    });
  }
};

// @purpose: Auth user and get token
// @route: user/login
// @access Public
export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const User = await user.findOne({ email: email });

  // Method 1 (for hecking hashed password with plain text password)
  // if (User) {
  //   bcrypt.compare(password, User.password, function (err, result) {
  //     // result == false
  //     res.json({
  //       _id: User._id,
  //       name: User.username,
  //       email: User.email,
  //       token: generateToken(User._id),
  //     });
  //   });
  // } else {
  //   res.status(401);
  //   const err = new Error("Invalid email or password");
  //   next(err);
  // }

  if (User && User.checkPassword(password)) {
    res.json({
      _id: User._id,
      name: User.username,
      email: User.email,
      token: generateToken(User._id),
    });
  } else {
    res.status(401);
    const err = new Error("Invalid email or password");
    res.json({
      error: {
        message: error.message,
      },
    });
  }
};

// @purpose: get user
// @route: user/
export const getUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @purpose: Delete user
// @route: user/delete/:id
export const deleteUser = async (req, res) => {
  const { id: id } = req.params;
  console.log(req.params);
  if (!Mongoose.Types.ObjectId.isValid(id))
    res.status(404).send("Invalid ObjectID");
  try {
    await user.findByIdAndDelete(id);
    res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
