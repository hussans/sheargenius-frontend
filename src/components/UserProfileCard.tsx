import { loggedInData } from "@/utils/DataServices";
import { IUserProfileInfo } from "@/utils/Interfaces";
import React, { useEffect } from "react";

const UserProfileCard = (data:IUserProfileInfo) => {
  // const data = loggedInData();

  // useEffect(() => {
  //   console.log(data);
  // }, []);

  return (
    <div>
      <section className="font-[NeueMontreal-Medium]">
        <div className="flex gap-2 bg-[#F5F5F5] rounded-b-sm p-5">
          <div className="w-[70%] flex flex-col gap-2">
            <div className="flex gap-7 h-[125px]">
              <img
                src={data.pfp}
                alt={`${data.username} profile pic`}
                className="w-28 h-28"
              />
              <div className="flex flex-col gap-3">
                <h4 className="text-slate-500 text-sm">Joined: {data.date}</h4>
                <div className="flex gap-5">
                  <h2 className="text-3xl">{data.username}</h2>
                  <div
                    className={
                      data.accountType == "Barber" ? "flex gap-1" : "hidden"
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
                  <h3>{data.followerCount} Followers</h3>
                  <h3>{data.followingCount} Followers</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-white p-2 rounded-sm w-full h-[150px]">
              <h3>Bio</h3>
              <h3>{data.bio}</h3>
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
            <div
              className={
                data.accountType == "Barber"
                  ? "flex flex-col gap-2 bg-white p-2 rounded-sm w-full h-[150px]"
                  : "hidden"
              }
            >
              <h3>Location</h3>
              <h2>{data.shopName}</h2>
              <h2>{data.address}</h2>
              <div className="flex gap-2">
                <h2>{data.city},</h2>
                <h2>{data.state}</h2>
                <h2>{data.zip}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfileCard;
