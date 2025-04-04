"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import UserProfileCard from "@/components/UserProfileCard";
import { Button } from "@/components/ui/button";
import { IUserProfileInfo } from "@/utils/Interfaces";
import PostCard from "@/components/PostCard";

const UserProfile = () => {
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Most Recent");
  const [searchActive, setSearchActive] = useState(false);
  console.log(searchActive);
  // account checking
  // if(!checkToken) router.push("/login")
 
  const accountData: IUserProfileInfo = (() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("AccountInfo")) {
      return JSON.parse(sessionStorage.getItem("AccountInfo") || "{}");
    }
    return {}
  })();

  const toggleDropDown = () => {
    setDropDownOpen(!isDropDownOpen);
  };

  const selectFilter = (question: string) => {
    setSelectedFilter(question);
    setDropDownOpen(false);
  };

  return (
    <div>
      <Navbar setSearchActive={setSearchActive}/>
      <div className="flex min-h-screen flex-col gap-2 font-[NeueMontreal-Medium] mx-5">
        <UserProfileCard {...accountData} />
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
        {/* div when the user has no posts */}
        <div className="bg-[#F5F5F5] flex justify-center place-items-center h-24 mb-8">
            <h3>Click the + above to create your first post!</h3>
        </div>

        <div className="hidden">
        {/* div when the user has posts */}
        <div className="grid grid-cols-3 gap-3">
          <PostCard/>
          <PostCard/>
          <PostCard/>
        </div>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;
