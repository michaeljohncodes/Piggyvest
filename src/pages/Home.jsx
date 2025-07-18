import React from "react";
import SavingsContainer from "../layouts/home/SavingsContainer";
import InvestContainer from "../layouts/home/InvestContainer";
import SaverContainer from "../layouts/home/SaverContainer";
import TestimonialContainer from "../layouts/home/TestimonialContainer";
import SecurityContainer from "../layouts/home/SecurityContainer";
import Hero from "../layouts/home/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <SecurityContainer />
      <SavingsContainer />
      <InvestContainer />
      <SaverContainer />
      <TestimonialContainer />
    </div>
  );
};

export default Home;
