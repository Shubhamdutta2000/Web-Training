import mongoose from "mongoose";

const resetPasswordSchema = mongoose.Schema({
  username: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  accessToken: {
    type: String,
  },
  isValid: {
    type: Boolean,
    default: false,
  },
});

const resetPassword = mongoose.model("ResetPassword", resetPasswordSchema);

export default resetPassword;
