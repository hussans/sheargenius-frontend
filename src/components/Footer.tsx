'use client'
import Link from "next/link";
import React from "react";
const Footer = () => {
  const openNavbarCategory = (category: string) => {
    window.dispatchEvent(
      new CustomEvent("openNavbarCategory", { detail: { category } })
    );
  };
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-black w-full h-[350px] px-5 py-10 text-sm">
    <p
      onClick={() => scrollToSection("page-header")}
      className="font-[NeueMontreal-Medium] text-white hover:underline cursor-pointer mb-10"
    >
      Back To Top
    </p>
      <div className="flex justify-between">
        <div className="flex flex-row gap-30">
          <div className="flex flex-col gap-3">
            <p className="font-[NeueMontreal-Medium] text-white"> HOME </p>
            <div className="flex flex-col gap-1">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("top-posts");
                }}
                className="font-[NeueMontreal-Regular] text-white cursor-pointer"
                href="#top-posts"
              >
                TOP POSTS
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("local-barbers");
                }}
                className="font-[NeueMontreal-Regular] text-white cursor-pointer"
                href="#local-barbers"
              >
                LOCAL BARBERS
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("create-account");
                }}
                className="font-[NeueMontreal-Regular] text-white cursor-pointer"
                href="#create-account"
              >
                CREATE ACCOUNT
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("barber-essentials");
                }}
                className="font-[NeueMontreal-Regular] text-white cursor-pointer"
                href="#barber-essentials"
              >
                BARBER ESSENTIALS
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("barber-etiquette");
                }}
                className="font-[NeueMontreal-Regular] text-white cursor-pointer"
                href="#barber-etiquette"
              >
                BARBER SHOP ETIQUETTE
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("clippers-crash-course");
                }}
                className="font-[NeueMontreal-Regular] text-white cursor-pointer"
                href="#clippers-crash-course"
              >
                CLIPPERS CRASH COURSE
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-[NeueMontreal-Medium] text-white"> EXPLORE </p>
            <div className="flex flex-col gap-1">
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  openNavbarCategory("fades");
                }}
                className="font-[NeueMontreal-Regular] text-white"
                href=""
              >
                FADES
              </Link>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  openNavbarCategory("skin-fades");
                }}
                className="font-[NeueMontreal-Regular] text-white"
                href=""
              >
                SKIN FADES
              </Link>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  openNavbarCategory("styles");
                }}
                className="font-[NeueMontreal-Regular] text-white"
                href=""
              >
                STYLES
              </Link>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  openNavbarCategory("general-knowledge");
                }}
                className="font-[NeueMontreal-Regular] text-white"
                href=""
              >
                GENERAL KNOWLEDGE
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-[NeueMontreal-Medium] text-white">
            CREATE YOUR ACCOUNT
          </p>
          <div className="flex flex-col gap-1">
            <input
              className="bg-white font-[NeueMontreal-Regular] w-[450px] rounded-sm px-5 py-3"
              type="text"
              placeholder="email"
            />
            <button className="bg-[#1500FF] font-[NeueMontreal-Medium] rounded-sm text-white px-5 py-3 hover:bg-gray-100 hover:text-black active:bg-[#1500FF] active:text-white cursor-pointer transition-all duration-75">
              CREATE ACCOUNT
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <p className="font-[NeueMontreal-Medium] text-white">
          CodeStack Acadmey
        </p>
        <p className="font-[NeueMontreal-Medium] text-white">
          © 2025 ShearGenius
        </p>
      </div>
    </div>
  );
};
export default Footer;