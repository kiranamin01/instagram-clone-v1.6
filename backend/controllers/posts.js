import Post from "../models/Post.js";

// Create a new post
// Add at the beginning of createPost
export const createPost = async (req, res) => {
  try {
    const { caption, imageUrl, location } = req.body;

    // Input validation
    if (!caption || !imageUrl) {
      return res
        .status(400)
        .json({ message: "Caption and image URL are required" });
    }

    const userId = req.user.id;

    const newPost = new Post({
      userId,
      caption,
      imageUrl,
      location,
    });

    const savedPost = await newPost.save();

    // Populate user details
    const populatedPost = await Post.findById(savedPost._id)
      .populate("userId", "username profileImage")
      .populate("comments.user", "username profileImage");

    res.status(201).json(populatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("userId", "username profileImage")
      .populate("comments.user", "username profileImage")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Like/Unlike a post
export const toggleLike = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const likeIndex = post.likes.indexOf(req.user.id);
    if (likeIndex === -1) {
      post.likes.push(req.user.id);
    } else {
      post.likes.splice(likeIndex, 1);
    }

    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add comment to a post
export const addComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const newComment = {
      user: req.user.id,
      text: req.body.text,
    };

    post.comments.push(newComment);
    await post.save();

    const populatedPost = await Post.findById(post._id)
      .populate("userId", "username profileImage")
      .populate("comments.user", "username profileImage");

    res.status(200).json(populatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a post
// Complete deletePost function
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
