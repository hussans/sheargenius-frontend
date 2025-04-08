'use client'
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

const stylesMore = () => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div>
        <nav>
            <Navbar setSearchActive={setSearchActive} />
        </nav>
        <header>
            <Header 
            searchActive={searchActive} 
            setSearchActive={setSearchActive} 
            title="More Styles"
            description="More styles to choose from"   
            />
        </header>
    </div>
  );
};

export default stylesMore;
