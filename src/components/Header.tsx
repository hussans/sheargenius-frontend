import {
  fetchHaircut,
  getProfileUserData,
  setCategory,
} from "@/utils/DataServices";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
interface HeaderProps {
  searchActive: boolean;
  setSearchActive: (active: boolean) => void;
  title?: string;
  description?: string;
}

const Header = ({
  searchActive,
  setSearchActive,
  title,
  description,
}: HeaderProps) => {
  const [query, setQuery] = useState("");
  const [searchHovered, setSearchHovered] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (searchActive) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [searchActive]);

  const handleSearch = async () => {
    console.log("Search..", query);
    setCategory(query);
    localStorage.setItem("Category", query);

    const result = await fetchHaircut(query);
if (result !== undefined) {
  router.push("/directory");
} else {
  const profileData = await getProfileUserData(query);
  if (profileData !== null) {
    router.push("/search-profile");
  } else {
    setError(true);
  }
}
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative">
      <img
        className="w-full h-[724px] object-cover"
        src="./sheargenius-banner.png"
        alt="Barber Shop Leather Chair Banner Image"
      />
      {searchActive && (
        <div className="absolute inset-0 bg-[#00000026] blur-3xl z-5" />
      )}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 ${
          searchActive ? "-translate-y-20" : "-translate-y-1/2"
        } flex flex-col items-center transition-all duration-300 z-5`}
      >
        <h1 className="font-[NeueMontreal-Medium] text-[#FFFD71] text-8xl">
          {title || "ShearGenius"}
        </h1>
        <p className="font-[NeueMontreal-Medium] text-white text-center text-xl">
          {description || "A Hub For All Things Hair"}{" "}
        </p>
        {searchActive && (
          <div className="mt-5 flex flex-col items-center gap-1">
            <div className="flex items-center gap-1">
              <input
                type="text"
                placeholder="Search.."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-white font-[NeueMontreal-Medium] w-[500px] px-4 py-3 rounded-md outline-none"
              />
              <button
                onClick={handleSearch}
                onMouseEnter={() => setSearchHovered(true)}
                onMouseLeave={() => setSearchHovered(false)}
                onMouseDown={() => setSearchHovered(false)}
                onMouseUp={() => setSearchHovered(true)}
                className={`p-3 rounded-md transition-colors duration-100 ${
                  searchHovered ? "bg-white" : "bg-black"
                }`}
              >
                <img
                  className="w-[25px]"
                  src={
                    searchHovered
                      ? "./icons/search.png"
                      : "./icons/search-white.png"
                  }
                  alt="Search Icon"
                />
              </button>
              <button
                onClick={() => setSearchActive(false)}
                className="bg-transparent p-3 rounded-md"
              >
                <img
                  className="w-[25px]"
                  src="./icons/cross-small-white.png"
                  alt="Closing x Icon"
                />
              </button>
            </div>

            <p className="font-[NeueMontreal-Medium] text-white">
              {error ? "Invalid Search..." : "Search ShearGenius"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
