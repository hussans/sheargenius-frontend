import ProfileCard from "@/components/ProfileCard";
import CreateAccPopup from "@/components/ui/RegisterForm";
import Navbar from "@/components/ui/Navbar";
import PostCard from "@/components/ui/PostCard";
import Link from "next/link";
import Footer from "@/components/ui/Footer";

export default function Home() {

  return (
    <div className="bg-white min-h-screen w-full">
      <Navbar />
      <header>
        <div className="relative">
          <img className="w-full h-[724px] object-cover" src="./sheargenius-banner.png" alt="Barber Shop Leather Chair Banner Image" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <h1 className="font-[NeueMontreal-Medium] text-[#FFFD71] text-8xl"> ShearGenius </h1>
            <p className="font-[NeueMontreal-Medium] text-white text-xl"> A Hub For All Things Hair </p>
          </div>
        </div>
      </header>
      <section className="mt-20 mx-5">
        <div className="flex justify-center">
          <p className="font-[NeueMontreal-Medium] text-xl"> Top Posts </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-3 grid-rows-2 gap-3">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
          <div className="mt-10">
            <button className="bg-black w-full text-white font-[NeueMontreal-Medium] py-5 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75"> VIEW ALL POSTS </button>
          </div>
        </div>
        <div className="mt-24">
          <div className="flex flex-col justify-center items-center">
            <p className="font-[NeueMontreal-Medium] text-xl"> Local Barbers </p>
            <p className="font-[NeueMontreal-Medium] text-sm"> Curated by the community, for the community </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-3 gap-3">
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-44">
        <CreateAccPopup />
      </section>
      <section className="mt-25 px-5">
        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          <div className="relative col-span-2">
            <img className="w-full h-[600px] object-cover" src="./barberessentials.png" alt="Barber Essentials Background Image" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <img className="w-[50px]" src="./icons/sheargenius-essentials.svg" alt="ShearGenius Logo" />
              <div className="flex justify-center flex-col items-center mb-10 mt-5">
                <p className="font-[NeueMontreal-Medium] text-white text-5xl"> Barber Essentials </p>
                <p className="font-[NeueMontreal-Medium] text-white text-sm"> Create the best toolbox for success </p>
              </div>
              <button className="font-[NeueMontreal-Medium] text-black bg-white px-25 py-2 hover:bg-[#FFFFFF1A] hover:outline-2 hover:outline-white hover:text-white active:text-black active:bg-white active:outline-0 cursor-pointer transition-all duration-75"> 
                EXPLORE 
              </button>
            </div>
          </div>
          <div className="relative">
            <img className="w-full h-[600px] object-cover" src="./barberetiquette.jpg" alt="Barber Shop Cutting Area Background" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-7">
              <div className="flex justify-center flex-col items-center text-center gap-1">
                <p className="font-[NeueMontreal-Medium] text-white text-5xl"> Barber Shop <br /> Etiquette </p>
                <p className="font-[NeueMontreal-Medium] text-white text-sm"> Make your next visit a breeze </p>
              </div>
              <button className="font-[NeueMontreal-Medium] text-black bg-white px-25 py-2 hover:bg-[#FFFFFF1A] hover:outline-2 hover:outline-white hover:text-white active:text-black active:bg-white active:outline-0 cursor-pointer transition-all duration-75"> 
                LEARN MORE 
              </button>
            </div>
          </div>
          <div className="relative">
            <img className="w-full h-[600px] object-cover" src="./barberitems.jpg" alt="Barber Clippers and Items Background" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-7">
              <div className="flex justify-center flex-col items-center text-center gap-1">
                <p className="font-[NeueMontreal-Medium] text-white text-5xl"> Clippers <br /> Crash Course </p>
                <p className="font-[NeueMontreal-Medium] text-white text-sm"> Learn basic terminology </p>
              </div>
              <button className="font-[NeueMontreal-Medium] text-black bg-white px-25 py-2 hover:bg-[#FFFFFF1A] hover:outline-2 hover:outline-white hover:text-white active:text-black active:bg-white active:outline-0 cursor-pointer transition-all duration-75">
                BEGIN
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="mt-25">
        <Footer />
      </footer>

    </div>
  );
}
