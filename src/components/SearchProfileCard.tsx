import {
  checkToken,
  fetchInfo,
  getToken,
  toggleFollowers,
} from "@/utils/DataServices";
import { IUserProfileInfo } from "@/utils/Interfaces";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import RatingComponent from "./RatingComponent";

const SearchProfileCard = (data: IUserProfileInfo) => {
  const [profileData, setProfileData] = useState<IUserProfileInfo>(data);
  const [rate, setRate] = useState<boolean>(false);
  const [rateName] = useState<string>(profileData.username);
  const[rating,setRating] = useState<string>(String(data.rating/data.ratingCount.length))
  const router = useRouter();

  
  useEffect(() => {
    setProfileData(data)
    setRating(String(Number(rating).toFixed(1)))
  },[router,data])


  const follow = async () => {
    if (!checkToken()) {
      router.push("/login");
      return;
    } else {
      await toggleFollowers(
        fetchInfo().username,
        profileData.username,
        getToken()
      );
      window.location.reload();
    }
  };

  return (
    <div className="flex gap-2 bg-[#F5F5F5] rounded-b-sm p-5">
      <div className="w-[60%] sm:w-[70%] flex flex-col sm:gap-2 gap-5">
        <div className="flex sm:gap-7 gap-3 h-[125px]">
          <img
            src={profileData.pfp}
            alt={`${profileData.username} profile pic`}
            className="sm:w-28 sm:h-28 h-16 w-16 rounded-[50%]"
          />
          <div className="flex flex-col sm:gap-1">
            <h4 className="text-slate-500 sm:text-sm text-xs">
              Joined: {profileData.date}
            </h4>
            <div className="flex gap-3 place-items-center">
              <h2 className="sm:text-3xl text-xl h-fit">
                {profileData.username}
              </h2>
              <h3 className="sm:text-base text-xs text-slate-400">
                {profileData.accountType}
              </h3>
              <div
                className={
                  profileData.accountType == "Barber" ? "flex gap-1" : "hidden"
                }
              >
                <p>{rating}</p>
                <img
                  className="w-[15px] h-[15px] hover:drop-shadow-xl"
                  src="./icons/star.png"
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
            <h2>{profileData.name}</h2>
            <div className="sm:text-base text-xs flex sm:gap-12 gap-2">
              <h3>
                {profileData.followers.length}{" "}
                {profileData.followers.length == 1 ? "Follower" : "Followers"}
              </h3>
              <h3>{profileData.following.length} Following</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-white p-2 rounded-sm w-full h-[150px]">
          <h3>Bio</h3>
          <h3>{profileData.bio}</h3>
        </div>
      </div>
      <div className="w-[40%] sm:w-[30%] flex flex-col sm:gap-2 gap-5">
        <div className=" flex flex-col gap-1 h-[125px] place-content-end">
          <button className="bg-black w-full text-white font-[NeueMontreal-Regular] py-1 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75">
            Schedule
          </button>

          <button
            className="bg-blue-500 w-full text-white font-[NeueMontreal-Regular] py-1 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75"
            onClick={follow}
          >
            {profileData.followers.includes(fetchInfo().username) ? "Unfollow":"Follow"}
          </button>

          <button className="bg-red-600 w-full text-white font-[NeueMontreal-Regular] py-1 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75" onClick={() => setRate(!rate)}>
            Rate
          </button>
          {rate && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-[#f5f5f596] flex justify-center place-items-center z-50">
          <div className="w-[50%] bg-white p-2 rounded-sm relative">
            <h3
              className="text-slate-600 hover:text-black cursor-pointer absolute top-2 left-3 text-2xl"
              onClick={() => setRate(false)}
            >
              X
            </h3>
            <RatingComponent name={rateName}/>
          </div>
        </div>
      )}
        </div>
        <div
          className={
            profileData.accountType == "Barber"
              ? "flex flex-col bg-white p-2 rounded-sm w-full h-[150px]"
              : "hidden"
          }
        >
          <h3>Location</h3>
          <h2 className="text-lg">{profileData.shopName}</h2>
          <h2>{profileData.address}</h2>
          <div className="flex gap-1">
            <h2>{profileData.city},</h2>
            <h2>{profileData.state}</h2>
          </div>
          <h2>{profileData.zip}</h2>
        </div>
      </div>
    </div>
  );
};

export default SearchProfileCard;
