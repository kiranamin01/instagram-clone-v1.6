import { hashtag } from "../../../data/hashtagData";
import { Hash } from "lucide-react";

const TagGrid = () => {
  return (
    <section className="grid grid-cols-1 gap-4 p-4 ">
      {hashtag.map((tags, index) => (
        <div
          key={index}
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <Hash className="dark:text-white border border-gray-500 rounded-full p-1.5 min-w-[38px] min-h-[38px]" />
          <div className="">
            <h3 className="font-semibold text-sm dark:text-white">
              {tags.tag}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {tags.posts} Posts
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TagGrid;
