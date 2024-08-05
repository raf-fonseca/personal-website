"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://res.cloudinary.com/dkhbzvmeq/image/upload/v1720018876/FullSizeRender_batcsb.png",
    "https://res.cloudinary.com/dkhbzvmeq/image/upload/v1720019076/fyiEvent_qudsg8.jpg",
    "https://res.cloudinary.com/dkhbzvmeq/image/upload/v1720019275/IMG_1652_p6yh6i.jpg",
    "https://res.cloudinary.com/dkhbzvmeq/image/upload/v1720020274/IMG_7771_1_ced262.png",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        {/* 
        <Image
          src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
          width={200}
          height={400}
          alt="about"
          className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        />
        <Image
          src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
          width={200}
          height={400}
          alt="about"
          className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        />
        <Image
          src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          width={200}
          height={400}
          alt="about"
          className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        />
        <Image
          src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          width={200}
          height={400}
          alt="about"
          className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, my name is Rafael Fonseca - a passionate founder, developer,
          and tech enthusiast. Welcome to my personal website!
        </Paragraph>
        <Paragraph className=" mt-4">
          My coding journey began when I moved to Canada from Brazil in 2015. It started
          with basic mods for Minecraft and a platform called CodeMonkey. Now being a 
          Software Developer, I thrive on problem solving through lines of code. My goal is 
          is to create software that will benefit society and solve problems.
        </Paragraph>

        <Paragraph className=" mt-4">
          But my journey does not stop at coding. I am also passionate about 
          self growth. This includes activites that will improve my mental toughness
          such as running when I want it the least and the gym.
        </Paragraph>
        <Paragraph className=" mt-4">
          What sets me apart is my passion and drive for success. 
        </Paragraph>
      </div>
    </div>
  );
}
