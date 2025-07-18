import React from "react";

const Build = () => {
  return (
    <main className=" bg-[#145ad3] text-white overflow-hidden h-[280px] flex items-center">
      <div className=" max-w-[1200px] mx-auto my-22 flex items-center ">
        <div className=" flex flex-col w-[50%]">
          <h1 className=" text-4xl font-medium w-[70%]">
            Build your savings gradually !
          </h1>

          <p className="w-[70%] mt-[20px]">
            With Piggybank, you can save periodically, automatically or
            manually. You can also save as you go, on your own terms. You're the
            boss of your savings, choose how you want to save.
          </p>
        </div>
        <div className="overflow-hidden w-[55%] contain-content ">
          <img
            src="./images/lady_afro_hair_smile.png"
            alt="girl"
            className=" scale-105"
          />
        </div>
      </div>
    </main>
  );
};

export default Build;
