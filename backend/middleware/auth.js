import jwt from "jsonwebtoken";
import process from "process";

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ message: "No authentication token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    // Changed from err to error and using it in the message
    res.status(401).json({
      message: "Token is not valid",
      error: error.message,
    });
  }
};

export default auth;
