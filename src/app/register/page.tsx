"use client";

import {
  createAccount,
  getFormattedDate,
  getLoggedInUserData,
  loggedInData,
  login,
} from "@/utils/DataServices";
import { INewUser, IToken } from "@/utils/Interfaces";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [isDropDownOpen2, setDropDownOpen2] = useState(false);
  const [isDropDownOpen3, setDropDownOpen3] = useState(false);
  const [selectedRole, setSelectedRole] = useState("User / Barber");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [exp, setExp] = useState<string>("");
  const [barbershopName, setBarbershopName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("State");
  const [zip, setZIP] = useState<string>("");
  const [securityQuestion, setSecurityQestion] =
    useState<string>("-please select-");
  const [securityAnswer, setSecurityAnswer] = useState<string>("");
  const router = useRouter();

  const toggleDropDown = () => {
    setDropDownOpen(!isDropDownOpen);
  };
  const toggleDropDown2 = () => {
    setDropDownOpen2(!isDropDownOpen2);
  };
  const toggleDropDown3 = () => {
    setDropDownOpen3(!isDropDownOpen3);
  };

  const selectRole = (role: string) => {
    setSelectedRole(role);
    setDropDownOpen(false);
  };

  const setStateMenu = (state: string) => {
    setState(state);
    setDropDownOpen3(false);
  };

  const selectQuestion = (question: string) => {
    setSecurityQestion(question);
    setDropDownOpen2(false);
  };

  const handleSubmit = async () => {
    const newEditedUser: INewUser = {
      id: 0,
      username: username.toLowerCase(),
      password: password,
      accountType: selectedRole,
      name: name,
      date: getFormattedDate(),
      rating: 0,
      ratingCount: 0,
      followers: [],
      following: [],
      followerCount: 0,
      followingCount: 0,
      securityQuestion: securityQuestion,
      securityAnswer: securityAnswer.toLowerCase(),
      bio: Number(exp) > 0 ? `${exp} year(s) of experience.`: "",
      email: email,
      shopName: barbershopName,
      address: address,
      city: city,
      state: state,
      zip: zip,
      pfp: "/icons/user-white.png",
      isDeleted: false,
    };

    console.log(newEditedUser);
    const result = await createAccount(newEditedUser);
    if (result) {
      console.log("Account Created");
      const userData = {
        username: username,
        password: password,
      };
      const token: IToken = await login(userData);
      if (token != null) {
        if (typeof window != null) {
          localStorage.setItem("Token", token.token);
          console.log(token.token);
          await getLoggedInUserData(username);
          sessionStorage.setItem("AccountInfo", JSON.stringify(loggedInData()));
          if (loggedInData().isDeleted == false) router.push("/");
        }
      } else {
        console.log("Login was unsuccessful, invalid useranme or password");
      }
    } else {
      alert("Username already exists...");
      console.log(newEditedUser);
    }
    // await getLoggedInUserData(newEditedUser.username);
  };

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  return (
    <div className="bg-white flex">
      <div className="flex-4/10 py-6 px-8">
        <div>
          <p className="font-[NeueMontreal-Medium] text-xl"> SHEARGENIUS </p>
        </div>
        <div className="flex flex-col justify-center text-center mt-14">
          <p className="font-[NeueMontreal-Bold] text-3xl"> CREATE ACCOUNT </p>
          <p className="font-[NeueMontreal-Medium] text-sm">
            {" "}
            Welcome to ShearGenius{" "}
          </p>
        </div>
        <div className="flex flex-col mt-5">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <p className="font-[NeueMontreal-Medium] text-sm pb-1"> Name </p>
              <input
                className="bg-[#F5F5F5] rounded-md p-4"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <p className="font-[NeueMontreal-Medium] text-sm pb-1">
                {" "}
                Username{" "}
              </p>
              <input
                className="bg-[#F5F5F5] rounded-md p-4"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <p className="font-[NeueMontreal-Medium] text-sm pb-1"> Email </p>
              <input
                className="bg-[#F5F5F5] rounded-md p-4"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <p className="font-[NeueMontreal-Medium] text-sm pb-1">
                {" "}
                Password{" "}
              </p>
              <input
                className="bg-[#F5F5F5] rounded-md p-4"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col mt-1">
              <div className="flex flex-col">
                <p className="font-[NeueMontreal-Medium] text-sm pb-1">
                  {" "}
                  Role{" "}
                </p>
                <div className="relative">
                  <div
                    onClick={toggleDropDown}
                    className="bg-[#f5f5f5] flex justify-between items-center rounded-md px-4 py-2 cursor-pointer"
                  >
                    {selectedRole}
                    <img
                      className={`w-[25px] m-0 p-0 transition-transform duration-500 ${
                        isDropDownOpen ? "rotate-180" : "rotate-0"
                      }`}
                      src="./icons/dropdown.png"
                      alt="Drop Down Icon"
                    />
                  </div>
                  {isDropDownOpen && (
                    <div
                      className={`rounded-md border-gray-300 bg-white p-3 absolute top-[45px] w-[100%] shadow-md transition-all duration-700 z-30 ${
                        isDropDownOpen
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      <div
                        onClick={() => selectRole("User")}
                        className="cursor-pointer hover:bg-gray-100 p-1 rounded-sm"
                      >
                        User
                      </div>
                      <div
                        onClick={() => selectRole("Barber")}
                        className="cursor-pointer hover:bg-gray-100 p-1 rounded-sm"
                      >
                        Barber
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Div will pop up when barber is selected */}
            <div
              className={
                selectedRole == "Barber" ? "flex flex-col gap-3" : "hidden"
              }
            >
              <div className="flex flex-col mt-1">
                <p className="font-[NeueMontreal-Medium] text-sm pb-1">
                  {" "}
                  Years of Experience{" "}
                </p>
                <input
                  className="bg-[#F5F5F5] rounded-md px-4 py-2"
                  type="number"
                  placeholder="3 Years"
                  onChange={(e) => setExp(e.target.value)}
                />
              </div>
              <div className="flex flex-col mt-1">
                <p className="font-[NeueMontreal-Medium] text-sm pb-1">
                  {" "}
                  Barbershop Name{" "}
                </p>
                <input
                  className="bg-[#F5F5F5] rounded-md px-4 py-2"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setBarbershopName(e.target.value)}
                />
              </div>
              <div className="flex flex-col mt-1">
                <p className="font-[NeueMontreal-Medium] text-sm pb-1">
                  {" "}
                  Address{" "}
                </p>
                <input
                  className="bg-[#F5F5F5] rounded-md px-4 py-2"
                  type="text"
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="flex flex-col mt-1">
                <p className="font-[NeueMontreal-Medium] text-sm pb-1">
                  {" "}
                  City{" "}
                </p>
                <input
                  className="bg-[#F5F5F5] rounded-md px-4 py-2"
                  type="text"
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="flex flex-col mt-1">
                <p className="font-[NeueMontreal-Medium] text-sm pb-1">
                  {" "}
                  State{" "}
                </p>
                <div
                  onClick={toggleDropDown3}
                  className="bg-[#f5f5f5] flex justify-between items-center rounded-md px-4 py-2 cursor-pointer text-[#7c7d86]"
                >
                  {state}
                  <img
                    className={`w-[25px] m-0 p-0 transition-transform duration-500 ${
                      isDropDownOpen3 ? "rotate-180" : "rotate-0"
                    }`}
                    src="./icons/dropdown.png"
                    alt="Drop Down Icon"
                  />
                </div>
                {isDropDownOpen3 && (
                  <div
                    className={`rounded-md border-gray-300 bg-white p-3 absolute z-30 shadow-md transition-all duration-700 h-64 overflow-scroll ${
                      isDropDownOpen3
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    <div>
                      {states.map((state) => (
                        <div
                          key={state}
                          onClick={() => setStateMenu(state)}
                          className="cursor-pointer hover:bg-gray-100 p-1 rounded-sm"
                        >
                          {state}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col mt-1">
                <p className="font-[NeueMontreal-Medium] text-sm pb-1"> ZIP </p>
                <input
                  className="bg-[#F5F5F5] rounded-md px-4 py-2"
                  type="number"
                  placeholder="ZIP"
                  onChange={(e) => setZIP(e.target.value)}
                />
              </div>
            </div>
            {/* security q div */}
            <div className="flex flex-col mt-1">
              <div className="flex flex-col">
                <p className="font-[NeueMontreal-Medium] text-sm pb-1">
                  {" "}
                  Security Question{" "}
                </p>
                <div className="relative">
                  <div
                    onClick={toggleDropDown2}
                    className="bg-[#f5f5f5] flex justify-between items-center rounded-md px-4 py-2 cursor-pointer text-[#7c7d86]"
                  >
                    {securityQuestion}
                    <img
                      className={`w-[25px] m-0 p-0 transition-transform duration-500 ${
                        isDropDownOpen2 ? "rotate-180" : "rotate-0"
                      }`}
                      src="./icons/dropdown.png"
                      alt="Drop Down Icon"
                    />
                  </div>
                  {isDropDownOpen2 && (
                    <div
                      className={`rounded-md border-gray-300 bg-white p-3 absolute top-[45px] w-[100%] shadow-md transition-all duration-700 ${
                        isDropDownOpen2
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      <div
                        onClick={() =>
                          selectQuestion("Where city were you born in?")
                        }
                        className="cursor-pointer hover:bg-gray-100 p-1 rounded-sm"
                      >
                        Where city were you born in?
                      </div>
                      <div
                        onClick={() =>
                          selectQuestion(
                            "What is the name of your third grade teacher?"
                          )
                        }
                        className="cursor-pointer hover:bg-gray-100 p-1 rounded-sm"
                      >
                        What is the name of your third grade teacher?
                      </div>
                      <div
                        onClick={() =>
                          selectQuestion("What is your mother's maiden name?")
                        }
                        className="cursor-pointer hover:bg-gray-100 p-1 rounded-sm"
                      >
                        What is your mother&#39;s maiden name?
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-1">
              <p className="font-[NeueMontreal-Medium] text-sm pb-1">
                {" "}
                Security Answer{" "}
              </p>
              <input
                className="bg-[#F5F5F5] rounded-md px-4 py-2"
                type="text"
                placeholder="Answer"
                onChange={(e) => setSecurityAnswer(e.target.value)}
              />
            </div>
            <div className="flex flex-col mt-1 text-center">
              <button
                className="bg-[#1500FF] text-white py-4 rounded-md font-[NeueMontreal-Medium] text-sm hover:bg-black active:bg-[#1500FF] cursor-pointer"
                onClick={handleSubmit}
              >
                CREATE ACCOUNT
              </button>
              <p className="font-[NeueMontreal-Medium] text-sm pt-2">
                {" "}
                Already have an account?
                <Link
                  className="text-[#1500FF] active:text-[#3F5CFF]"
                  href={"./login"}
                >
                  {" "}
                  Login{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-6/10">
        <img
          className="w-[1000px] h-full object-cover"
          src="./loginregister-img.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Register;
