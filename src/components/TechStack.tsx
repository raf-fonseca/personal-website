import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Python",
      src: "/images/logos/python.png",

      className: "h-10 w-10",
    },
    {
      title: "Javascript",
      src: "/images/logos/javascript.png",

      className: "h-10 w-10",
    },
    {
      title: "Typescript",
      src: "/images/logos/typescript.png",

      className: "h-10 w-10",
    },
    {
      title: "C",
      src: "/images/logos/C.png",

      className: "h-10 w-10",
    },
    {
      title: "C++",
      src: "/images/logos/C++.png",

      className: "h-10 w-10",
    },
    {
      title: "Java",
      src: "/images/logos/java.png",

      className: "h-10 w-10",
    },
    {
      title: "Next.js",
      src: "/images/logos/next.png",

      className: "h-10 w-14",
    },
    {
      title: "React",
      src: "/images/logos/react.png",

      className: "h-10 w-10",
    },

    {
      title: "Mongodb",
      src: "/images/logos/mongodb.png",

      className: "h-12 w-12",
    },
    {
      title: "Prisma",
      src: "/images/logos/prisma.png",

      className: "h-10 w-16",
    },
    {
      title: "Git",
      src: "/images/logos/git.png",

      className: "h-10 w-12",
    },
    {
      title: "NextAuth",
      src: "/images/logos/nextAuth.jpeg",

      className: "h-10 w-12",
    },
    {
      title: "Web3",
      src: "/images/logos/web3.png",

      className: "h-10 w-12",
    },

    {
      title: "Matlab",
      src: "/images/logos/matlab.png",

      className: "h-10 w-10",
    },
    {
      title: "Arduino",
      src: "/images/logos/arduino.png",

      className: "h-10 w-10",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    },
    {
      title: "Figma",
      src: "/images/logos/figma.png",

      className: "h-10 w-8",
    },


  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
