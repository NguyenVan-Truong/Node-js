import jwt from "jsonwebtoken";
export function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  // console.log(bearerHeader);
  if (bearerHeader != undefined) {
    const token = bearerHeader.split(" ")[1];
    try {
      jwt.verify(token, process.env.JWT_SECRET);
      return next();
    } catch (error) {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
}
