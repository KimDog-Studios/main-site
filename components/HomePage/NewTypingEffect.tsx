'use client';

import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter"

function page() {
    const [text, count] = useTypewriter({
    words: [
        "KimDog's Modding Site",
        "We aim to keep all of our Mods Upto Date",
        "Report Bugs/Errors into Our Discord Server"
    ],
    loop: true,
    delaySpeed: 3000
    })
  return (
    <div>
        <h1 className="text-4xl font-bold">
        <span>{text}</span>
        <Cursor cursorColor="#FF0000"/>
        </h1>
        
    </div>
  )
}

export default page
