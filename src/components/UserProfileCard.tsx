import { IUserProfileInfo } from "@/utils/Interfaces";
import React from "react";

const UserProfileCard = (userInfo: IUserProfileInfo) => {
  return (
    <div>
      <section className="mx-5 font-[NeueMontreal-Medium]">
        <div className="flex gap-2 bg-[#F5F5F5] rounded-b-sm p-5">
          <div className="w-[70%] flex flex-col gap-2">
            <div className="flex h-[125px]">
              <img
                src={userInfo.Pfp}
                alt={`${userInfo.Username} profile pic`}
                className="w-12"
              />
              <div className="flex flex-col gap-3">
                <h4 className="text-slate-500">Joined: {userInfo.Date}</h4>
                <div className="flex gap-5">
                  <h2>{userInfo.Username}</h2>
                  <div
                    className={
                      userInfo.AccountType == "Barber" ? "flex gap-1" : "hidden"
                    }
                  >
                    <img
                      className="w-[15px]"
                      src="./icons/star-empty.png"
                      alt="Star Icon"
                    />
                    <img
                      className="w-[15px]"
                      src="./icons/star-empty.png"
                      alt="Star Icon"
                    />
                    <img
                      className="w-[15px]"
                      src="./icons/star-empty.png"
                      alt="Star Icon"
                    />
                    <img
                      className="w-[15px]"
                      src="./icons/star-empty.png"
                      alt="Star Icon"
                    />
                    <img
                      className="w-[15px]"
                      src="./icons/star-empty.png"
                      alt="Empty Star Icon"
                    />
                  </div>
                </div>
                <div className="flex gap-12">
                  <h3>{userInfo.FollowerCount} Followers</h3>
                  <h3>{userInfo.FollowingCount} Followers</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-white p-2 rounded-sm w-full h-[150px]">
              <h3>Bio</h3>
              <h3>{userInfo.Bio}</h3>
            </div>
          </div>
          <div className="w-[30%] flex flex-col gap-2">
            <div className=" flex flex-col gap-1 h-[125px] place-content-end">
              <button className="bg-black w-full text-white font-[NeueMontreal-Regular] py-1 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75">
                User Menu
              </button>
              <button className="bg-black w-full text-white font-[NeueMontreal-Regular] py-1 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75">
                My Schedule
              </button>
            </div>
            <div className="flex flex-col gap-2 bg-white p-2 rounded-sm w-full h-[150px]">
              <h3>Location</h3>
              <h3>{userInfo.Bio}</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfileCard;
