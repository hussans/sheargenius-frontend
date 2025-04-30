import Image from "next/image";
import React, { useState } from "react";

const RatingComponent = ({ name }: { name: string }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const images = Array(5).fill(null); // Adjust count as needed
  console.log(name)

  return (
    <div className="px-10 pb-10 pt-3">
      <h2 className="font-[NeueMontreal-Medium] text-center text-2xl mb-10">
        Rate {name}
      </h2>
      <div className="flex justify-center gap-5 place-items-center h-[50vh]">
        {images.map((_, index) => (
          <Image
            key={index}
            src={
              index <= (selectedIndex ?? -1)
                ? "/icons/star.png"
                : "/icons/star-empty.png"
            }
            alt={`Rating ${index + 1}`}
            onClick={() => setSelectedIndex(index)}
            className="cursor-pointer w-12"
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingComponent;
