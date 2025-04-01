import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    
  return (
    <nav className="bg-white text-black text-sm font-[NeueMontreal-Medium] border-b-2">
        <div className="max-w-[100%] mx-auto px-10">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center flex-row">
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                        <a href="/" ><img className="w-[33px]" src="./icons/sheargenius-logo.svg" alt="ShearGenius Logo" /></a>
                        <a href="/"> SHEARGENIUS </a>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4">
                            <a href="/"> EXPLORE </a>
                            <a href="/"> ABOUT </a>
                        </div>
                        <div className="flex items-center gap-6">
                            <img className="w-[17px]" src="./icons/plus.png" alt="Plus Icon" />
                            <img className="w-[17px]" src="./icons/search.png" alt="Search Icon" />
                            <img className="w-[17px]" src="./icons/user.png" alt="User Profile Figure Icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar