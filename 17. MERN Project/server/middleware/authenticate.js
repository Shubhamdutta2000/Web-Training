import jwt from "jsonwebtoken";
import user from "../models/userModel.js";

const authMiddleware = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      let decodedId;
      console.log(token);
      let decoded = await jwt.verify(token, "ThisIsSecret");
      decodedId = decoded._id;

      // store Auth (- password) to req.user
      req.user = await user.findById(decodedId).select("-password");
      console.log(req.user);
      next();
    } catch (error) {
      if (error.name === "JsonWebTokenError") {
        res.status(404);
        res.json({
          error: {
            message: error.message,
          },
        });
      } else if (error.name == "TokenExpiredError") {
        // token expired
        res.status(404);
        res.json({
          error: {
            message: error.message,
          },
        });
      } else {
        res.status(404);
        res.json({
          error: {
            message: error.message,
          },
        });
      }
    }
  } else {
    res.status(401);
    const error = new Error("Not Authorized, No token is present");
    res.json({
      error: {
        message: error.message,
      },
    });
  }
};

export default authMiddleware;
