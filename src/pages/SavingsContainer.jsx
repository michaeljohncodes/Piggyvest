import React from "react";
import { Link } from "react-router-dom";

const SavingsContainer = () => {
  const piggyCard = [
    {
      title: "Automated Saving",
      desc: "Build a dedicated savings faster on your terms, automatically or manually",
      btnTitle: "Piggy bank",
      color: "#0F60B9",
      bgColor: "white",
      arrow: "/images/dark_blue_curved_arrow.svg",
      phoneMockup: "./images/piggybank_phone_mockup.png",
    },
    {
      title: "Fixed Savings",
      desc: "Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit.",
      btnTitle: "Safe Lock",
      bgColor: "white",
      color: "#2295F2",
      arrow: "/images/light_blue_curved_arrow.svg",
      phoneMockup: "./images/safelock_phone_mockup.png",
    },
    {
      title: "Goal-oriented Savings",
      desc: "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
      btnTitle: "Target Savings",
      bgColor: "white",
      color: "#39C277",
      arrow: "/images/green_curved_arrow.svg",
      phoneMockup: "./images/target_savings_phone_mockup.png",
    },
    {
      title: "Flex Naira",
      desc: "Save, transfer, manage, organise, and withdraw your money at any time.",
      btnTitle: "Target Savings",
      color: "#E5489B",
      bgColor: "white",
      arrow: "/images/pink_curved_arrow.svg",
      phoneMockup: "./images/flex_naira_phone_mockup.png",
    },
    {
      title: "Flex Dollar",
      desc: "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
      btnTitle: "Target Savings",
      bgColor: "white",
      color: "#0C1825",
      arrow: "/images/black_curved_arrow.svg",
      phoneMockup: "./images/flex_dollar_phone_mockup.png",
    },
    {
      title: "House Money",
      desc: "Save, transfer, manage, organise, and withdraw your money at any time.",
      btnTitle: "Target Savings",
      bgColor: "white",
      color: "#FF783C",
      arrow: "/images/orange_curved_arrow.svg",
      phoneMockup: "./images/houseMoney_phone_mockup.png",
    },
  ];
  return (
    <div className=" my-20 flex flex-col items-center ">
      <section className=" text-center">
        <h1 className=" font-bold text-5xl my-[20px]">
          Many ways to build your savings
        </h1>
        <p className=" text-2xl my-[40px]">
          Earn 12%-20% when you save with any of these Piggyvest plans.
        </p>
      </section>
      <section className=" flex justify-center max-w-[1440px] flex-wrap bg-[#f2f7f8]">
        {piggyCard?.map((data, i) => (
          <main
            style={{ background: `${data.bgColor}`, borderRadius: "20px" }}
            className=" h-[450px] w-[480px] m-[20px] pt-[30px] pr-[15px] pl-[20px] flex flex-col justify-between overflow-hidden"
            key={i}
          >
            <div className=" h-[50%]">
              <h1
                style={{ color: `${data.color}` }}
                className=" font-bold text-[35px] my-[10px]"
              >
                {data.title}
              </h1>
              <p className=" w-[270px] text-[17px] my-[10px]">{data.desc}</p>
            </div>
            <div
              className="flex justify-between gap-[10] max-h-[60%] "
              style={{ color: `${data.color}` }}
            >
              <div className="flex justify-between items-center pt-[150px] gap-[5px]">
                <img src={data.arrow} alt="" style={{ minwidth: "20%" }} />
                <button className=" text-[13px] font-medium ">
                  {" "}
                  {data.btnTitle}
                </button>
              </div>
              <div className=" max-w-[55%] ">
                <img src={data.phoneMockup} alt="phone mockup" />
              </div>
            </div>
          </main>
        ))}
      </section>
    </div>
  );
};

export default SavingsContainer;
