import React from "react";

const SaverContainer = () => {
  return (
    <div>
      <section className=" max-w-[800px] mx-auto my-40 flex flex-col gap-[70px] justify-between items-center ">
        <div className=" text-center">
          <h1 className=" font-bold text-[45px] my-[10px]">
            Meet Our Saver of the Month
          </h1>
          <h3 className=" text-[20px] my-[10px]">
            Every month, we shine a spotlight on one saver, asking them about
            their savings culture and how Piggyvest has helped them.
          </h3>
        </div>
        <div className="w-[100%] h-[400px] mx-auto flex justify-between items-center border-4 rounded-[30px] ">
          <video src="" style={{ scale: "100%" }} />
        </div>
      </section>
    </div>
  );
};

export default SaverContainer;
