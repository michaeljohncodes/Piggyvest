import { Link } from "react-router-dom";
import Button from "../../components/reuseable/Button";
import appleLogo from "../../assets/apple-logo2.png";
import playstoreLogo from "../../assets/google-play.png";

const Hero = () => {
  return (
    <main className=" bg-[#0D60D8] text-white relative ">
      <img
        src="./images/piggy_kolo_storage.png"
        className=" absolute w-[25%] right-[0px] bottom-[0px] z-0 "
      />
      <div className=" max-w-[1200px] mx-auto my-22 pt-[150px] flex justify-between gap-[10px] items-center ">
        <main className=" ">
          <div className="">
            <h1 className=" text-5xl font-medium my-10 w-3/4">Piggybank</h1>
            <div className=" my-10">
              <Link to="/">
                <main className=" flex gap-[5px] w-fit h-11 bg-[#f2f7f8] text-[#0D60D8] items-center justify-center rounded-[30px] px-[20px] py-[25px] font-semibold mb-6  ">
                  <div>
                    <img
                      src="./images/shield_icon.png"
                      className=" w-[35px] relative z-30"
                    />
                  </div>
                  <span>Automated Savings</span>
                </main>
              </Link>
            </div>
            <p className="w-[450px] my-10">
              Strict daily, weekly or monthly automatic savings. Earn up to 18%
              P.A.
            </p>

            <div className=" flex gap-3 my-4">
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
          </div>
        </main>

        <main className=" items-end w-[40%]">
          <div className=" ">
            <img
              src="./images/piggybank_phone_mockup.png"
              alt="piggybank"
              className=" w-[450px] z-30 relative "
            />
          </div>
        </main>
      </div>
    </main>
  );
};

export default Hero;
