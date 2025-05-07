import {
  checkToken,
  getPostItemsByUserId,
} from "@/utils/DataServices";
import { IPostItems, IUserProfileInfo } from "@/utils/Interfaces";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";

const ProfileCard = (data: IUserProfileInfo) => {
  const router = useRouter();
  // const[rating] = useState<number>(data.rating/data.ratingCount.length)
  const [rating, setRating] = useState<number>(data.rating);
  const [picSRCs, setPicSRCs] = useState<string[]>([]);

  useEffect(() => {
    const previewPosts = async () => {
      if (data && data.id) {
          const posts = await getPostItemsByUserId(data.id);
          const srcs: string[] = [];
          posts.map((post: IPostItems) => {
            srcs.push(post.image);
          });
          setPicSRCs(srcs.slice(0, 3));
      }
    };
    previewPosts();
    const division_result = data.rating / data.ratingCount.length;
    setRating(Math.round(division_result * 10) / 10);
  }, [data.id, data.rating, data.ratingCount.length]);

  const renderStars = (averageRating: number | null | undefined) => {
    const validRating = typeof averageRating === 'number' ? averageRating : 0;
    const roundedRating = Math.round(validRating);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          className="w-[15px] h-[15px]"
          src={i <= roundedRating ? "/icons/star.png" : "/icons/star-empty.png"}
          alt={i <= roundedRating ? "Filled Star" : "Empty Star"}
        />
      );
    }
    return <div className="flex items-center gap-1">{stars}</div>; 
  };

  const gotoProfile = (username: string) => {
    if (!checkToken()) {
      redirect("/login");
    } else {
      // setCategory(barber);
      const queryParams = new URLSearchParams({
        u: username,
      }).toString();
      router.push(`/user-profile?${queryParams}`);
    }
  };

  return (
    <div className="bg-[#F5F5F5] w-full h-[440px] rounded-xl px-8 py-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-row gap-3 items-center">
          <Image
            className="bg-white rounded-full w-[75px] h-[75px] text-xs flex justify-center items-center text-center object-cover"
            width={100}
            height={100}
            src={data.pfp || '/placeholder-pfp.png'}
            alt={`${data.username || 'User'}'s profile pic`}
          />
          <div className="mt-3">
            <p className="font-[NeueMontreal-Medium] text-xl">
              {data.username || 'Username'}
            </p>
            <p className="font-[NeueMontreal-Medium] text-sm text-[#949DA4]">
              {(data.city && data.state) ? `${data.city}, ${data.state}` : ''}
            </p>
          </div>
        </div>

        <div className="flex gap-1">
           {renderStars(rating)}

        </div>
      </div>
      <hr className="my-10" />
      <div className="flex flex-row justify-between gap-1">
      {picSRCs.length > 0 ? 
        picSRCs.map((pic: string, idx: number) => (
          (
            <div key={idx} className="bg-white rounded-sm w-full aspect-square">
              <Image
                src={pic || '/placeholder-image.png'}
                alt={`Preview ${idx + 1}`}
                width={130}
                height={130}
                className="object-cover w-full h-full rounded-sm"
              />
            
          </div>)
        )) : 
          (
            <h3 className="flex justify-center text-center bg-gray-200 rounded-sm w-full h-[130px] mr-1">No posts yet...</h3>


        
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