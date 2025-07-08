import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/reuseable/Button";
import { LuNotebook } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import heroimage from "../assets/girl.png";
import applelogo from "../assets/apple-logo2.png";
import googleplaylogo from "../assets/google-play.png";

const Hero = () => {
  return (
    <div className=" max-w-[1200px] mx-auto my-40 flex justify-between items-center ">
      <main>
        <div className="">
          <div className=" my-10">
            <Link to="/">
              {/* <Button
                icon="icon"
                title="The 2024 PiggyVest Savings Report"
                Color="#fff"
                bgColor="#0089FF"
                borderRadius="30px"
              /> */}
              <main className=" flex w-[350px] h-11 bg-blue-400 text-white items-center justify-center rounded-full font-semibold mb-6  ">
                <LuNotebook />
                <span>The 2024 PiggyVest Savings Report</span>
                <MdKeyboardArrowRight />
              </main>
            </Link>
          </div>

          <h1 className=" text-5xl font-bold my-10 w-3/4">
            The Better Way to Save & Invest
          </h1>
          <p className="w-[350px] my-10">
            Piggyvest helps over 5 million customers achieve their financial
            goals by helping them save and invest with ease
          </p>

          <div className=" flex gap-3 my-4">
            <Button
              icon={
                <img
                  src={applelogo}
                  alt=""
                  style={{ width: "25px", height: "22px", marginLeft: "10px" }}
                />
              }
              title="Get on iPhone"
              bgColor="#122231"
              Color="#fff"
              borderRadius="10px"
            ></Button>

            <Button
              icon={
                <img
                  src={googleplaylogo}
                  alt=""
                  style={{ width: "25px", marginLeft: "10px" }}
                />
              }
              title="Get on Android"
              bgColor="#122231"
              Color="#fff"
              borderRadius="10px"
            ></Button>
          </div>
        </div>
      </main>

      <main className=" items-end">
        <div>
          <img src={heroimage} alt="girl" className=" w-[900px] " />
        </div>
      </main>
    </div>
  );
};

export default Hero;
