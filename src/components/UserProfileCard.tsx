import { IUserProfileInfo } from "@/utils/Interfaces";
import React from "react";

const UserProfileCard = (userInfo:IUserProfileInfo) => {

  return (
    <div>
      <section className="mx-5">
        <div className="flex bg-[#F5F5F5] rounded-b-sm p-5">
          <div className="w-[2/3]">
            <div className="flex">
              <img src={userInfo.Pfp} alt="icon" className="w-12"/>
              <div className="flex flex-col gap-3">
                <h4 className="text-slate-500">Joined: {userInfo.Date}</h4>
                <div className="flex gap-5">
                <h2>{userInfo.Username}</h2>
                {/* <h3>{userInfo}</h3> */}
                </div>
                <h3>{}</h3>
              </div>
            </div>
          </div>
          <div className="w-[1/3]"></div>
        </div>
      </section>
    </div>
  );
};

export default UserProfileCard;
