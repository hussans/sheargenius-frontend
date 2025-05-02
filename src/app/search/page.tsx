"use client";
import { chatBot } from "@/utils/DataServices";
import { IHaircutInterface } from "@/utils/Interfaces";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

export interface IResult {
  response: string;
  index: number;
}

const categoryTitles = async () => {
  const response = await fetch("/Haircuts.json");
  const data = await response.json();
  const titles: string[] = [];
  data.haircuts.map((haircut: IHaircutInterface) => {
    titles.push(haircut.name);
  });
  return titles.join(", ");
};

const Search = () => {
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");
  const [question, setQuestion] = useState<string>("");

  const generateQ = async () => {
    console.log(searchActive);
    setResult("loading...");
    setResult(
      `${await chatBot(
        `Recommend one hairstyle out of these hairstyles (${await categoryTitles()}) from this prompt: "${question}" Keep the answer short, but casual with a brief explanation of why the selected haircut suits their needs. Stringify the response and make it sound natural and remove the quotation marks. When selecting a haircut, use the name verbatim.`
      )} Search for this cut with the search icon above.`
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar setSearchActive={setSearchActive} />
      <div className="mt-12 flex justify-center place-items-center flex-col gap-3">
        <h3>What kind of haircut are you looking for?</h3>
        <input
          className="border-2 rounded-lg w-60 p-1"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <div className="flex justify-center">
          <h3
            className={
              result == "loading..." ? "animate-bounce w-[80%]" : "w-[80%]"
            }
          >
            {result}
          </h3>
        </div>
        <button
          className="border-2 px-2 hover:bg-black hover:text-white cursor-pointer"
          onClick={generateQ}
        >
          Ask!
        </button>
      </div>
    </div>
  );
};

export default Search;
