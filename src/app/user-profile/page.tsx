"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import UserProfileCard from "@/components/UserProfileCard";
import { IUserProfileInfo } from "@/utils/Interfaces";
import PostFeed from "@/components/PostFeed";
import Footer from "@/components/Footer";

const UserProfile = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [accountData, setAccountData] = useState<IUserProfileInfo>({
    id: 0,
    username: "",
    salt: "",
    hash: "",
    date: "",
    accountType: "",
    name: "",
    rating: 0,
    ratingCount: [""],
    followers: [""],
    following: [""],
    likes: [""],
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

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      sessionStorage.getItem("AccountInfo")
    ) {
      setAccountData(JSON.parse(sessionStorage.getItem("AccountInfo") || "{}"));
    }
  }, [searchActive]);

  // console.log(accountData);
  console.log(searchActive);

  // const router = useRouter();

  // account checking
  // if(!checkFToken) router.push("/login")

  return (
    <div>
      <Navbar setSearchActive={setSearchActive} />
      <div className="flex min-h-screen flex-col gap-2 font-[NeueMontreal-Medium] mx-5">
        <UserProfileCard {...accountData} />
        <PostFeed {...accountData} />
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
