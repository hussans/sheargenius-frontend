"use client"

import { createAccount } from '@/utils/DataServices';
import { INewUser } from '@/utils/Interfaces';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const register = () => {
    const [isDropDownOpen, setDropDownOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState("User / Barber");
    const[email,setEmail] = useState<string>("")
    const[password,setPassword] = useState<string>("")
    const[name,setName] = useState<string>("")
    const[username,setUsername] = useState<string>("")
    const[exp,setExp] = useState<string>("")
    const router = useRouter()
    
    const[newUser, setNewUser] = useState<INewUser>({
        id: 0,
        username: '',
        accountType: '',
        name: '',
        bio: '',
        email: '',
        shopName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        pfp: '',
        isDeleted: false
    })
    const toggleDropDown = () => {
        setDropDownOpen(!isDropDownOpen);
    }

    const selectRole = (role: string) => {
        setSelectedRole(role);
        setDropDownOpen(false);
    }

    //   async?
  const handleSubmit = async() => {
    let userData = {
        username: username,
        password: password
      }
    let newEditedUser = {
        id:0,
        username:username,
        accountType:selectedRole,
        name:name,
        bio:`${exp} years of experience.`,
        email:email,
        shopName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        pfp: '',
        isDeleted: false
    }
    setNewUser(newEditedUser)
    console.log("create account attempted")
    let result = await createAccount(userData)
    result ? console.log("Account Created") : alert("Username already exists...")
    router.push("/explore")
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
                            <input className="bg-[#F5F5F5] rounded-md p-4" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-[NeueMontreal-Medium] text-sm pb-1"> Username </p>
                            <input className="bg-[#F5F5F5] rounded-md p-4" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-[NeueMontreal-Medium] text-sm pb-1"> Email </p>
                            <input className="bg-[#F5F5F5] rounded-md p-4" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-[NeueMontreal-Medium] text-sm pb-1"> Password </p>
                            <input className="bg-[#F5F5F5] rounded-md p-4" type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="flex flex-col mt-1">
                        <div className="flex flex-col">
                            <p className="font-[NeueMontreal-Medium] text-sm pb-1"> Role </p>
                            <div className="relative">
                                <div 
                                onClick={toggleDropDown}
                                className="bg-[#f5f5f5] flex justify-between items-center rounded-md px-4 py-2 cursor-pointer text-[#7c7d86]"> 
                                    {selectedRole}
                                    <img className={`w-[25px] m-0 p-0 transition-transform duration-500 ${isDropDownOpen ? "rotate-180" : "rotate-0"}`} src="./icons/dropdown.png" alt="Drop Down Icon" />
                                </div>
                                {isDropDownOpen && (
                                <div className={`rounded-md border-gray-300 bg-white p-3 absolute top-[45px] w-[100%] shadow-md transition-all duration-700 ${isDropDownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
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
                            <input className="bg-[#F5F5F5] rounded-md px-4 py-2" type="text" placeholder="3 Years" onChange={(e) => setExp(e.target.value)}/>
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