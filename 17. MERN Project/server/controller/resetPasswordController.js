import user from '../models/userModel.js';
import {v4 as uuidv4} from 'uuid';
import resetPasswordModel from "../models/resetPasswordModel.js";
import resetPassword_mailer from "../mailer/forgetPassword_mailer.js";



// @purpose: Verify the email of the user and generate token to reset Password
// @route:   POST reset/email-verify
export const emailVerification = async (req, res, next) => {
    const { email } = req.body;
    try {
      const User = await user.findOne({ email: email });
      const accessToken = uuidv4();
      const resetPassword = new resetPasswordModel({
        username: User._id,
        accessToken: accessToken,
        isValid: true,
        
      });
  
      await resetPassword.save();
  
      const resetPasswordReq = await resetPasswordModel
        .findOne({username: User._id })
        .populate("username");
      console.log(resetPasswordReq.username.email);
      // Sending Mail
       resetPassword_mailer(resetPasswordReq);
  
      res.json({ accessToken: resetPassword.accessToken });
    } catch (error) {
      res.status(404);
      next(error);
    }
  };


// @purpose: Reset Password using Token
// @route:   POST reset/password/:token
  export const passwordReset = async (req, res, next) => {
    const { password } = req.body;
    try {
      const resetPasswordToken = await resetPasswordModel.findOne({
        accessToken: req.params.token,
      });
      console.log(resetPasswordToken);
      if (resetPasswordToken.isValid) {
        const User = await (
          await user.findOne({ _id: resetPasswordToken.username })
        ).populate("username");
        if (User) {
          if (User) {
            User.password = password;
            User.save();
  
            // delete reset password token
            const resetPasswordInvalid = await resetPasswordModel.findOneAndUpdate(
              {
                accessToken: req.params.token,
              },
              { isValid: false },
              { new: true }
            );
  
            res.status(200);
            res.json({
              message: `${user.name} Password Reset successfully`,
              resetPasswordToken: resetPasswordInvalid,
            });
          } else {
            res.status(404);
            const err = new Error("Password cannot be same");
            next(err);
          }
        } else {
          res.status(404);
          const err = new Error("User not Found");
          next(err);
        }
      } else {
        res.status(404);
        const err = new Error("Token expired");
        next(err);
      }
    } catch (error) {
      res.status(404);
      next(error);
    }
  };  