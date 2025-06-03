import express from "express";
import {
  createPost,
  getPosts,
  toggleLike,
  addComment,
  deletePost,
} from "../controllers/posts.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

// Get all posts
router.get("/", auth, getPosts);

// Create a new post
router.post("/", auth, createPost);

// Like/Unlike a post
router.put("/:id/like", auth, toggleLike);

// Add comment to a post
router.post("/:id/comment", auth, addComment);

// Delete a post
router.delete("/:id", auth, deletePost);

export default router;
