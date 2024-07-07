import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I'm Rafael</Heading>
      <Paragraph className="max-w-xl mt-4">
        I'm a Software Developer studying Computer Engineering at 
        the <Highlight>University of Waterloo</Highlight>. My passion for 
        learning has led me to explore web development, machine learning, and Web3.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-10 mb-4"
      >
        What I've been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
