import { checkToken, getUserData } from "@/utils/DataServices";
import { ICommentInfo, IPostItems, IUserProfileInfo } from "@/utils/Interfaces";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const FocusPostComponent = (data: IPostItems) => {
  const [userData, setUserData] = useState<IUserProfileInfo>({
    id: 0,
    username: "",
    salt: "",
    hash: "",
    date: "",
    accountType: "",
    name: "",
    rating: 0,
    ratingCount: 0,
    followers: [""],
    following: [""],
    followerCount: 0,
    followingCount: 0,
    securityQuestion: "",
    securityAnswer: "",
    bio: "",
    email: "",
    shopName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    pfp: "",
    isDeleted: false,
  });
  const [username] = useState<string>(data.publisherName);
  const [commentText, setCommentText] = useState<string>("");
   const router = useRouter();

  useEffect(() => {
    const fetchProfileData = async (username: string) => {
      setUserData(await getUserData(username));
    };
    fetchProfileData(username);
  }, [username]);

  const addComment = async() => {
    if(!checkToken()){router.push("/login")}
    else{
      const commentToAdd:ICommentInfo = {
        id: data.userId,
        username: data.publisherName,
        comment: commentText
      }
      console.log(commentToAdd)
    }
  }

  const viewMore = async() => {
    localStorage.setItem("Category", data.category);
    router.push("/directory");
  }

  return (
    <div>
      <h2 className="text-center text-2xl">Post</h2>
      <div className="flex place-items-center p-2">
        <div className="flex gap-2 w-full">
          <div className="w-[50%]">
            <div className="flex p-3 w-full gap-2 bg-[#f5f5f5]">
              <Image
                width={100}
                height={100}
                src={userData.pfp != "" ? userData.pfp : "/nofileselected.png"}
                className="w-6 rounded-full h-6"
                alt={`${data.publisherName}'s profile pic`}
              />

              <h2>{data.publisherName}</h2>
            </div>
            <Image
              width={100}
              height={100}
              src={data.image}
              className="w-full"
              alt={`${data.publisherName}'s post no.${data.id}`}
            />
            <div className="flex flex-col p-3 w-full gap-1 bg-[#f5f5f5]">
              <div className="flex flex-row gap-5">
                <div className="flex flex-row gap-2">
                  <button>
                    <img
                      className="w-[25px]"
                      src="./icons/heart.png"
                      alt="Heart Like Button Icon"
                    />
                  </button>
                  <p className="font-[NeueMontreal-Medium] text-lg">
                    {data.likes}
                  </p>
                </div>
                <div className="flex flex-row gap-2">
                  <img
                    className="w-[25px] h-[25px]"
                    src="./icons/beacon.png"
                    alt="Beacon Comment Icon"
                  />
                  <p className="font-[NeueMontreal-Medium] text-lg">
                    {data.comments != null ? data.comments.length : "0"}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <b>{data.publisherName}</b>
                <h3>{data.caption}</h3>
              </div>
              <h3>{`category: ${data.category}`}</h3>
            </div>

            <button onClick={viewMore} className="bg-black w-full text-white font-[NeueMontreal-Regular] py-1 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75">
              View More Posts Like This
            </button>
          </div>
          <div className="bg-[#f5f5f5] p-2 flex flex-col gap-2 w-[50%]">
            <h1 className="text-center">Comments</h1>
            <div className="flex gap-1">
              <input
                type="text"
                placeholder="Add a comment"
                className="rounded-md bg-white text-sm p-1 w-full"
                maxLength={70}
                onChange={(e) => (setCommentText(e.target.value))}
              />
              <div className="rounded-full w-8 h-8 flex justify-center place-items-center cursor-pointer">
             <button onClick={addComment}>

                <Image
                  width={100}
                  height={100}
                  alt="comment icon"
                  src="/icons/beacon.png"
                  className="h-[25px] w-[25px]  p-1"
                  />
                  </button>
              </div>
            </div>
            <hr />
            {data.comments != null ? (
              data.comments.map((comment, idx) => (
                <div key={idx} className="flex gap-2">
                  <h3>{comment.username}</h3>
                  <h3>{comment.comment}</h3>
                </div>
              ))
            ) : (
              <div className="text-center text-slate-400">no comments yet</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusPostComponent;
