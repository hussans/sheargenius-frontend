'use client';
import React, { useState } from 'react';

import Image from 'next/image';
import PostCard from '@/components/ui/PostCard';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';


interface HaircutInterface {
    id: number;
    name: string;
    description: string;
    photo1: string;
    photo2: string;
    video: { src: string };
    howTo: {
        step1: string;
        step2: string;
        step3: string;
        step4: string;
    };
}

export default function DirectoryPage(haircutname: string) {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [haircut, setHaircut] = useState<HaircutInterface | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [searchCompleted, setSearchCompleted] = useState<boolean>(false);
const [searchActive, setSearchActive] = useState(false);

    const fetchHaircut = async () => {
        if (!searchQuery) return;

        setLoading(true);
        setSearchCompleted(false);

        try {
            const response = await fetch('/Haircuts.json');
            const data = await response.json();

            const foundHaircut = data.haircuts.find(
                (h: HaircutInterface) => h.name.toLowerCase() === haircutname.toLowerCase()
            );

            setHaircut(foundHaircut || null);
            setSearchCompleted(true);
        } catch (error) {
            console.error('Error fetching the haircuts data:', error);
        }

        setLoading(false);
    };

    return (
        <div className="bg-white min-h-screen w-full">
            <Navbar setSearchActive={setSearchActive} />

            {/* Hero Image ***********************************************************/}
            <header className="relative">
                <img className="w-full h-[724px] object-cover" src="./sheargenius-banner.png" alt="Barber Shop Leather Chair Banner Image" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <h1 className="font-[NeueMontreal-Medium] text-[#FFFD71] text-8xl"> {haircut?.name} </h1>
                    <p className="font-[NeueMontreal-Medium] text-white text-xl"> {haircut?.description} </p>

                  
                </div>
            </header>

            {/*************************************************** Display Haircut Details ******************************************************/}
            {haircut && (

                <div className="container mt-20 px-4">
                    <div>
                        <h2 className="text-xl font-bold">{haircut.name} Examples</h2>
                    </div>
                    <div className="flex flex-col md:flex-row gap-49 justify-center items-center mt-5">
                        <img
                            src={haircut.photo1}
                            alt={haircut.name}
                            className="w-[500px] h-[500px] object-cover rounded-lg shadow-lg"
                        />
                        <Image
                            src="/sheargeniuspng.png"
                            alt="Shear Genius Logo"
                            width={100}
                            height={100}
                            priority
                        />
                        <img
                            src={haircut.photo2}
                            alt={haircut.name}
                            className="w-[500px] h-[500px] object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold mt-60'>Related Post</h2>
                    </div>

                    <div className="mt-5">
                        <div className="grid grid-cols-3  gap-3">
                            <PostCard />
                            <PostCard />
                            <PostCard />
                        </div>
                        <div className="">
                            <button className="bg-black w-full text-white font-[NeueMontreal-Medium] py-5 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75"> VIEW ALL POSTS </button>
                        </div>
                    </div>

                   
                    
                    <div className='flex justify-evenly flex-wrap  gap-6'>


                        {/**********************************************How-To Steps************************************************************ */}
                        <div className=" mt-8 max-w-1/3 ">
                            <h3 className="text-2xl font-bold mb-4">How To:</h3>
                            <ul className=" text-lg space-y-2 font-bold ">
                                <li>1. {haircut.howTo.step1}</li>
                                <li>2. {haircut.howTo.step2}</li>
                                <li>3. {haircut.howTo.step3}</li>
                                <li>4. {haircut.howTo.step4}</li>
                            </ul>
                        </div>

                        {/*********************************************Video Tutorial********************************************************** */}
                        <div className="mt-8 text-center">
                            <h3 className="text-2xl font-bold mb-4 w-full">Video Tutorial:</h3>
                            <div className=''>
                                <iframe
                                    width="600"
                                    height="400"
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

            {/* ********************************************Footer ***************************************************************************/}
           <Footer />
        </div>
    );
}
