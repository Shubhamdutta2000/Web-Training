import Mongoose from "mongoose";
import Note from "../models/notesModel.js";
import { v4 as uuidv4 } from "uuid";
import user from "../models/userModel.js";

// @route: GET users/notes
//@puropose : get all notes from db for single user
export const getNotes = async (req, res, next) => {
  try {
    const notefetch = await Note.find({ username: req.user._id }).populate(
      "username"
    );
    res.status(200).json(notefetch);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

//@route: POST users/notes
//@purpose: : Post new note by user
export const postNotes = async (req, res, next) => {
  const User = await user.findOne({ _id: req.user._id });
  var { title, body } = req.body;
  console.log(req.body);
  /*
    body.username = req.user._id;
    console.log(req.body);
    */

  const newpost = {
    title: title,
    body: body,
    username: User._id,
  };

  var newNotes = new Note(newpost);
  try {
    await newNotes.save();

    // fetch updated notes of particular notes
    const updatedNotes = await Note.find({ username: req.user._id }).populate(
      "username"
    );
    res.status(201).json(updatedNotes);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// @route: PATCH users/notes/:id
// @purpose: PATCH or update the notes
export const patchNotes = async (req, res) => {
  const { id: id } = req.params;
  const {title, body} = req.body;

  if (!Mongoose.Types.ObjectId.isValid(id))
    res.status(404).send("No post with that is Found");

  // update particular note
  await Note.findByIdAndUpdate(id, {title, body}, {
    new: true,
  });

  // fetch updated notes of particular username
  const updatedNotes = await Note.find({ username: req.user._id }).populate(
    "username"
  );
  res.json(updatedNotes);
};

// @route: DELETE usera/notes/:id
export const deleteNotes = async (req, res) => {
  try {
    const deleteusernote = await Note.deleteOne({
      _id: req.params.id,
    });
    const updatedNotes = await Note.find({ username: req.user._id }).populate("username");
    res.status(200).json(updatedNotes);
  } catch (error) {
    res.status(404);
    next(error);
  }
};
