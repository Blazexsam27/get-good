import React from "react";
import HeroSection from "../components/HeroSection";
import { useProductContext } from "../context/productContext";

function About() {
  const myName = useProductContext();
  const data = {
    title: `ABOUT ${myName}`,
    desc: `GET GOOD is an e-commerce website which provide the best products
    and deals to the end user. Built using some of the most popular technologies
    to bring the user a simple but awesome experience.`,
  };
  return <HeroSection data={data} />;
}

export default About;
