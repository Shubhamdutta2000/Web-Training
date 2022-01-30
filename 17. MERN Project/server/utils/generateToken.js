import jwt from "jsonwebtoken";

export const generateToken = (id) => {
  return jwt.sign({ _id: id }, "ThisIsSecret", {
    expiresIn: '1y'   });
};



