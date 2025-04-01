import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black w-full h-[350px] px-5 py-10 text-sm">
      <p className="font-[NeueMontreal-Medium] text-white hover:underline cursor-pointer mb-10"> Back To Top </p>
      <div className="flex justify-between">
        <div className="flex flex-row gap-30">
          <div className="flex flex-col gap-3">
            <p className="font-[NeueMontreal-Medium] text-white"> HOME </p>
            <div className="flex flex-col gap-1">
              <Link className="font-[NeueMontreal-Regular] text-white" href={""}> TOP POSTS </Link>
              <Link className="font-[NeueMontreal-Regular] text-white" href={""}> LOCAL BARBERS </Link>
              <Link className="font-[NeueMontreal-Regular] text-white" href={""}> CREATE ACCOUNT </Link>
              <Link className="font-[NeueMontreal-Regular] text-white" href={""}> BARBER ESSENTIALS </Link>
              <Link className="font-[NeueMontreal-Regular] text-white" href={""}> BARBER SHOP ETIQUETTE </Link>
              <Link className="font-[NeueMontreal-Regular] text-white" href={""}> CLIPPERS CRASH COURSE </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-[NeueMontreal-Medium] text-white"> EXPLORE </p>
            <div className="flex flex-col gap-1">
              <Link className="font-[NeueMontreal-Regular] text-white" href={""}> FADES </Link>
              <Link className="font-[NeueMontreal-Regular] text-white" href={""}> SKIN FADES </Link>
              <Link className="font-[NeueMontreal-Regular] text-white" href={""}> STYLES </Link>
              <Link className="font-[NeueMontreal-Regular] text-white" href={""}> GENERAL KNOWLEDGE </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-[NeueMontreal-Medium] text-white"> CREATE YOUR ACCOUNT </p>
          <div className="flex flex-col gap-1">
            <input className="bg-white font-[NeueMontreal-Regular] w-[450px] rounded-sm px-5 py-3" type="text" placeholder="email" />
            <button className="bg-[#1500FF] font-[NeueMontreal-Medium] rounded-sm text-white px-5 py-3 hover:bg-gray-100 hover:text-black active:bg-[#1500FF] active:text-white cursor-pointer transition-all duration-75">
              CREATE ACCOUNT
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <p className="font-[NeueMontreal-Medium] text-white"> CodeStack Acadmey </p>
        <p className="font-[NeueMontreal-Medium] text-white"> © 2025 ShearGenius </p>
      </div>
    </div>
  )
}

export default Footer;