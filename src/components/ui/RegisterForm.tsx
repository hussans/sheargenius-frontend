import Link from "next/link";
import React from "react";

const RegisterForm = () => {
  return (
    <div className="bg-black w-full h-[825px] py-20 px-10 grid grid-cols-2">
      <div className="flex flex-col gap-96">
        <div>
          <p className="font-[NeueMontreal-Medium] text-white text-3xl">
            {" "}
            Looking to being a career in barbering? Or seeking inspiration to
            try something new?{" "}
          </p>
          <p className="font-[NeueMontreal-Medium] text-white text-xl mt-10">
            {" "}
            Create an account to make posts, connect with barbers in your area
            and join a motivating and exclusive community{" "}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <input
            className="bg-white w-full px-5 py-3 rounded-sm"
            type="text"
            placeholder="email"
          />
          <Link href={"./register"}>
            <button className="bg-[#1500FF] font-[NeueMontreal-Medium] w-full px-5 py-3 rounded-sm text-white hover:bg-white hover:text-black active:bg-[#1500FF] active:text-white transition-all duration-75">
              Create Account
            </button>
          </Link>
          <div className="flex justify-center items-center">
            <p className="font-[NeueMontreal-Medium] text-white">
              {" "}
              Already have an account?
              <Link
                className="text-[#FF4649] space-x-1 hover:text-[#ff7070] active:text-[#d71114] mx-1"
                href={"./login"}
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <img className="h-[700px]" src="./registerpopup-image.jpg" alt="" />
      </div>
    </div>
  );
};

export default RegisterForm;
