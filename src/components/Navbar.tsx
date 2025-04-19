"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkToken } from "@/utils/DataServices";
import AddPostComponent from "./AddPostComponent";

interface NavbarProps {
  setSearchActive: (active: boolean) => void;
}

// const categoryTitles = async () => {
//   const response = await fetch("/Haircuts.json");
//   const data = await response.json();
//   console.log(data);
// };

const Navbar = ({ setSearchActive }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [addPost, setAddPost] = useState(false);
  const [activeTab, setActiveTab] = useState<"explore">("explore");
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const router = useRouter();

  const toggleSidebar = () =>
    setIsOpen((prev) => {
      if (prev) {
        setOpenCategory(null);
      }
      return !prev;
    });

  const handleTabClick = (tab: "explore") => {
    setActiveTab(tab);
    if (!isOpen) toggleSidebar();
  };

  const toggleCategory = (category: string) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  const handleSearchClick = () => {
    setSearchActive(true);
    if (isOpen) {
      setIsOpen(false);
      setOpenCategory(null);
    }
  };

  const activeClass = "bg-gray-200 px-1";
  const profileClick = () => {
    if (checkToken()) {
      router.push("user-profile");
    } else {
      router.push("login");
    }
  };

  const addPostClick = () => {
    if (checkToken()) {
      setAddPost(true)
    } else {
      router.push("login");
    }
  };

  useEffect(() => {
    const handleOpenNavbarCategory = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.category) {
        setIsOpen(true);
        setOpenCategory(detail.category);
      }
    };

    window.addEventListener("openNavbarCategory", handleOpenNavbarCategory);
    return () => {
      window.removeEventListener(
        "openNavbarCategory",
        handleOpenNavbarCategory
      );
    };
  }, []);

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 w-full z-10 bg-white text-black text-sm font-[NeueMontreal-Medium] border-b-2">
        <div className="max-w-[100%] mx-auto px-10">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center flex-row">
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <Link href="/">
                  <img
                    className="w-[33px]"
                    src="./icons/sheargenius-logo.svg"
                    alt="ShearGenius Logo"
                  />
                </Link>
                <Link href="/"> SHEARGENIUS </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleTabClick("explore")}
                    className="relative block cursor-pointer z-50"
                  >
                    EXPLORE
                  </button>
                </div>
                <div className="flex items-center gap-6">
                  <button className="cursor-pointer">
                    <img
                      className="relative w-[17px] z-50"
                      src="./icons/plus.png"
                      alt="Plus Icon"
                      onClick={addPostClick}
                    />
                  </button>
                  {addPost && (
                    <div className="fixed top-0 left-0 h-screen w-screen bg-[#f5f5f596] flex justify-center place-items-center">
                      <div className="w-[50%] bg-white p-2 rounded-sm relative">
                        <h3 className="text-slate-600 hover:text-black cursor-pointer absolute top-2 left-3 text-xl" onClick={() => setAddPost(false)}>
                          X
                        </h3>
                        <AddPostComponent/>
                      </div>
                    </div>
                  )}
                  <button
                    className="cursor-pointer"
                    onClick={handleSearchClick}
                  >
                    <img
                      className="relative w-[17px] z-50"
                      src="./icons/search.png"
                      alt="Search Icon"
                    />
                  </button>
                  <button className="cursor-pointer" onClick={profileClick}>
                    <img
                      className="relative w-[17px] z-50"
                      src="./icons/user.png"
                      alt="User Profile Figure Icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-[64px]"></div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full min-h-screen bg-[#FFFFFF80] z-10 flex justify-end">
          <div className="fixed bg-white min-h-full w-[500px] z-20 px-10">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={toggleSidebar}
                className="cursor-pointer hover:bg-gray-200 active:bg-transparent"
              >
                <img
                  className="w-[25px]"
                  src="./icons/cross-small.png"
                  alt="Closing X Button"
                />
              </button>
              <div className="flex font-[NeueMontreal-Medium] text-sm items-center gap-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleTabClick("explore")}
                    className={`relative block cursor-pointer z-50 ${
                      activeTab === "explore" ? activeClass : ""
                    }`}
                  >
                    EXPLORE
                  </button>
                </div>
                <div className="flex items-center gap-6">
                  <button className="cursor-pointer">
                    <img
                      className="relative w-[17px] z-50"
                      src="./icons/plus.png"
                      alt="Plus Icon"
                    />
                  </button>
                  <button
                    className="cursor-pointer"
                    onClick={handleSearchClick}
                  >
                    <img
                      className="relative w-[17px] z-50"
                      src="./icons/search.png"
                      alt="Search Icon"
                    />
                  </button>
                  <button className="cursor-pointer">
                    <img
                      className="relative w-[17px] z-50"
                      src="./icons/user.png"
                      alt="User Profile Figure Icon"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-10 space-y-5">
              <div className="ml-2">
                <button
                  onClick={() => toggleCategory("fades")}
                  className="font-[NeueMontreal-Medium] text-xl flex items-center gap-1 cursor-pointer hover:text-gray-600"
                >
                  FADES
                  <img
                    className="w-[20px]"
                    src={
                      openCategory === "fades"
                        ? "./icons/minus-small.png"
                        : "./icons/plus-small.png"
                    }
                    alt={openCategory === "fades" ? "Minus Icon" : "Plus Icon"}
                  />
                </button>
                {openCategory === "fades" && (
                  <div className="mt-2 ml-8 space-y-1">
                    <Link
                      href="/fades/drop-fade"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Drop Fade
                    </Link>
                    <Link
                      href="/fades/#"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Taper Fade
                    </Link>
                    <Link
                      href="/fades/#"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Burst Fade
                    </Link>
                    <Link
                      href="/fades/#"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Burst Taper Fade
                    </Link>
                    <Link
                      href="/fades/#"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Hard Part Fade
                    </Link>
                    <Link
                      href="/fades/#"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Crop Fade
                    </Link>
                    <Link
                      href="/fades/#"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Pompadour Fade
                    </Link>
                    <Link
                      href="/fades/#"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Undercut Fade
                    </Link>
                    <Link
                      href="/fades/#"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Temp Fade
                    </Link>
                  </div>
                )}
              </div>
              <div className="ml-2">
                <button
                  onClick={() => toggleCategory("skin-fades")}
                  className="font-[NeueMontreal-Medium] text-xl flex items-center gap-1 cursor-pointer hover:text-gray-600"
                >
                  SKIN FADES
                  <img
                    className="w-[20px]"
                    src={
                      openCategory === "skin-fades"
                        ? "./icons/minus-small.png"
                        : "./icons/plus-small.png"
                    }
                    alt={
                      openCategory === "skin-fades" ? "Minus Icon" : "Plus Icon"
                    }
                  />
                </button>
                {openCategory === "skin-fades" && (
                  <div className="mt-2 ml-8 space-y-1">
                    <Link
                      href="/skin-fades/low-skin-fade"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Low Skin Fade
                    </Link>
                    <Link
                      href="/skin-fades/low-skin-fade"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Mid Skin Fade
                    </Link>
                    <Link
                      href="/skin-fades/low-skin-fade"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      High Skin Fade
                    </Link>
                  </div>
                )}
              </div>
              <div className="ml-2">
                <button
                  onClick={() => toggleCategory("styles")}
                  className="font-[NeueMontreal-Medium] text-xl flex items-center gap-1 cursor-pointer hover:text-gray-600"
                >
                  STYLES
                  <img
                    className="w-[20px]"
                    src={
                      openCategory === "styles"
                        ? "./icons/minus-small.png"
                        : "./icons/plus-small.png"
                    }
                    alt={openCategory === "styles" ? "Minus Icon" : "Plus Icon"}
                  />
                </button>
                {openCategory === "styles" && (
                  <div className="mt-2 ml-8 space-y-1">
                    <Link
                      href="/styles/taper-cut"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Taper Cut
                    </Link>
                    <Link
                      href="/styles/taper-cut"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Crew Cut
                    </Link>
                    <Link
                      href="/styles/taper-cut"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Buzz Cut
                    </Link>
                    <Link
                      href="/styles/taper-cut"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Mullet Cut
                    </Link>
                    <Link
                      href="/styles/taper-cut"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Cornrows
                    </Link>
                    <Link
                      href="/styles/taper-cut"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Dreadlocks
                    </Link>
                    <Link
                      href="/styles/taper-cut"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Braids
                    </Link>
                    <Link
                      href="/styles/taper-cut"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Short Layer
                    </Link>
                    <Link
                      href="/styles/taper-cut"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Blowout
                    </Link>
                    <Link
                      href="/styles/taper-cut"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Fringe Cut
                    </Link>
                    <Link
                      href="/styles-more"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      More
                    </Link>
                  </div>
                )}
              </div>
              <div className="ml-2">
                <button
                  onClick={() => toggleCategory("general-knowledge")}
                  className="font-[NeueMontreal-Medium] text-xl flex items-center gap-1 cursor-pointer hover:text-gray-600"
                >
                  GENERAL KNOWLEDGE
                  <img
                    className="w-[20px]"
                    src={
                      openCategory === "general-knowledge"
                        ? "./icons/minus-small.png"
                        : "./icons/plus-small.png"
                    }
                    alt={
                      openCategory === "general-knowledge"
                        ? "Minus Icon"
                        : "Plus Icon"
                    }
                  />
                </button>
                {openCategory === "general-knowledge" && (
                  <div className="mt-2 ml-8 space-y-1">
                    <Link
                      href="./generalknowledge"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Clippers Crash Course
                    </Link>
                    <Link
                      href="/general-knowledge/clippers-crash-course"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Barber Essentials
                    </Link>
                    <Link
                      href="/general-knowledge/clippers-crash-course"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Barber Shop Etiquette
                    </Link>
                    <Link
                      href="/general-knowledge/clippers-crash-course"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Proper Hygiene
                    </Link>
                    <Link
                      href="/general-knowledge/clippers-crash-course"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Hair Growth Essentials
                    </Link>
                    <Link
                      href="/general-knowledge/clippers-crash-course"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      More About ShearGenius
                    </Link>
                    <Link
                      href="/general-knowledge/clippers-crash-course"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Why Men&#39;s Hair?
                    </Link>
                    <Link
                      href="/general-knowledge/clippers-crash-course"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Credits
                    </Link>
                    <Link
                      href="/general-knowledge/clippers-crash-course"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Contact
                    </Link>
                    <Link
                      href="/general-knowledge/clippers-crash-course"
                      className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600"
                    >
                      Create An Account
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
