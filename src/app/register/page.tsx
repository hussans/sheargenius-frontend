"use client";
import Link from 'next/link'
import React, { useState } from 'react'

const register = () => {
  const[email,setEmail] = useState<string>("")
  const[password,setPassword] = useState<string>("")
  const[name,setName] = useState<string>("")
  const[username,setUsername] = useState<string>("")
  const[role,setRole] = useState<string>("")
  const[exp,setExp] = useState<string>("")

//   async?
  const handleSubmit = () => {
    console.log("create account attempted")
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
                            <input className="bg-[#F5F5F5] rounded-md p-4" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="flex flex-col">
                            <p className="font-[NeueMontreal-Medium] text-sm pb-1"> Username </p>
                            <input className="bg-[#F5F5F5] rounded-md p-4" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div className="flex flex-col">
                            <p className="font-[NeueMontreal-Medium] text-sm pb-1"> Email </p>
                            <input className="bg-[#F5F5F5] rounded-md p-4" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="flex flex-col">
                            <p className="font-[NeueMontreal-Medium] text-sm pb-1"> Password </p>
                            <input className="bg-[#F5F5F5] rounded-md p-4" type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="flex flex-col mt-1">
                        <div className="flex flex-col">
                            <p className="font-[NeueMontreal-Medium] text-sm pb-1"> Role </p>
                            <input className="bg-[#F5F5F5] rounded-md p-2" type="text" placeholder="User / Barber" onChange={(e) => setRole(e.target.value)} required />
                        </div>
                        <div className="flex flex-col mt-1">
                            <p className="font-[NeueMontreal-Medium] text-sm pb-1"> Years of Experience </p>
                            <input className="bg-[#F5F5F5] rounded-md p-2" type="number" placeholder="3 Years" onChange={(e) => setExp(e.target.value)} required />
                        </div>
                        </div>
                        <div className="flex flex-col mt-1 text-center">
                            <button className="bg-[#1500FF] text-white py-4 rounded-md font-[NeueMontreal-Medium] text-sm hover:bg-black active:bg-[#1500FF] cursor-pointer" onClick={handleSubmit}>
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