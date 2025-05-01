"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { checkToken, setCategory } from "@/utils/DataServices";
import AddPostComponent from "./AddPostComponent";

interface NavbarProps {
  setSearchActive: (active: boolean) => void;
}

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
      } else {
        setActiveTab("explore");
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

  const path = usePathname();
  console.log(path);

  const handleHaircutLinkClick = (haircutName: string) => {
    setCategory(haircutName);
    if (path == "/directory") {
      window.location.reload();
    }
    router.push("/directory");
    setIsOpen(false);
    setOpenCategory(null);
  };

  const activeClass = "bg-gray-200 px-1";

  const profileClick = () => {
    if (checkToken()) {
      router.push("/user-profile");
    } else {
      router.push("/login");
    }
    if (isOpen) toggleSidebar();
  };

  const addPostClick = () => {
    if (checkToken()) {
      setAddPost(true);
    } else {
      router.push("/login");
      if (isOpen) toggleSidebar();
    }
  };

  useEffect(() => {
    const handleOpenNavbarCategory = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.category) {
        setIsOpen(true);
        setOpenCategory(detail.category);
        setActiveTab("explore");
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

  useEffect(() => {
    if(isOpen) {
        setIsOpen(false);
        setOpenCategory(null);
    }
  }, [path,isOpen]);


  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 w-full z-30 bg-white text-black text-sm font-[NeueMontreal-Medium] border-b-2 border-gray-200">
        <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center flex-row">
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <Link href="/" className="flex items-center gap-1.5">
                  <img
                    className="w-[33px]"
                    src="/icons/sheargenius-logo.svg"
                    alt="ShearGenius Logo"
                  />
                  SHEARGENIUS
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleTabClick("explore")}
                    className="relative block cursor-pointer"
                  >
                    EXPLORE
                  </button>
                </div>
                <div className="flex items-center gap-6">
                   <button className="cursor-pointer">
                    <img
                      className="relative w-[17px]"
                      src="/icons/plus.png"
                      alt="Plus Icon"
                      onClick={addPostClick}
                    />
                  </button>
                  <button
                    className="cursor-pointer"
                    onClick={handleSearchClick}
                  >
                    <img
                      className="relative w-[17px]"
                      src="/icons/search.png"
                      alt="Search Icon"
                    />
                  </button>
                  <button className="cursor-pointer" onClick={profileClick}>
                    <img
                      className="relative w-[17px]"
                      src="/icons/user.png"
                      alt="User Profile Figure Icon"
                    />
                  </button>
                </div>
              </div>
            </div>
             <div className="md:hidden">
               <button onClick={toggleSidebar} className="p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
               </button>
             </div>
          </div>
        </div>
      </nav>
      <div className="h-16"></div>

      {addPost && (
         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
           <div className="w-[90%] max-w-xl md:w-[70%] lg:w-[50%] bg-white rounded-lg relative">
             <button className="absolute top-2 right-2 p-1 rounded-full text-slate-600 hover:text-black hover:bg-gray-100 cursor-pointer transition-colors" onClick={() => setAddPost(false)} aria-label="Close Add Post Modal">
                <img
                  className="w-[25px]"
                  src="/icons/cross-small.png"
                  alt="Close"
                />
             </button>
             <AddPostComponent/>
           </div>
         </div>
       )}

      {isOpen && (
        <>
          <div className="fixed inset-0 w-full min-h-screen bg-black/40 z-40" onClick={toggleSidebar}></div>
          <div className="fixed top-0 right-0 bg-white min-h-full w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[500px] z-50 px-4 sm:px-6 md:px-8 lg:px-10 pb-10 shadow-lg overflow-y-auto">
            <div className="flex items-center justify-between h-16 border-b border-gray-200 mb-6">
               <button
                 onClick={toggleSidebar}
                 className="p-2 -ml-2 cursor-pointer hover:bg-gray-100 active:bg-transparent rounded-full"
                 aria-label="Close Menu"
               >
                 <img
                   className="w-[25px]"
                   src="/icons/cross-small.png"
                   alt="Close"
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
                       src="/icons/plus.png"
                       alt="Plus Icon"
                       onClick={addPostClick}
                     />
                   </button>
                   <button
                     className="cursor-pointer"
                     onClick={handleSearchClick}
                   >
                     <img
                       className="relative w-[17px] z-50"
                       src="/icons/search.png"
                       alt="Search Icon"
                     />
                   </button>
                    <button className="cursor-pointer" onClick={profileClick}>
                     <img
                       className="relative w-[17px] z-50"
                       src="/icons/user.png"
                       alt="User Profile Figure Icon"
                     />
                   </button>
                 </div>
               </div>
             </div>
            <div className="space-y-5">
              <div className="ml-2">
                <button
                  onClick={() => toggleCategory("fades")}
                  className="font-[NeueMontreal-Medium] text-xl flex items-center gap-1 cursor-pointer hover:text-gray-600 w-full justify-between"
                >
                  FADES
                  <img
                    className="w-[20px]"
                    src={ openCategory === "fades" ? "/icons/minus-small.png" : "/icons/plus-small.png" }
                    alt={openCategory === "fades" ? "Collapse" : "Expand"}
                  />
                </button>
                {openCategory === "fades" && (
                  <div className="mt-2 ml-8 space-y-1">
                     <button onClick={() => handleHaircutLinkClick("Drop Fade")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Drop Fade</button>
                     <button onClick={() => handleHaircutLinkClick("Taper Fade")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Taper Fade</button>
                     <button onClick={() => handleHaircutLinkClick("Burst Fade")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Burst Fade</button>
                     <button onClick={() => handleHaircutLinkClick("Burst Taper Fade")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Burst Taper Fade</button>
                     <button onClick={() => handleHaircutLinkClick("Hard Part Fade")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Hard Part Fade</button>
                     <button onClick={() => handleHaircutLinkClick("Crop Fade")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Crop Fade</button>
                     <button onClick={() => handleHaircutLinkClick("Pompadour Fade")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Pompadour Fade</button>
                     <button onClick={() => handleHaircutLinkClick("Undercut Fade")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Undercut Fade</button>
                     <button onClick={() => handleHaircutLinkClick("Temp Fade")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Temp Fade</button>
                   </div>
                )}
              </div>
              <div className="ml-2">
                <button
                  onClick={() => toggleCategory("skin-fades")}
                  className="font-[NeueMontreal-Medium] text-xl flex items-center gap-1 cursor-pointer hover:text-gray-600 w-full justify-between"
                >
                  SKIN FADES
                  <img
                    className="w-[20px]"
                    src={ openCategory === "skin-fades" ? "/icons/minus-small.png" : "/icons/plus-small.png"}
                    alt={ openCategory === "skin-fades" ? "Collapse" : "Expand"}
                  />
                </button>
                {openCategory === "skin-fades" && (
                  <div className="mt-2 ml-8 space-y-1">
                     <button onClick={() => handleHaircutLinkClick("Low Skin Fade")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Low Skin Fade</button>
                     <button onClick={() => handleHaircutLinkClick("Mid Skin Fade")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Mid Skin Fade</button>
                     <button onClick={() => handleHaircutLinkClick("High Skin Fade")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">High Skin Fade</button>
                   </div>
                )}
              </div>
              <div className="ml-2">
                <button
                  onClick={() => toggleCategory("styles")}
                  className="font-[NeueMontreal-Medium] text-xl flex items-center gap-1 cursor-pointer hover:text-gray-600 w-full justify-between"
                >
                  STYLES
                  <img
                    className="w-[20px]"
                    src={ openCategory === "styles" ? "/icons/minus-small.png" : "/icons/plus-small.png" }
                    alt={openCategory === "styles" ? "Collapse" : "Expand"}
                  />
                </button>
                {openCategory === "styles" && (
                  <div className="mt-2 ml-8 space-y-1">
                     <button onClick={() => handleHaircutLinkClick("Taper Cut")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Taper Cut</button>
                     <button onClick={() => handleHaircutLinkClick("Crew Cut")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Crew Cut</button>
                     <button onClick={() => handleHaircutLinkClick("Buzz Cut")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Buzz Cut</button>
                     <button onClick={() => handleHaircutLinkClick("Mullet")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Mullet Cut</button>
                     <button onClick={() => handleHaircutLinkClick("Cornrows")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Cornrows</button>
                     <button onClick={() => handleHaircutLinkClick("Dread Locs")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Dreadlocks</button>
                     <button onClick={() => handleHaircutLinkClick("Braids")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Braids</button>
                     <button onClick={() => handleHaircutLinkClick("Short Layer")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Short Layer</button>
                     <button onClick={() => handleHaircutLinkClick("Blowouts")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Blowouts</button>
                     <button onClick={() => handleHaircutLinkClick("Fringe Cut")} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Fringe Cut</button>
                     <Link href="/styles-more" onClick={toggleSidebar} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">More</Link>
                   </div>
                )}
              </div>
              <div className="ml-2">
                <button
                  onClick={() => toggleCategory("general-knowledge")}
                  className="font-[NeueMontreal-Medium] text-xl flex items-center gap-1 cursor-pointer hover:text-gray-600 w-full justify-between"
                >
                  GENERAL KNOWLEDGE
                  <img
                    className="w-[20px]"
                    src={ openCategory === "general-knowledge" ? "/icons/minus-small.png" : "/icons/plus-small.png" }
                    alt={ openCategory === "general-knowledge" ? "Collapse" : "Expand" }
                  />
                </button>
                {openCategory === "general-knowledge" && (
                   <div className="mt-2 ml-8 space-y-1">
                     <Link href="/generalknowledge" onClick={toggleSidebar} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Clippers Crash Course</Link>
                     <Link href="/generalknowledge" onClick={toggleSidebar} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Barber Essentials</Link>
                     <Link href="/generalknowledge" onClick={toggleSidebar} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Barber Shop Etiquette</Link>
                     <Link href="/generalknowledge" onClick={toggleSidebar} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Proper Hygiene</Link>
                     <Link href="/generalknowledge" onClick={toggleSidebar} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Hair Growth Essentials</Link>
                     <Link href="/generalknowledge" onClick={toggleSidebar} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">More About ShearGenius</Link>
                     <Link href="/generalknowledge" onClick={toggleSidebar} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Why Men&#39;s Hair?</Link>
                     <Link href="/generalknowledge" onClick={toggleSidebar} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Credits</Link>
                     <Link href="/generalknowledge" onClick={toggleSidebar} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Contact</Link>
                     <Link href="/login" onClick={toggleSidebar} className="font-[NeueMontreal-Medium] block text-md hover:text-gray-600">Create An Account</Link>
                   </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;