'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React, { useState } from "react";

const stylesMore = () => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div>
        <nav>
            <Navbar setSearchActive={setSearchActive} />
        </nav>
        <header>
            <Header 
            searchActive={searchActive} 
            setSearchActive={setSearchActive} 
            title="More Styles"
            description="More styles to choose from"   
            />
        </header>
        <main className="mt-25">
            <div className="flex justify-center items-center mb-10">
                <h2 className="font-[NeueMontreal-Medium] text-xl text-black"> 
                    Styles 
                </h2>
            </div>
            <section className="mx-5">
                <div className="grid grid-cols-5 grid-rows-2 gap-3">
                    <div>
                        <Link href={""}>
                            <button 
                            className="bg-white font-[NeueMontreal-Medium] outline-2 rounded-sm w-full py-5 leading-none cursor-pointer hover:bg-gray-300 hover:text-white active:bg-white active:text-black">
                                Caesar Cut
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link href={""}>
                            <button 
                            className="bg-white font-[NeueMontreal-Medium] outline-2 rounded-sm w-full py-5 leading-none cursor-pointer hover:bg-gray-300 hover:text-white active:bg-white active:text-black">
                                Mohawk
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link href={""}>
                            <button 
                            className="bg-white font-[NeueMontreal-Medium] outline-2 rounded-sm w-full py-5 leading-none cursor-pointer hover:bg-gray-300 hover:text-white active:bg-white active:text-black">
                                Faux Hawk
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link href={""}>
                            <button 
                            className="bg-white font-[NeueMontreal-Medium] outline-2 rounded-sm w-full py-5 leading-none cursor-pointer hover:bg-gray-300 hover:text-white active:bg-white active:text-black">
                                Bowl Cut
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link href={""}>
                            <button 
                            className="bg-white font-[NeueMontreal-Medium] outline-2 rounded-sm w-full py-5 leading-none cursor-pointer hover:bg-gray-300 hover:text-white active:bg-white active:text-black">
                                Side Part
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link href={""}>
                            <button 
                            className="bg-white font-[NeueMontreal-Medium] outline-2 rounded-sm w-full py-5 leading-none cursor-pointer hover:bg-gray-300 hover:text-white active:bg-white active:text-black">
                                Pompadour
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link href={""}>
                            <button 
                            className="bg-white font-[NeueMontreal-Medium] outline-2 rounded-sm w-full py-5 leading-none cursor-pointer hover:bg-gray-300 hover:text-white active:bg-white active:text-black">
                                Quiff
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link href={""}>
                            <button 
                            className="bg-white font-[NeueMontreal-Medium] outline-2 rounded-sm w-full py-5 leading-none cursor-pointer hover:bg-gray-300 hover:text-white active:bg-white active:text-black">
                                Comb Over
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link href={""}>
                            <button 
                            className="bg-white font-[NeueMontreal-Medium] outline-2 rounded-sm w-full py-5 leading-none cursor-pointer hover:bg-gray-300 hover:text-white active:bg-white active:text-black">
                                Slick Back
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link href={""}>
                            <button 
                            className="bg-white font-[NeueMontreal-Medium] outline-2 rounded-sm w-full py-5 leading-none cursor-pointer hover:bg-gray-300 hover:text-white active:bg-white active:text-black">
                                Flat Top
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link href={""}>
                            <button 
                            className="bg-white font-[NeueMontreal-Medium] outline-2 rounded-sm w-full py-5 leading-none cursor-pointer hover:bg-gray-300 hover:text-white active:bg-white active:text-black">
                                Man Bun
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link href={""}>
                            <button 
                            className="bg-white font-[NeueMontreal-Medium] outline-2 rounded-sm w-full py-5 leading-none cursor-pointer hover:bg-gray-300 hover:text-white active:bg-white active:text-black">
                                French Crop
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link href={""}>
                            <button 
                            className="bg-white font-[NeueMontreal-Medium] outline-2 rounded-sm w-full py-5 leading-none cursor-pointer hover:bg-gray-300 hover:text-white active:bg-white active:text-black">
                                Hair Deficient
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link href={""}>
                            <button
                            disabled 
                            className="bg-white font-[NeueMontreal-Medium] outline-2 rounded-sm w-full py-5 leading-none" >
                                More Coming Soon
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
        <footer className="mt-25">
            <Footer />
        </footer>
    </div>
  );
};

export default stylesMore;
