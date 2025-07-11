import React from "react";
import Hero from "./Hero";
import SavingsContainer from "./SavingsContainer";
import InvestContainer from "./InvestContainer";
import SaverContainer from "./SaverContainer";
import TestimonialContainer from "./TestimonialContainer";
import SecurityContainer from "./SecurityContainer";

const Home = () => {
  return (
    <div>
      <Hero />
      <SecurityContainer />
      <SavingsContainer />
      <InvestContainer />
      <SaverContainer />
      <TestimonialContainer  />
    </div>
  );
};

export default Home;
