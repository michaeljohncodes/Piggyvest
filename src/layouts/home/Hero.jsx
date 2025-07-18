import { Link } from "react-router-dom";
import Button from "../../components/reuseable/Button";
import { LuNotebook } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import girlImage from "../../assets/girl.png";
import appleLogo from "../../assets/apple-logo2.png";
import playstoreLogo from "../../assets/google-play.png"

const Hero = () => {
  return (
    <main className="">
      <div className=" max-w-[1200px] mx-auto mt-[100px] py-[100px] flex justify-between items-center">
        <main className=" flex flex-col gap-[35px]">
            <div className="">
              <Link to="/">
                <main className=" flex w-[350px] h-11 bg-blue-400 text-white items-center justify-center rounded-full font-semibold ">
                  <LuNotebook />
                  <span>The 2024 PiggyVest Savings Report</span>
                  <MdKeyboardArrowRight />
                </main>
              </Link>
            </div>

            <h1 className=" text-4xl font-bold w-3/4">
              The Better Way to Save & Invest
            </h1>
            <p className="w-[350px] text-[15px] ">
              Piggyvest helps over 5 million customers achieve their financial
              goals by helping them save and invest with ease
            </p>

            <div className=" flex gap-3 ">
              <Button
                icon={
                  <img
                    src={appleLogo}
                    alt=""
                    style={{
                      width: "25px",
                      height: "22px",
                      marginLeft: "10px",
                    }}
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
                    src={playstoreLogo}
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
        </main>

        <main className=" items-end">
          <div>
            <img src={girlImage} alt="girl" className=" w-[700px] " />
          </div>
        </main>
      </div>
    </main>
  );
};

export default Hero;
