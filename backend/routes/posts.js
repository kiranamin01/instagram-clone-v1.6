import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all posts");
});

router.post("/", (req, res) => {
  res.send("Create new post");
});

export default router;
