import React from "react";
import HeroSection from "../components/HeroSection";

function About() {
  const data = {
    title: `ABOUT GET-GOOD`,
    desc: `GET GOOD is an e-commerce website which provide the best products
    and deals to the end user. Built using some of the most popular technologies
    to bring the user an amazing and awesome experience.`,
  };
  return <HeroSection data={data} />;
}

export default About;
