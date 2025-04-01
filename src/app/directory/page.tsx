

// ------------------------------------------------------------------------------------------------------------

'use client';
import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';

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

export default function DirectoryPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [haircut, setHaircut] = useState<HaircutInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchHaircut = async () => {
    if (!searchQuery) return;

    setLoading(true);
    try {
      const response = await fetch('/Haircuts.json');
      const data = await response.json();

      const foundHaircut = data.haircuts.find(
        (h: HaircutInterface) => h.name.toLowerCase() === searchQuery.toLowerCase()
      );

      setHaircut(foundHaircut || null);
    } catch (error) {
      console.error('Error fetching the haircuts data:', error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      
      <div className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/barbershop-bg.jpg')" }}>
        <h1 className="text-5xl font-bold bg-black bg-opacity-50 px-6 py-3 rounded-lg">
          {haircut ? haircut.name : 'Find Your Perfect Haircut'}
        </h1>
      </div>

      
      <div className="container mx-auto mt-6 px-4">
        <div className="flex items-center justify-center gap-4 mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a haircut..."
            className="border p-3 w-1/2 rounded-lg text-lg"
          />
          <button
            onClick={fetchHaircut}
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 transition"
          >
            Search
          </button>
        </div>

        {loading && <p className="text-center text-lg">Loading...</p>}
        {!loading && searchQuery && !haircut && (
          <p className="text-center text-lg text-red-500">No haircut found.</p>
        )}
      </div>

      
      {haircut && (
        <div className="container mx-auto px-4">
         
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <img src={haircut.photo1} alt={haircut.name} className="w-[300px] rounded-lg shadow-lg" />
            <img src={haircut.photo2} alt={haircut.name} className="w-[300px] rounded-lg shadow-lg" />
          </div>

          <div className="text-center mt-6">
            <h2 className="text-3xl font-bold">{haircut.name}</h2>
            <p className="text-lg mt-2 text-gray-600">{haircut.description}</p>
          </div>

         
          <div className="bg-white p-6 mt-8 shadow-lg rounded-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">How to Achieve This Haircut:</h3>
            <ul className="list-disc text-lg space-y-2 ml-5">
              <li>{haircut.howTo.step1}</li>
              <li>{haircut.howTo.step2}</li>
              <li>{haircut.howTo.step3}</li>
              <li>{haircut.howTo.step4}</li>
            </ul>
          </div>

          
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Video Tutorial:</h3>
            <iframe
              width="100%"
              height="450"
              src={haircut.video.src}
              title={`${haircut.name} Tutorial`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg max-w-3xl mx-auto"
            ></iframe>
          </div>
        </div>
      )}

      
      <footer className="bg-black text-white text-center p-6 mt-12">
        <p className="text-lg">Looking to become a barber or book an appointment?</p>
        <p className="mt-2 text-gray-400">Sign up for exclusive tips and offers.</p>
        <input type="email" placeholder="Enter your email" className="mt-4 px-4 py-2 text-black rounded-lg" />
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg ml-2 hover:bg-blue-700">
          Subscribe
        </button>
      </footer>
    </div>
  );
}
