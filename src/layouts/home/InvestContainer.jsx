import React from "react";

const InvestContainer = () => {
  return (
    <div className=" w-full mx-auto flex flex-wrap justify-between items-center bg-white text-center ">
      <section className=" my-40 mx-auto flex flex-col items-center ">
        <div className=" text-center">
          <h1 className=" font-bold text-5xl my-[10px]">
            Diverse ways to Invest
          </h1>
          <h3 className=" text-2xl my-[20px]">
            Grow your money and invest for your future confidently.
          </h3>
        </div>
        <div className=" h-[500px] w-[1166px] my-[30px] pt-[50px] px-[50px] overflow-hidden flex max-lg:max-w-[800px] justify-between bg-[#7913E5] rounded-[40px] text-white">
          <div className=" w-[60%] flex flex-col gap-[20px] justify-between ">
            <div className=" text-left flex flex-col justify-between gap-[30px]">
              <h2 className=" font-medium text-[35px] text-white">
                Earn Up to 35% returns
              </h2>
              <p className=" w-[55%] text-[21px]">
                Invest securely and confidently on the go. Grow your money
                confidently by investing in pre-vetted investment opportunities.
              </p>
            </div>
            <div className=" pb-[40px] flex gap-[20px] font-bold">
              <img src="./images/white_curved_arrow.svg" />
              <button>Learn about Investments</button>
            </div>
          </div>
          <div className=" w-[40%] flex items-end ">
            <img
              src={"/images/investment_phone_mockup.png"}
              alt=""
              style={{ scale: "100%" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestContainer;
