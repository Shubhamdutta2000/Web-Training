import express from "express";
import {
  loginUser,
  registerUser,
  deleteUser,
  getUsers
} from "../controller/UserController.js";
const router = express.Router();



router.get("/", getUsers );

router.delete("/:id", deleteUser )

router.post("/signup", registerUser);


router.post("/login", loginUser);


export default router;