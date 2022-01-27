import jwt from "jsonwebtoken";

export const generateToken = (id) => {
  return jwt.sign({ _id: id }, "Secret", {
    expiresIn: '1y'   });
};



