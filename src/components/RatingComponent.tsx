import Image from "next/image";
import React, { useState } from "react";

interface RatingComponentProps {
  usernameToRate: string;
}

const RatingComponent = ({ usernameToRate }: RatingComponentProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const images = Array(5).fill(null);

  return (
    <div className="px-4 sm:px-6 md:px-10 pb-8 sm:pb-10 pt-3">
      <h2 className="font-[NeueMontreal-Medium] text-center text-xl sm:text-2xl">
        Rate {usernameToRate}
      </h2>
      <div className="flex justify-center gap-3 sm:gap-5 items-center min-h-[150px]">
        {images.map((_, index) => (
          <Image
            key={index}
            src={
              index <= (selectedIndex ?? -1)
                ? "/icons/star-gold.png"
                : "/icons/star-empty.png"
            }
            alt={`Rating ${index + 1}`}
            onClick={() => setSelectedIndex(index)}
            className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            width={50}
            height={50}
          />
        ))}
      </div>
      <button 
      className="bg-black w-full text-white font-[NeueMontreal-Medium] py-5 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75">
        Submit
      </button>
    </div>
  );
};

export default RatingComponent;