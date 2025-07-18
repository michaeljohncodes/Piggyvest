import React from "react";
import techcaballogo from "../assets/techcabal_logo@2x.png";
import cnbclogo from "../assets/cnbc_logo.png";
import techcrunchlogo from "../assets/techcrunch_logo.png";
import pymntlogo from "../assets/pymnt_logo.svg";
import fastcompanylogo from "../assets/fastcompany_logo.svg";
import ciologo from "../assets/cio_logo.svg";
import logo2 from "../assets/logo2.svg";
import stamp from "../assets/stamp.jpg";
import facebooklogo from "../assets/facebook_logo.svg";
import instagramlogo from "../assets/instagram_logo.svg";
import twitterlogo from "../assets/twitter_logo.svg";
import tiktoklogo from "../assets/tiktok_logo.svg";
import youtubelogo from "../assets/youtube_logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col max-lg:flex-wrap ">
      <section className="">
        <h1 className=" justify-self-center my-11 text-3xl font-bold">
          As featured in
        </h1>
        <div className=" flex max-md:flex-wrap justify-between w-3/4 items-center justify-self-center">
          <img src={techcaballogo} alt="" className=" size-1/6" />
          <img src={cnbclogo} alt="" className=" size-1/6" />
          <img src={techcrunchlogo} alt="" className=" size-1/6" />
          <img src={pymntlogo} alt="" className=" size-1/8" />
          <img src={fastcompanylogo} alt="" className=" size-1/6" />
          <img src={ciologo} alt="" className=" size-1/16" />
        </div>
      </section>

      <section className=" flex max-md:flex-wrap gap-30 w-full align-top my-20 justify-between ">
        <main className=" align-top justify-items-center min-w-[10%]">
          <img src={logo2} alt="" className="" />
          <img src={stamp} alt="" className="my-5" />
        </main>
        <main className=" flex flex-wrap max-md:flex-wrap w-full justify-between gap-[40px]">
          <div className=" flex flex-wrap justify-between w-[50%] ">
            <div style={{ lineHeight: `30px` }} className="">
              <p>
                <b>Products</b>
              </p>
              <p>
                <Link to="">Piggybank </Link>
              </p>
              <p>
                <Link to="">Invest</Link>
              </p>
              <p>
                <Link to="">Safelock</Link>
              </p>
              <p>
                <Link to="">Target Savings</Link>
              </p>
              <p>
                <Link to="">Flex Naira</Link>
              </p>
              <p>
                <Link to="">Flex Dollar</Link>
              </p>
            </div>
            <div style={{ lineHeight: `30px` }} className="company">
              <p>
                <b>Company</b>
              </p>
              <p>
                <Link to=""> About</Link>
              </p>
              <p>
                <Link to=""> FAQs</Link>
              </p>
              <p>
                <Link to=""> Blog</Link>
              </p>
            </div>
            <div style={{ lineHeight: `30px` }} className="legal">
              <p>
                <b>Legal</b>
              </p>
              <p>
                <Link to=""> Terms</Link>
              </p>
              <p>
                <Link to=""> Privacy</Link>
              </p>
              <p>
                <Link to=""> Security</Link>
              </p>
            </div>
          </div>

          <div className=" w-[35%] ">
            <div className=" flex gap-5 justify-end mb-10">
              <Link to="">
                <img src={facebooklogo} alt="" />
              </Link>
              <Link to="">
                <img src={instagramlogo} alt="" />
              </Link>
              <Link to="">
                <img src={twitterlogo} alt="" />
              </Link>
              <Link to="">
                <img src={tiktoklogo} alt="" />
              </Link>
              <Link to="">
                <img src={youtubelogo} alt="" />
              </Link>
            </div>

            <div
              style={{ textAlign: `right` }}
              className=" flex flex-col gap-[10px]"
            >
              <div className="">
                Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
                Nigeria.
              </div>
              <div className="">
                <Link to="">contact@piggyvest.com</Link>
              </div>
              <div>+234 700 933 9339</div>
            </div>
          </div>
        </main>
      </section>

      <section className=" flex flex-col gap-[70px] border-t-gray-200 border-t-2 pt-5 mb-[100px]">
        <p className=" text-[12px] w-[60%]">
          Piggyvest (formerly piggybank.ng) is the leading online savings &
          investing platform in Nigeria. For over 9 years, our customers have
          saved and invested billions of Naira that they would normally be
          tempted to spend
        </p>
        <p className=" text-[13px] text-blue-900 font-medium">
          2016 - 2025 PiggyTech Global Limited - RC 1405222
        </p>
      </section>
    </div>
  );
};

export default Footer;
