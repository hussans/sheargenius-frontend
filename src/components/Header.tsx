import React from 'react'

const Header = () => {
  return (
    <div className="relative">
        <img className="w-full h-[724px] object-cover" src="./sheargenius-banner.png" alt="Barber Shop Leather Chair Banner Image" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <h1 className="font-[NeueMontreal-Medium] text-[#FFFD71] text-8xl"> ShearGenius </h1>
            <p className="font-[NeueMontreal-Medium] text-white text-xl"> A Hub For All Things Hair </p>
        </div>
    </div>
  )
}

export default Header