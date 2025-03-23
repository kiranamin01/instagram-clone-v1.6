import React from "react";
import Post from "./Post/Post.jsx";

import { postsData } from "../../../data/postsData";

const Feed = () => {
  return (
    <section className="insta_feed pb-16 fixed top-[12rem] left-0 right-0 max-w-[468px] mx-auto h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide bg-[#FAFAFA] dark:bg-[#121212] dark:text-white">
      {postsData.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </section>
  );
};

export default Feed;
