import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { Button } from "./ui/button";
import { IPostItems, IUserProfileInfo } from "@/utils/Interfaces";
import { getAllPosts } from "@/utils/DataServices";

const PostFeed = (data: IUserProfileInfo) => {
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Most Recent");
  const [posts, setPosts] = useState<IPostItems[]>([]);
  useEffect(() => {
    const asyncGetPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(
        allPosts.filter(
          (post: IPostItems) => post.publisherName == data.username
        )
      );
    };
    asyncGetPosts();
  }, [isDropDownOpen]);
  const toggleDropDown = () => {
    setDropDownOpen(!isDropDownOpen);
  };

  const selectFilter = (question: string) => {
    setSelectedFilter(question);
    setDropDownOpen(false);
  };
  return (
    <div>
      {" "}
      <div className="flex justify-between mt-12 mb-4 place-items-center">
        <div className="flex gap-8">
          <Button className="shadow-none rounded-[2px] bg-transparent text-block h-fit p-0 px-1 hover:text-white hover:bg-black">
            <h3 className="text-lg">Posts</h3>
          </Button>
          <Button className="shadow-none rounded-[2px] bg-transparent text-block h-fit p-0 px-1 hover:text-white hover:bg-black">
            <h3 className="text-lg">Likes</h3>
          </Button>
        </div>
        <div className="flex gap-2 place-items-center">
          <h3>Sort by:</h3>
          <div className="flex flex-col mt-1">
            <div className="flex flex-col">
              <div className="relative">
                <div
                  onClick={toggleDropDown}
                  className="bg-[#f5f5f5] flex justify-between items-center rounded-md px-4 py-2 cursor-pointer"
                >
                  {selectedFilter}
                  <img
                    className={`w-[25px] m-0 p-0 transition-transform duration-500 ${
                      isDropDownOpen ? "rotate-180" : "rotate-0"
                    }`}
                    src="./icons/dropdown.png"
                    alt="Drop Down Icon"
                  />
                </div>
                {isDropDownOpen && (
                  <div
                    className={`rounded-md border-gray-300 bg-white p-3 absolute top-[45px] w-[100%] shadow-md transition-all duration-700 ${
                      isDropDownOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    <div
                      onClick={() => selectFilter("Top Rated")}
                      className="cursor-pointer hover:bg-gray-100 p-1 rounded-sm"
                    >
                      Top Rated
                    </div>
                    <div
                      onClick={() => selectFilter("Category: A-Z")}
                      className="cursor-pointer hover:bg-gray-100 p-1 rounded-sm"
                    >
                      Category: A-Z
                    </div>
                    <div
                      onClick={() => selectFilter("Category: Z-A")}
                      className="cursor-pointer hover:bg-gray-100 p-1 rounded-sm"
                    >
                      Category: Z-A
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {posts.length == 0 ? (
        <div className="bg-[#F5F5F5] flex justify-center place-items-center h-24 mb-8">
          <h3>Click the + above to create your first post!</h3>
        </div>
      ) : (
        <div className="hidden">
          <div className="grid grid-cols-3 gap-3">
            {posts.map((post, idx) => (
              <div key={idx}>
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostFeed;
