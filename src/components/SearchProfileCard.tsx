import { IUserProfileInfo } from "@/utils/Interfaces";
import React from "react";

const SearchProfileCard = (data: IUserProfileInfo) => {
  return (
    <div className="flex gap-2 bg-[#F5F5F5] rounded-b-sm p-5">
      <div className="w-[60%] sm:w-[70%] flex flex-col sm:gap-2 gap-5">
        <div className="flex sm:gap-7 gap-3 h-[125px]">
          <img
            src={data.pfp}
            alt={`${data.username} profile pic`}
            className="sm:w-28 sm:h-28 h-16 w-16 rounded-[50%]"
          />
          <div className="flex flex-col sm:gap-1">
            <h4 className="text-slate-500 sm:text-sm text-xs">
              Joined: {data.date}
            </h4>
            <div className="flex gap-3 place-items-center">
              <h2 className="sm:text-3xl text-xl h-fit">{data.username}</h2>
              <h3 className="sm:text-base text-xs text-slate-400">
                {data.accountType}
              </h3>
              <div
                className={
                  data.accountType == "Barber" ? "flex gap-1" : "hidden"
                }
              >
                <img
                  className="w-[15px] h-[15px] hover:drop-shadow-xl"
                  src="./icons/star-empty.png"
                  alt="Star Icon"
                />
                <img
                  className="w-[15px] h-[15px]"
                  src="./icons/star-empty.png"
                  alt="Star Icon"
                />
                <img
                  className="w-[15px] h-[15px]"
                  src="./icons/star-empty.png"
                  alt="Star Icon"
                />
                <img
                  className="w-[15px] h-[15px]"
                  src="./icons/star-empty.png"
                  alt="Star Icon"
                />
                <img
                  className="w-[15px] h-[15px]"
                  src="./icons/star-empty.png"
                  alt="Empty Star Icon"
                />
              </div>
            </div>
            <h2>{data.name}</h2>
            <div className="sm:text-base text-xs flex sm:gap-12 gap-2">
              <h3>{data.followers.length} Followers</h3>
              <h3>{data.following.length} Followers</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-white p-2 rounded-sm w-full h-[150px]">
          <h3>Bio</h3>
          <h3>{data.bio}</h3>
        </div>
      </div>
      <div className="w-[40%] sm:w-[30%] flex flex-col sm:gap-2 gap-5">
        <div className=" flex flex-col gap-1 h-[125px] place-content-end">
          <button className="bg-black w-full text-white font-[NeueMontreal-Regular] py-1 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75">
            Schedule
          </button>

          <button className="bg-blue-500 w-full text-white font-[NeueMontreal-Regular] py-1 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75">
            Follow
          </button>
          
          <button className="bg-red-600 w-full text-white font-[NeueMontreal-Regular] py-1 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75">
            Rate
          </button>
        </div>
        <div
          className={
            data.accountType == "Barber"
              ? "flex flex-col bg-white p-2 rounded-sm w-full h-[150px]"
              : "hidden"
          }
        >
          <h3>Location</h3>
          <h2 className="text-lg">{data.shopName}</h2>
          <h2>{data.address}</h2>
          <div className="flex gap-1">
            <h2>{data.city},</h2>
            <h2>{data.state}</h2>
          </div>
          <h2>{data.zip}</h2>
        </div>
      </div>
    </div>
  );
};

export default SearchProfileCard;
