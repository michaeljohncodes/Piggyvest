import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/reuseable/Button";
import heroimage from "../assets/girl.png";
// import iphonelogo from "../assets/apple-logo";
// import applelogo from "../assets/apple-logo2.png";

const Home = () => {
  return (
    <div className=" max-w-[1280px] px-10 mx-auto my-20 flex justify-between">
      <main>
        <div className="">
          <div className=" my-10">
            <Link to="/">
              <Button
                icon="icon"
                title="The 2024 PiggyVest Savings Report"
                Color="#fff"
                bgColor="#0089FF"
                borderRadius="30px"
              />
            </Link>
          </div>

          <h1 className=" text-5xl font-bold my-10 w-3/4">
            {" "}
            The Better Way to Save & Invest
          </h1>
          <p className="w-3/4 my-10">
            Piggyvest helps over 5 million customers achieve their financial
            goals by helping them save and invest with ease
          </p>

          <div className=" flex gap-3 my-4">
            <Button
              icon=""
              title="Get on iPhone"
              bgColor="#122231"
              Color="#fff"
              borderRadius="10px"
            />

            <Button
              icon="icon"
              title="Get on Android"
              bgColor="#122231"
              Color="#fff"
              borderRadius="10px"
            />
          </div>
        </div>
      </main>

      <main>
        <div>
          <img src={heroimage} alt="girl" />
        </div>
      </main>
    </div>
  );
};

export default Home;
