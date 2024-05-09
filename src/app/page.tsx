"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const x = () => {
    useEffect(() => {
      const keyDownHandler = (e) =>
        console.log("Your number is ${e.code + 7}. ");
      document.addEventListener("keydown", keyDownHandler);
      return () => {
        document.removeEventListener("keydown", keyDownHandler);
      };
    }, []);
  };

  return (
    <main className="flex min-h-screen justify-center bg-green-500">
      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center w-screen">
          <div className="text-white">Input a number below</div>
          <input
            type="number"
            onKeyDown={keyDownHandler}
            className="flex items-center justify-center rounded-lg outline-none w-2/4"
          ></input>
        </div>
      </div>
    </main>
  );
}
