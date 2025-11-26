import jwt from "jsonwebtoken";

const authMid = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    const data = jwt.verify(token, process.env.JWT_KEY);
    req.uid = data.id;
    next();
  } catch {
    res.status(401).json({ msg: "Token wrong" });
  }
};

export default authMid;
