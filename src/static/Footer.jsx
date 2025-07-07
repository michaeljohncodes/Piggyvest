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
    <div className="max-w-[1200px] mx-auto ">
      <section className=" my-20">
        <h1 className=" justify-self-center my-10 text-2xl">As featured in</h1>
        <div className=" flex flex-wrap gap-5 justify-evenly w-3/4 items-center justify-self-center">
          <img src={techcaballogo} alt="" className=" size-1/6" />
          <img src={cnbclogo} alt="" className=" size-1/6" />
          <img src={techcrunchlogo} alt="" className=" size-1/6" />
          <img src={pymntlogo} alt="" className=" size-1/8" />
          <img src={fastcompanylogo} alt="" className=" size-1/6" />
          <img src={ciologo} alt="" className=" size-1/16" />
        </div>
      </section>

      <section className=" flex gap-30 w-full align-top my-20 justify-between ">
        <main className=" align-top justify-items-center min-w-[10%]">
          <img src={logo2} alt="" className="" />
          <img src={stamp} alt="" className="my-5" />
        </main>
        <main className=" flex w-full justify-between gap-[40px]">
          <div className=" flex justify-between w-[70%] ">
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

          <div className=" w-[30%] ">
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

            <div style={{ textAlign: `right` }} className="">
              <div className=" mb-5">
                Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
                Nigeria.
              </div>
              <div className=" mb-5">
                <Link to="">contact@piggyvest.com</Link>
              </div>
              <div>+234 700 933 9339</div>
            </div>
          </div>
        </main>
      </section>

      <section className=" border-t-gray-300 border-t-2 pt-5">
        <p>
          Piggyvest (formerly piggybank.ng) is the leading online savings &
          investing platform in Nigeria. For over 9 years, our customers have
          saved and invested billions of Naira that they would normally be
          tempted to spend
        </p>
        <p>
          PV Capital Limited is a fund manager duly licensed by the Securities
          and Exchange Commission (SEC) of Nigeria
        </p>
        <p>2016 - 2025 PiggyTech Global Limited - RC 1405222</p>
      </section>
    </div>
  );
};

export default Footer;
