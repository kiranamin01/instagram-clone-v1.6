import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  res.send("Create comment");
});

router.delete("/:id", (req, res) => {
  res.send("Delete comment");
});

export default router;
