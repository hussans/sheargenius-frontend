"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const register = () => {
    const [isDropDownOpen, setDropDownOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState("User / Barber");

    const toggleDropDown = () => {
        setDropDownOpen(!isDropDownOpen);
    }

    const selectRole = (role: string) => {
        setSelectedRole(role);
        setDropDownOpen(false);
    }

    return (
        <div className="bg-white flex">
            <div className="flex-4/10 py-6 px-8">
                <div>
                    <p className="font-[NeueMontreal-Medium] text-xl"> SHEARGENIUS </p>
                </div>
                <div className="flex flex-col justify-center text-center mt-14">
                    <p className="font-[NeueMontreal-Bold] text-3xl"> CREATE ACCOUNT </p>
                    <p className="font-[NeueMontreal-Medium] text-sm"> Welcome to ShearGenius </p>
                </div>
                <div className="flex flex-col mt-5">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col">
                            <p className="font-[NeueMontreal-Medium] text-sm pb-1"> Name </p>
                            <input className="bg-[#F5F5F5] rounded-md p-4" type="text" placeholder="Name" />
                        </div>
                        <div className="flex flex-col">
                            <p className="font-[NeueMontreal-Medium] text-sm pb-1"> Username </p>
                            <input className="bg-[#F5F5F5] rounded-md p-4" type="text" placeholder="Username" />
                        </div>
                        <div className="flex flex-col">
                            <p className="font-[NeueMontreal-Medium] text-sm pb-1"> Email </p>
                            <input className="bg-[#F5F5F5] rounded-md p-4" type="text" placeholder="Email" />
                        </div>
                        <div className="flex flex-col">
                            <p className="font-[NeueMontreal-Medium] text-sm pb-1"> Password </p>
                            <input className="bg-[#F5F5F5] rounded-md p-4" type="text" placeholder="Password" />
                        </div>
                        <div className="flex flex-col mt-1">
                        <div className="flex flex-col">
                            <p className="font-[NeueMontreal-Medium] text-sm pb-1"> Role </p>
                            {/* <input className="bg-[#F5F5F5] rounded-md p-2" type="text" placeholder="User / Barber" /> */}
                            <div className="relative">
                                <div 
                                onClick={toggleDropDown}
                                className="bg-[#f5f5f5] flex justify-between items-center rounded-md px-4 py-2 cursor-pointer text-[#7c7d86]"> 
                                    {selectedRole}
                                    <img className="w-[25px] m-0 p-0" src="./icons/dropdown.png" alt="Drop Down Icon" />
                                </div>
                                {isDropDownOpen && (
                                <div className="rounded-md border-gray-300 bg-white p-3 absolute top-[45px] w-[100%] shadow-md">
                                    <div 
                                    onClick={() => selectRole("User")}
                                    className="cursor-pointer hover:bg-gray-100 p-1 rounded-sm"> 
                                        User 
                                    </div>
                                    <div
                                    onClick={() => selectRole("Barber")} 
                                    className="cursor-pointer hover:bg-gray-100 p-1 rounded-sm"> 
                                        Barber 
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col mt-1">
                            <p className="font-[NeueMontreal-Medium] text-sm pb-1"> Years of Experience </p>
                            <input className="bg-[#F5F5F5] rounded-md px-4 py-2" type="text" placeholder="3 Years" />
                        </div>
                        </div>
                        <div className="flex flex-col mt-1 text-center">
                            <button className="bg-[#1500FF] text-white py-4 rounded-md font-[NeueMontreal-Medium] text-sm hover:bg-black active:bg-[#1500FF] cursor-pointer">
                                CREATE ACCOUNT
                            </button>
                            <p className="font-[NeueMontreal-Medium] text-sm pt-2"> Already have an account?
                                <Link className="text-[#1500FF] active:text-[#3F5CFF]" href={"./login"}> Login </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-6/10">
                <img className="w-[1000px] h-[100vh] object-cover" src="./loginregister-img.jpg" alt="" />
            </div>
        </div>
    )
}

export default register