"use client";
import Navbar from "@/components/Navbar";
import StylistAIComponent from "@/components/StylistAIComponent";
import React, { useState } from "react";

const Explore = () => {
  const [searchActive, setSearchActive] = useState(false);
  console.log(searchActive);
  return (
    <div className="min-h-screen">
      <Navbar setSearchActive={setSearchActive} />
      <StylistAIComponent />
    </div>
  );
};

export default Explore;
