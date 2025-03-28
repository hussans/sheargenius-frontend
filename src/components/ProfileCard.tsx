import React from "react";

const ProfileCard = () => {
  return (
    <div className="bg-[#F5F5F5] w-full h-[440px] rounded-xl px-8 py-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-row gap-3 items-center">
          <div className="bg-white rounded-full w-[75px] h-[75px] text-xs flex justify-center items-center text-center">
            <p> Profile Picture </p>
          </div>
          <div className="mt-3">
            <p className="font-[NeueMontreal-Medium] text-xl"> Username </p>
            <p className="font-[NeueMontreal-Medium] text-sm text-[#949DA4]">
              {" "}
              Location, State{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-1">
          <img className="w-[15px]" src="./icons/star.png" alt="Star Icon" />
          <img className="w-[15px]" src="./icons/star.png" alt="Star Icon" />
          <img className="w-[15px]" src="./icons/star.png" alt="Star Icon" />
          <img className="w-[15px]" src="./icons/star.png" alt="Star Icon" />
          <img
            className="w-[15px]"
            src="./icons/star-empty.png"
            alt="Empty Star Icon"
          />
        </div>
      </div>
      <hr className="my-10" />
      <div className="grid grid-cols-3 gap-1">
        <div className="bg-white rounded-sm w-[full] h-[130px]"></div>
        <div className="bg-white rounded-sm w-[full] h-[130px]"></div>
        <div className="bg-white rounded-sm w-[full] h-[130px]"></div>
      </div>
      <div className="mt-5">
        <button className="bg-black w-full text-white font-[NeueMontreal-Medium] py-5 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 transition-all duration-75">
          {" "}
          View Profile{" "}
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
