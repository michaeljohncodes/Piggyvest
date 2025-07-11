import React from "react";

const InvestContainer = () => {
  return (
    <div className=" max-w-[1440px] mx-auto flex justify-between items-center bg-white text-center ">
      <section className=" my-40 mx-auto flex flex-col items-center ">
        <div className=" text-center">
          <h1 className=" font-bold text-5xl my-[10px]">
            Diverse ways to Invest
          </h1>
          <h3 className=" text-2xl my-[10px]">
            Grow your money and invest for your future confidently.
          </h3>
        </div>
        <div className=" h-[500px] w-[1200px] my-[40px] pt-[50px] px-[50px] overflow-hidden flex justify-between bg-violet-600 rounded-[30px] text-white">
          <div className=" w-[50%] flex flex-col justify-between items-start ">
            <div className=" text-left flex flex-col justify-between gap-[15px]">
              <h2 className=" font-medium text-[35px] text-white">
                Earn Up to 35% returns
              </h2>
              <p className=" w-[60%] text-[21px]">
                Invest securely and confidently on the go. Grow your money
                confidently by investing in pre-vetted investment opportunities.
              </p>
            </div>
            <div className=" pb-[40px] flex gap-[30px]">
              <img />
              <button>Learn about Investments</button>
            </div>
          </div>
            <img
              src={"/images/investment_phone_mockup.png"}
              alt=""
              style={{scale:"100%"}}
            />
        </div>
      </section>
    </div>
  );
};

export default InvestContainer;
