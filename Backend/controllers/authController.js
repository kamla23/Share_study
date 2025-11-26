import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const signup = async (req, res) => {
  const { email, pass } = req.body;
  if (!pass) {
    return res.status(400).json({ msg: "Password field (pass) is missing in request body." });
  }

  const check = await User.findOne({ email });
  if (check) return res.json({ msg: "User exists" });
  try {
    const hash = await bcrypt.hash(pass, 10);

    const user = await User.create({ email, pass: hash });

    res.json({ msg: "Signup ok", user });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "An error occurred during signup." });
  }
};

export const login = async (req, res) => {
  const { email, pass } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.json({ msg: "No user" });

  const ok = await bcrypt.compare(pass, user.pass);
  if (!ok) return res.json({ msg: "Wrong pass" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);

  res.json({ msg: "Login ok", token });
};
