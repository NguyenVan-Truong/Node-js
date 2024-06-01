import User from "../models/User.js";
import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";
class authcontroller {
  async login(req, res) {
    try {
      //them du lieu
      const user = await User.findOne({
        email: req.body.email,
      });
      //Sinh mã token = jwt.sign
      const match = await bcrypt.compare(req.body.password, user.password);

      if (match) {
        const token = jwt.sign({ user: user }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.status(201).json(token);
      }
      req.status(400).json("Email or Password incorrect");
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async register(req, res) {
    try {
      const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS));
      const hash = bcrypt.hashSync(req.body.password, salt);
      const data = {
        email: req.body.email,
        password: hash,
      };
      //them du lieu
      const user = await User.create(data);
      //Sinh mã token = jwt.sign

      const token = jwt.sign({ user: user }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json(token);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
export default authcontroller;
