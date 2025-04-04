// import { loggedInData } from "@/utils/DataServices";
import { editAccount, getLoggedInUserData } from "@/utils/DataServices";
import { IUserProfileInfo } from "@/utils/Interfaces";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserProfileCard = (data: IUserProfileInfo) => {
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [isDropDownOpen2, setDropDownOpen2] = useState(false);
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [accountType, setAccountType] = useState(data.accountType);
  const [shopName, setShopName] = useState(data.shopName);
  const [address, setAddress] = useState(data.address);
  const [city, setCity] = useState(data.city);
  const [state, setState] = useState(data.state);
  const [zip, setZip] = useState(data.zip);
  const [bio, setBio] = useState(data.bio);

  const router = useRouter();

  const toggleDropDown = () => {
    setDropDownOpen(!isDropDownOpen);
  };
  const toggleDropDown2 = () => {
    setDropDownOpen2(!isDropDownOpen2);
  };

  const enableEdit = () => {
    setEdit(true);
    setDropDownOpen(false);
  };

  const setType = (role: string) => {
    setAccountType(role);
    setDropDownOpen(false);
  };

  const cancelEdit = () => {
    setEdit(false);
    // reset input fields
  };

  const saveEdits = async () => {
    let newEditedUser: IUserProfileInfo = {
      id: 0,
      username: data.username,
      salt: data.salt,
      hash: data.hash,
      date: data.date,
      accountType: accountType,
      name: name,
      rating: data.rating,
      ratingCount: data.ratingCount,
      followers: data.followers,
      following: data.following,
      followerCount: data.followerCount,
      followingCount: data.followingCount,
      securityQuestion: data.securityQuestion,
      securityAnswer: data.securityAnswer,
      bio: bio,
      email: email,
      shopName: shopName,
      address: address,
      city: city,
      state: state,
      zip: zip,
      pfp: data.pfp,
      isDeleted: data.isDeleted,
    };
    // console.log(newEditedUser);
    let result = await editAccount(newEditedUser);
    if (result) {
      console.log("Editing Success");
      sessionStorage.setItem("AccountInfo", JSON.stringify(newEditedUser));
      router.push("/user-profile");
      cancelEdit();
    } else {
      alert("Editing Failed");
    }
    await getLoggedInUserData(data.username);
  };

  const logout = () => {
    sessionStorage.removeItem("AccountInfo");
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <section className="font-[NeueMontreal-Medium]">
      {edit ? (
        <div className="flex flex-col gap-1 bg-[#F5F5F5] rounded-b-sm p-5">
          <button
            className="w-fit cursor-pointer text-slate-500 hover:text-black text-2xl px-3"
            onClick={cancelEdit}
          >
            X
          </button>
          <div className="flex justify-center">
            <h2 className="text-2xl">Edit Profile</h2>
          </div>
          <div className="flex relative justify-center">
            <img
              src={data.pfp}
              alt={`${data.username} profile pic`}
              className="w-28 h-28 rounded-[50%]"
            />
            <label
              htmlFor="pictureSelect"
              className="absolute top-[35%] cursor-pointer"
            >
              <img
                src="/icons/imgHover.png"
                alt="edit logo image"
                className="w-10 h-10 opacity-50 hover:opacity-100 drop-shadow-2xl"
              />
            </label>

            <input
              type="file"
              id="pictureSelect"
              accept="image/*,.pdf"
              className="hidden"
            />
          </div>
          <div className="grid grid-cols-[1fr_2fr_1fr] gap-2 grid-rows-[1fr]">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <p className="font-[NeueMontreal-Medium] text-sm pb-1">
                  {" "}
                  Username{" "}
                </p>
                <input
                  className="bg-[#f0ebeb] p-2 rounded-sm"
                  type="text"
                  placeholder="Username"
                  value={data.username}
                  disabled
                />
              </div>
              <div className="flex flex-col">
                <p className="font-[NeueMontreal-Medium] text-sm pb-1">
                  {" "}
                  Name{" "}
                </p>
                <input
                  className="bg-white p-2 rounded-sm"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <p className="font-[NeueMontreal-Medium] text-sm pb-1">
                  {" "}
                  Email{" "}
                </p>
                <input
                  className="bg-white p-2 rounded-sm"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <p className="font-[NeueMontreal-Medium] text-sm pb-1">
                  {" "}
                  Role{" "}
                </p>
                <div className="relative">
                  <div
                    onClick={toggleDropDown}
                    className="bg-white flex justify-between items-center rounded-md px-4 py-2 cursor-pointer text-black"
                  >
                    {accountType}
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
                      className={`rounded-md border-gray-300 bg-white p-3 absolute top-[45px] w-[100%] shadow-md transition-all duration-700 ${
                        isDropDownOpen
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      <div
                        onClick={() => setType("User")}
                        className="cursor-pointer hover:bg-gray-100 p-1 rounded-sm"
                      >
                        User
                      </div>
                      <div
                        onClick={() => setType("Barber")}
                        className="cursor-pointer hover:bg-gray-100 p-1 rounded-sm"
                      >
                        Barber
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <p className="font-[NeueMontreal-Medium] text-sm pb-1 hover:text-slate-500 cursor-pointer">
                  <Link href={"/forgot-password"}>Change your Password</Link>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-[NeueMontreal-Medium] text-sm"> Bio </p>

              <textarea
                className="bg-white p-2 rounded-sm h-full"
                placeholder="Bio Here..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
            </div>
            <div className="flex flex-col">
              {data.accountType == "Barber" || accountType == "Barber" ? (
                <div className="flex flex-col gap-1">
                  <p className="font-[NeueMontreal-Medium] text-sm pb-1">
                    {" "}
                    Location{" "}
                  </p>
                  <div className="flex flex-col gap-5">
                    <input
                      className="bg-white p-2 rounded-sm"
                      type="text"
                      placeholder="Barbershop Name"
                      value={shopName}
                      onChange={(e) => setShopName(e.target.value)}
                    />
                    <input
                      className="bg-white p-2 rounded-sm"
                      type="text"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <input
                      className="bg-white p-2 rounded-sm"
                      type="text"
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                    {/* <input
                      className="bg-white p-2 rounded-sm"
                      type="text"
                      placeholder="State"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    /> */}
                    <div className="flex flex-col">
                    <div
                      onClick={toggleDropDown}
                      className="bg-white flex justify-between items-center rounded-md px-4 py-2 cursor-pointer text-black"
                    >
                      {state}
                      <img
                        className={`w-[25px] m-0 p-0 transition-transform duration-500 ${
                          isDropDownOpen ? "rotate-180" : "rotate-0"
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
                          onClick={() => setType("User")}
                          className="cursor-pointer hover:bg-gray-100 p-1 rounded-sm"
                        >
                          User
                        </div>
                        <div
                          onClick={() => setType("Barber")}
                          className="cursor-pointer hover:bg-gray-100 p-1 rounded-sm"
                        >
                          Barber
                        </div>
                      </div>
                    )}
                    </div>
                    <input
                      className="bg-white p-2 rounded-sm"
                      type="text"
                      placeholder="ZIP"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <button
            className="bg-[#1500FF] text-white py-2 mt-2 rounded-md font-[NeueMontreal-Medium] text-sm hover:bg-black active:bg-[#1500FF] cursor-pointer"
            onClick={saveEdits}
          >
            SAVE
          </button>
        </div>
      ) : (
        <div className="flex gap-2 bg-[#F5F5F5] rounded-b-sm p-5">
          <div className="w-[60%] sm:w-[70%] flex flex-col sm:gap-2 gap-5">
            <div className="flex sm:gap-7 gap-3 h-[125px]">
              <img
                src={data.pfp}
                alt={`${data.username} profile pic`}
                className="sm:w-28 sm:h-28 h-16 w-16 rounded-[50%]"
              />
              <div className="flex flex-col sm:gap-1">
                <h4 className="text-slate-500 sm:text-sm text-xs">
                  Joined: {data.date}
                </h4>
                <div className="flex gap-3 place-items-center">
                  <h2 className="sm:text-3xl text-xl h-fit">{data.username}</h2>
                  <h3 className="sm:text-base text-xs text-slate-400">
                    {data.accountType}
                  </h3>
                  <div
                    className={
                      data.accountType == "Barber" ? "flex gap-1" : "hidden"
                    }
                  >
                    <img
                      className="w-[15px] h-[15px] hover:drop-shadow-xl"
                      src="./icons/star-empty.png"
                      alt="Star Icon"
                    />
                    <img
                      className="w-[15px] h-[15px]"
                      src="./icons/star-empty.png"
                      alt="Star Icon"
                    />
                    <img
                      className="w-[15px] h-[15px]"
                      src="./icons/star-empty.png"
                      alt="Star Icon"
                    />
                    <img
                      className="w-[15px] h-[15px]"
                      src="./icons/star-empty.png"
                      alt="Star Icon"
                    />
                    <img
                      className="w-[15px] h-[15px]"
                      src="./icons/star-empty.png"
                      alt="Empty Star Icon"
                    />
                  </div>
                </div>
                <h2>{data.name}</h2>
                <div className="sm:text-base text-xs flex sm:gap-12 gap-2">
                  <h3>{data.followerCount} Followers</h3>
                  <h3>{data.followingCount} Followers</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-white p-2 rounded-sm w-full h-[150px]">
              <h3>Bio</h3>
              <h3>{data.bio}</h3>
            </div>
          </div>
          <div className="w-[40%] sm:w-[30%] flex flex-col sm:gap-2 gap-5">
            <div className=" flex flex-col gap-1 h-[125px] place-content-end">
              {/* <button className="bg-black w-full text-white font-[NeueMontreal-Regular] py-1 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75">
                User Menu
              </button> */}
              <button
                className="bg-black w-full text-white font-[NeueMontreal-Regular] py-1 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75"
                onClick={toggleDropDown}
              >
                {isDropDownOpen ? "Close Menu" : "User Menu"}
              </button>
              {isDropDownOpen && (
                <div
                  className={`rounded-md border-gray-300 bg-white p-2 absolute top-[175px] w-[28%] shadow-md transition-all duration-700 flex flex-col gap-2 ${
                    isDropDownOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  <button
                    className="bg-black w-full text-white font-[NeueMontreal-Regular] py-1 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75"
                    onClick={enableEdit}
                  >
                    Edit Profile
                  </button>
                  <button
                    className="bg-black w-full text-white font-[NeueMontreal-Regular] py-1 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75"
                    onClick={logout}
                  >
                    Log Out
                  </button>
                  <button className="bg-red-600 w-full text-white font-[NeueMontreal-Regular] py-1 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75">
                    Delete Account
                  </button>
                </div>
              )}
              <button className="bg-black w-full text-white font-[NeueMontreal-Regular] py-1 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75">
                My Schedule
              </button>
            </div>
            <div
              className={
                data.accountType == "Barber"
                  ? "flex flex-col bg-white p-2 rounded-sm w-full h-[150px]"
                  : "hidden"
              }
            >
              <h3>Location</h3>
              <h2 className="text-lg">{data.shopName}</h2>
              <h2>{data.address}</h2>
              <div className="flex gap-1">
                <h2>{data.city},</h2>
                <h2>{data.state}</h2>
              </div>
              <h2>{data.zip}</h2>
            </div>
          </div>
        </div>
      )}

      {/* div when edit is selected */}
    </section>
  );
};

export default UserProfileCard;
