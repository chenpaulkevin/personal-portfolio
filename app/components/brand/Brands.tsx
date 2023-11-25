"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

function Brands() {
  return (
    <section className="container mx-auto h-screen grid items-center px-6 md:px-8 lg:px-0">
      <div className="grid grid-cols-4 grid-row-6 gap-6 h-full py-6 lg:py-0 lg:h-[90dvh]">
        <div className="row-span-2 col-span-4 lg:col-span-2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500 rounded-2xl flex justify-center items-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl w-5/6 text-secondary text-center font-bold">
            <div className="w-full justify-center flex mb-6">
              <Image
                src="/mark-dark.svg"
                alt="logo mark"
                width={0}
                height={0}
                style={{ width: "52px", height: "auto" }}
              ></Image>
            </div>
            I help brands craft distinct identites
          </h1>
        </div>
        <div className="bg-bento row-span-4 col-span-4 lg:col-span-2 lg:row-span-6 relative rounded-2xl">
          <div className="z-10 absolute flex bottom-4 left-4 text-primary">
            <div className="w-max h-min text-2xl bg-secondary py-2 px-4 rounded-full flex items-center justify-center gap-2">
              Apex Code PH <ArrowUpRightIcon className="text-primary h-5 w-5" />
            </div>
          </div>
          <div className="absolute z-0 inset-0 rounded-2xl">
            <Image
              className="z-0 rounded-2xl"
              src="/Brick-Sign.png"
              alt="Philbio website background"
              fill
              style={{
                objectFit: "cover",
              }}
            ></Image>
          </div>
        </div>
        <div className="bg-bento row-span-4 col-span-4 md:col-span-2 lg:col-span-1 lg:row-span-2 relative rounded-2xl">
          <div className="z-10 absolute flex bottom-4 left-4 text-primary">
            <div className="w-max h-min text-2xl bg-secondary py-2 px-4 rounded-full flex items-center justify-center gap-2">
              Apex Code PH <ArrowUpRightIcon className="text-primary h-5 w-5" />
            </div>
          </div>
          <div className="absolute inset-0 rounded-2xl">
            <Image
              className="z-0 rounded-2xl"
              src="/philbio.jpg"
              alt="Philbio website background"
              fill
              style={{
                objectFit: "cover",
              }}
            ></Image>
          </div>
        </div>
        <div className="bg-bento row-span-4 col-span-4 md:col-span-2 lg:col-span-1 lg:row-span-2 relative rounded-2xl">
          <div className="z-10 absolute flex bottom-4 left-4 text-primary">
            <div className="w-max h-min text-2xl bg-secondary py-2 px-4 rounded-full flex items-center justify-center gap-2">
              Apex Code PH <ArrowUpRightIcon className="text-primary h-5 w-5" />
            </div>
          </div>
          <div className="absolute inset-0 rounded-2xl">
            <Image
              className="z-0 rounded-2xl ml-1"
              src="/iphone-mockup.png"
              alt="Philbio website background"
              fill
              style={{
                objectFit: "fill",
              }}
            ></Image>
          </div>
        </div>
        <div className="bg-bento row-span-4 col-span-4 lg:col-span-2 lg:row-span-2 rounded-2xl relative">
          <div className="z-10 absolute flex bottom-4 left-4 text-primary">
            <div className="w-max h-min text-2xl bg-secondary py-2 px-4 rounded-full flex items-center justify-center gap-2">
              Apex Code PH <ArrowUpRightIcon className="text-primary h-5 w-5" />
            </div>
          </div>
          <div className="absolute inset-0 rounded-2xl">
            <Image
              className="z-0 rounded-2xl"
              src="/apexcode.png"
              alt="Apex Code Shop Mockup"
              fill
              style={{
                objectFit: "cover",
              }}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
