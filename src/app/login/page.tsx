"use client";
import Link from 'next/link'
import React, { useState } from 'react'

const login = () => {
  const[email,setEmail] = useState<string>("")
  const[password,setPassword] = useState<string>("")

  // async?
  const handleSubmit = () => {
      console.log("login attempted")
  }
  return (
    <div className="bg-white flex">
      <div className="flex-4/10 py-6 px-8">
        <div>
          <p className="font-[NeueMontreal-Medium] text-xl"> SHEARGENIUS </p>
        </div>
        <div className="flex flex-col justify-center text-center mt-14">
          <p className="font-[NeueMontreal-Bold] text-3xl"> LOGIN </p>
          <p className="font-[NeueMontreal-Medium] text-sm"> Welcome Back! </p>
        </div>
        <div className="flex flex-col mt-20">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <p className="font-[NeueMontreal-Medium] text-sm pb-1"> Email </p>
              <input className="bg-[#F5F5F5] rounded-md p-4" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="flex flex-col">
              <p className="font-[NeueMontreal-Medium] text-sm pb-1"> Password </p>
              <input className="bg-[#F5F5F5] rounded-md p-4" type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="flex flex-col mt-8 text-center">
              <button className="bg-[#1500FF] text-white py-4 rounded-md font-[NeueMontreal-Medium] text-sm hover:bg-black active:bg-[#1500FF] cursor-pointer" onClick={handleSubmit}>
                LOGIN
              </button>
              <p className="font-[NeueMontreal-Medium] text-sm pt-2"> Don't have an account? 
                <Link className="text-[#1500FF] active:text-[#3F5CFF]" href={"./register"}> Sign Up </Link>
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

export default login