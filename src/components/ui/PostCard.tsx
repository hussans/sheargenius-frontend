import React from "react";

const PostCard = () => {
  return (
    <div className="w-full h-[500px] rounded-lg relative overflow-hidden">
      <div className="bg-gray-300 text-white h-[410px] flex justify-center">
        {" "}
        Image{" "}
      </div>
      <div className="bg-[#F5F5F5] w-full h-[90px] px-5 py-3 flex flex-col absolute bottom-0">
        <div className="flex justify-between">
          <p className="font-[NeueMontreal-Medium] text-[#949DA4]">
            {" "}
            Username{" "}
          </p>
          <button>
            <img
              className="w-[15px]"
              src="./icons/info.png"
              alt="Information Icon"
            />
          </button>
        </div>
        <div className="flex justify-between items-center mt-3">
          <p className="font-[NeueMontreal-Medium] text-black text-lg">
            {" "}
            Name of Cut{" "}
          </p>
          <div className="flex flex-row gap-5">
            <div className="flex flex-row gap-2">
              <button>
                <img
                  className="w-[25px]"
                  src="./icons/heart.png"
                  alt="Heart Like Button Icon"
                />
              </button>
              <p className="font-[NeueMontreal-Medium] text-lg"> 10 </p>
            </div>
            <div className="flex flex-row gap-2">
              <img
                className="w-[25px] h-[25px]"
                src="./icons/beacon.png"
                alt="Beacon Comment Icon"
              />
              <p className="font-[NeueMontreal-Medium] text-lg"> 3 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
