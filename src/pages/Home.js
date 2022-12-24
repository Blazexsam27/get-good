import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import FeatureProducts from "../components/FeatureProducts";

function Home() {
  const data = {
    title: "GET GOOD",
    desc: `From groceries to hardwares get your goods at one place
    at most discounted and reasonable prices. GET GOOD brings you best
    products and amazing deals so you can the best.
    `,
  };
  return (
    <>
      <HeroSection data={data} />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
}

export default Home;
