"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PostFeed from "@/components/PostFeed";
import SearchProfileCard from "@/components/SearchProfileCard";
import { getCategory, getUserData } from "@/utils/DataServices";
import { IUserProfileInfo } from "@/utils/Interfaces";
import React, { useEffect, useState } from "react";

const SearchProfile = () => {
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [data, setData] = useState<IUserProfileInfo>({
    id: 0,
    username: "",
    salt: "",
    hash: "",
    accountType: "",
    date: "",
    name: "",
    rating: 0,
    ratingCount: [],
    followers: [],
    following: [],
    likes: [],
    securityQuestion: "",
    securityAnswer: "",
    bio: "",
    email: "",
    shopName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    pfp: "#",
    isDeleted: false
  });

  useEffect(() => {

    const getData = async (name: string) => {
        
      setData(await getUserData(name))
    //   console.log(await getProfileUserData(name) as INewUser)
    };
    getData(getCategory())
     
  }, [searchActive]);
  return (
        <div>
        <Navbar setSearchActive={setSearchActive}/>
        <div className="flex min-h-screen flex-col gap-2 font-[NeueMontreal-Medium] mx-5">
          <SearchProfileCard {...data} />
          <PostFeed {...data}/>
  
        </div>
        <Footer/>
      </div>
  );
};

export default SearchProfile;
