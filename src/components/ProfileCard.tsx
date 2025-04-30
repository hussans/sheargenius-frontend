import {
  checkToken,
  getPostItemsByUserId,
  setCategory,
} from "@/utils/DataServices";
import { IPostItems, IUserProfileInfo } from "@/utils/Interfaces";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const ProfileCard = (data: IUserProfileInfo) => {
  const router = useRouter();
  // const[rating] = useState<number>(data.rating/data.ratingCount.length)
  const [rating] = useState<number>(data.rating);
  const [picSRCs, setPicSRCs] = useState<string[]>([]);

  useEffect(() => {
    const previewPosts = async () => {
      const posts = await getPostItemsByUserId(data.id);
      const srcs: string[] = [];
      posts.map((post: IPostItems) => {
        srcs.push(post.image);
      });
      setPicSRCs(srcs);
    };
    previewPosts();
  }, [rating]);

  const gotoProfile = (barber: string) => {
    if (!checkToken()) {
      router.push("/login");
    } else {
      setCategory(barber);
      router.push("/user-profile");
    }
  };
  
  return (
    <div className="bg-[#F5F5F5] w-full h-[440px] rounded-xl px-8 py-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-row gap-3 items-center">
          <Image
            className="bg-white rounded-full w-[75px] h-[75px] text-xs flex justify-center items-center text-center"
            width={100}
            height={100}
            src={data.pfp}
            alt={`${data.username}'s profile pic`}
          />

          <div className="mt-3">
            <p className="font-[NeueMontreal-Medium] text-xl">
              {data.username}
            </p>
            <p className="font-[NeueMontreal-Medium] text-sm text-[#949DA4]">
              {data.city}, {data.state}
            </p>
          </div>
        </div>
        <div className="flex gap-1">
          <p className="text-xl">{rating}</p>
        </div>
      </div>
      <hr className="my-10" />
      <div className="grid grid-cols-3 gap-1">
        {picSRCs.length > 0 ? (
          picSRCs.map((pic: string, idx: number) => (
            <div key={idx} className="bg-white rounded-sm w-full h-[130px]">
              <Image
                src={pic}
                alt={`Preview ${idx + 1}`}
                width={130}
                height={130}
                className="object-cover w-full h-full rounded-sm"
              />
            </div>
          ))
        ) : (
          <div>
            <div className="bg-white rounded-sm w-[full] h-[130px]"></div>
            <div className="bg-white rounded-sm w-[full] h-[130px]"></div>
            <div className="bg-white rounded-sm w-[full] h-[130px]"></div>
          </div>
        )}
      </div>
      <div className="mt-5">
        <button
          className="bg-black w-full text-white font-[NeueMontreal-Medium] py-5 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75"
          onClick={() => gotoProfile(data.username)}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
