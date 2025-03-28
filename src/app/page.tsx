import ProfileCard from "@/components/ProfileCard";
import CreateAccPopup from "@/components/ui/RegisterForm";
import Navbar from "@/components/ui/navbar";
import PostCard from "@/components/ui/PostCard";
import Link from "next/link";

export default function Home() {

  return (
    <div className="bg-white min-h-screen w-full">
      <Navbar />
      <header className="relative">
        <img className="w-full h-[724px] object-cover" src="./sheargenius-banner.png" alt="Barber Shop Leather Chair Banner Image" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <h1 className="font-[NeueMontreal-Medium] text-[#FFFD71] text-8xl"> ShearGenius </h1>
          <p className="font-[NeueMontreal-Medium] text-white text-xl"> A Hub For All Things Hair </p>
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
    </div>
  );
}
