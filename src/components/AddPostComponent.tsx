"use client";
import {
  addPostItem,
  fetchInfo,
  getAllPosts,
  getFormattedDate,
  getToken,
} from "@/utils/DataServices";
import { IHaircutInterface } from "@/utils/Interfaces";
import React, { useEffect, useState } from "react";

const categoryTitles = async () => {
  const response = await fetch("/Haircuts.json");
  const data = await response.json();
  const titles: string[] = [];
  data.haircuts.map((haircut: IHaircutInterface) => {
    titles.push(haircut.name);
  });
  return titles;
};

const AddPostComponent = () => {
  const [dropDown, toggleDropDown] = useState(false);
  const [style, setStyle] = useState<string>("Drop Fade");
  const [caption, setCaption] = useState<string>("");
  const [image, setImage] = useState<string>("/nofileselected.png");
  const [haircuts, setHaircuts] = useState<string[]>([]);
  // const [post, setPost] = useState<IPostItems>({
  //   id: 0,
  //   userId: 0,
  //   publisherName: "",
  //   date: "",
  //   caption: caption,
  //   image: image,
  //   likes: 0,
  //   category: style,
  //   isPublished: true,
  //   isDeleted: false,
  //   comments: [
  //     {
  //       id: 0,
  //       username: "",
  //       comment: "",
  //     },
  //   ],
  // });

  const handleSubmit = async () => {
    console.log(fetchInfo())
    const newPost = {
      id: 0,
      userId: fetchInfo().id,
      publisherName: fetchInfo().username,
      date: getFormattedDate(),
      caption: caption,
      image: image,
      likes: 0,
      category: style,
      isPublished: true,
      isDeleted: false,
      comments: [
        {
          id: 0,
          username: "",
          comment: "",
        },
      ],
    };
    // setPost(newPost);
    console.log(getToken());
    await addPostItem(newPost, getToken());
    console.log(await getAllPosts());
    // console.log(await getAllPosts(getToken()));
    window.location.reload();
  };
  useEffect(() => {
    const fetchTitles = async () => {
      setHaircuts(await categoryTitles());
    };
    fetchTitles();
  }, [style]);

  const handleStyle = (cut:string) => {
    setStyle(cut)
    toggleDropDown(false)
  }

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = e.target.files?.[0];

    if (file) {
      //when this files if turned into a string this on load function will run
      reader.onload = () => {
        setImage(String(reader.result)); //once the file is read we will store the result into our setter function
      };
      reader.readAsDataURL(file); //this converts the file into a bas64-encoded string
    }
  };
  return (
    <div>
      <h2 className="text-center text-2xl">Create Post</h2>
      <div className="flex justify-center place-items-center h-[50vh]">
        <div className="flex w-[70%] flex-col gap-3">
          <div className="flex gap-3 min-h-[15vh]">
            <div className="w-[40%]">
              <h4>Image</h4>
              <img
                src={image}
                alt="new post picture"
                className="aspect-square border border-slate-300"
              />
            </div>
            <div className="w-[60%]">
              <div className="flex justify-between">
                <h4>Caption</h4>
                <h5 className="text-sm">700 characters max</h5>
              </div>

              <textarea
                name="caption"
                id="postCaption"
                maxLength={700}
                placeholder="Caption..."
                className="bg-[#f5f5f5] p-2 w-full"
                onChange={(e) => setCaption(e.target.value)}
              ></textarea>
            </div>
          </div>

          <label htmlFor="pictureSelect" className="cursor-pointer">
            <div className="bg-black w-full text-white font-[NeueMontreal-Regular] py-1 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75 text-center">
              Upload Image
            </div>
          </label>

          <input
            type="file"
            id="pictureSelect"
            accept="image/*,.pdf"
            className="hidden"
            onChange={handleImage}
          />

          <div>
            <h4>Category/Style</h4>

            <div
              onClick={() => toggleDropDown(!dropDown)}
              className="bg-[#f5f5f5] flex justify-between items-center rounded-md px-4 py-2 cursor-pointer text-black"
            >
              {style}
              <img
                className={`w-[25px] m-0 p-0 transition-transform duration-500 ${
                  dropDown ? "rotate-180" : "rotate-0"
                }`}
                src="./icons/dropdown.png"
                alt="Drop Down Icon"
              />
            </div>
            {dropDown && (
              <div
                className={`rounded-md border-gray-300 bg-white p-3 absolute z-30 shadow-md transition-all duration-700 h-64 overflow-y-scroll w-[50%] ${
                  dropDown ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div>
                  {haircuts.map((cut) => (
                    <div
                      key={cut}
                      onClick={() => handleStyle(cut)}
                      className="cursor-pointer hover:bg-gray-100 p-1 rounded-sm"
                    >
                      {cut}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button
            className="bg-[#1500FF] text-white py-2 mt-2 rounded-md font-[NeueMontreal-Medium] text-sm hover:bg-black active:bg-[#1500FF] cursor-pointer"
            onClick={handleSubmit}
          >
            POST
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPostComponent;
