import React from "react";
import { NavLink } from "react-router-dom";

const TestimonialContainer = () => {
  return (
    <div className=" max-w-[1200px] mx-auto my-40 flex justify-between items-center">
      <section className=" w-[90%] mx-auto flex justify-between gap-[50px] pt-[30px] items-center ">
        <div className=" w-[80%] ">
          <img src={"./images/stories_phone_mockup.png"} alt="" />
        </div>
        <div className=" py-[20px] w-[100%] ">
          <div className="flex ">
            <img
              src={"./images/lady_staff_standing.png"}
              alt=""
              style={{
                maxWidth: "10%",
                borderRadius: "30px",
                margin: "0px -10px 0px 0px",
              }}
            />
            <img
              src={"./images/hijab_girl.png"}
              alt=""
              style={{
                maxWidth: "10%",
                borderRadius: "30px",
                margin: "0px -10px 0px 0px",
              }}
            />
            <img
              src={"./images/massive_data_discount.png"}
              alt=""
              style={{
                maxWidth: "10%",
                borderRadius: "30px",
                margin: "0px -10px 0px 0px",
              }}
            />
            <img
              src={"./images/"}
              alt=""
              style={{
                maxWidth: "10%",
                borderRadius: "30px",
                margin: "0px -10px 0px 0px",
              }}
            />
            <img
              src={"./images/hijab_girl.png"}
              alt=""
              style={{
                maxWidth: "10%",
                borderRadius: "30px",
                margin: "0px 0px 0px 0px",
              }}
            />
          </div>
          <h2 className=" text-[30px] font-bold py-[10px] my-[20px]">
            Join 5+ million people who save and invest with us
          </h2>

          <div className="flex gap-[10px] my-[20px]">
            <NavLink>
              <div className=" flex gap-[10px] justify-start items-center rounded-[10px] border-[1px] border-gray-300 p-[7px] ">
                <img src={"./images/black_apple_icon.png"} alt="" />
                <button> Get on iPhone</button>
              </div>
            </NavLink>
            <NavLink>
              <div className=" flex gap-[10px] justify-start items-center rounded-[10px] border-[1px] border-gray-300 p-[7px] ">
                <img src={"./images/google_play_icon.png"} alt="" />
                Get on Android
              </div>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialContainer;
