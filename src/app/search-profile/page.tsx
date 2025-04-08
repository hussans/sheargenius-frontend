"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PostFeed from "@/components/PostFeed";
import SearchProfileCard from "@/components/SearchProfileCard";
import { getCategory, getProfileUserData } from "@/utils/DataServices";
import { INewUser } from "@/utils/Interfaces";
import React, { useEffect, useState } from "react";

const SearchProfile = () => {
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [data, setData] = useState<INewUser>({
    id: 0,
    username: "",
    password: "",
    accountType: "",
    date: "",
    name: "",
    rating: 0,
    ratingCount: 0,
    followers: [],
    following: [],
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
    pfp: "#",
    isDeleted: false
  })

  useEffect(() => {

    const getData = async (name: string) => {
        
      setData(await getProfileUserData(name) as INewUser)
    //   console.log(await getProfileUserData(name) as INewUser)
    };
    getData(getCategory())
     
  }, [searchActive]);
  return (
        <div>
        <Navbar setSearchActive={setSearchActive}/>
        <div className="flex min-h-screen flex-col gap-2 font-[NeueMontreal-Medium] mx-5">
          <SearchProfileCard {...data} />
          <PostFeed/>
  
        </div>
        <Footer/>
      </div>
  );
};

export default SearchProfile;
