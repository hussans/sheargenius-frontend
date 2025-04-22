"use client";
import React, { useEffect, useState } from "react";
import PostCard from "@/components/PostCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { HaircutInterface } from "@/utils/Interfaces";
import { fetchHaircut, getCategory } from "@/utils/DataServices";
import Header from "@/components/Header";
export default function DirectoryPage() {
  const [haircut, setHaircut] = useState<HaircutInterface>({
    id: 0,
    name: "",
    description: "",
    photo1: "#",
    photo2: "#",
    video: { src: "#" },
    howTo: {
      step1: "",
      step2: "",
      step3: "",
      step4: "",
    },
  });

  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    const fetchData = async (cut: string) => {
      try {
        const data = await fetchHaircut(cut);
        setHaircut(data);
      } catch (error) {
        console.error("Error fetching haircut:", error);
      }
    };
    const category = getCategory();
    if (category) {
      fetchData(category);
    }
  }, [searchActive]);
  return (
    <div className="bg-white min-h-screen w-full">
      <nav>
        <Navbar setSearchActive={setSearchActive} />
      </nav>
      <header>
        <Header
          searchActive={searchActive}
          setSearchActive={setSearchActive}
          title={haircut.name}
          description={haircut.description}
        />
      </header>
      {haircut && (
        <div className="container mt-20 px-4 mx-auto">
         
          <div>
            <h2 className="text-2xl font-bold mb-10 text-center font-[NeueMontreal-Medium]">
              {haircut.name} Examples
            </h2>
            <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-12 text-center">
              <div className="flex justify-center">


                <img
                  src={haircut.photo1}
                  alt={haircut.name}
                  className="w-full max-w-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex justify-center">
              <img src="/icons/sheargenius-logo.svg" alt="Shear Genius Logo"
                className="w-20 h-auto object-contain" />
                </div>
                <div className="flex justify-center">
              <img
                src={haircut.photo2}
                alt={haircut.name}
                className="w-full max-w-[400px] object-cover rounded-lg shadow-lg"
              />
              </div>
            </div>
          </div>
          
          <div className="mt-28">
            <h2 className="text-2xl font-bold mb-10 text-center font-[NeueMontreal-Medium]">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
            <div className="mt-6">
              <button className="bg-black w-full text-white font-[NeueMontreal-Medium] py-5 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white transition-all duration-75">
                VIEW ALL POSTS
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-12 mt-20">
           
            <div className="w-full lg:w-1/3 text-left">
              <h3 className="text-2xl font-bold mb-4 font-[NeueMontreal-Medium]">
                How To:
              </h3>
              <ul className="text-lg space-y-2 font-bold font-[NeueMontreal-Medium]">
                <li>1. {haircut.howTo.step1}</li>
                <li>2. {haircut.howTo.step2}</li>
                <li>3. {haircut.howTo.step3}</li>
                <li>4. {haircut.howTo.step4}</li>
              </ul>
            </div>
           
            <div className="w-full lg:w-2/3 text-center">
              <div className="flex justify-center">
                <iframe
                  width="100%"
                  height="450px"
                  src={haircut.video.src}
                  title={`${haircut.name} Tutorial`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-25">
        <Footer />
      </div>
    </div>
  );
}
