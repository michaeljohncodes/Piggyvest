import { Link } from "react-router-dom";
import Button from "../components/reuseable/Button";
import applelogo from "../assets/apple-logo2.png";
import googleplaylogo from "../assets/google-play.png";

const PiggyBank = () => {
  const thinkCards = [
    {
      title: "Save automatically",
      desc: "Build a dedicated savings faster on your terms, automatically or manually",
      btnTitle: "Piggy bank",
      color: "#0F60B9",
      bgColor: "white",
      image: "./images/piggybank_phone_mockup.png",
    },
    {
      title: "Save on the go",
      desc: "Build a dedicated savings faster on your terms, automatically or manually",
      btnTitle: "Piggy bank",
      color: "#0F60B9",
      bgColor: "white",
      image: "./images/quicksave_phone_mockup.png",
    },
    {
      title: "Build discipline",
      desc: "Build a dedicated savings faster on your terms, automatically or manually",
      btnTitle: "Piggy bank",
      color: "#0F60B9",
      bgColor: "white",
      image: "./images/withdraw_from_piggybank_phone_mockup.png",
    },
  ];

  return (
    <>
      <main className=" bg-[#145ad3] text-white relative ">
        <img
          src="./images/piggy_kolo_storage.png"
          className=" absolute w-[15%] right-[0px] bottom-[0px]"
        />
        <div className=" max-w-[1200px] mx-auto my-22 pt-[150px] flex justify-between gap-[10px] items-center ">
          <main className=" ">
            <div className="">
              <h1 className=" text-5xl font-medium my-10 w-3/4">Piggybank</h1>
              <div className=" my-10">
                <Link to="/">
                  <main className=" flex gap-[5px] w-fit h-11 bg-[#f2f7f8] text-blue-700 items-center justify-center rounded-[30px] px-[20px] font-semibold mb-6  ">
                    <div>
                      <img
                        src="./images/shield_icon.png"
                        className=" w-[30px]"
                      />
                    </div>
                    <span>Automated Savings</span>
                  </main>
                </Link>
              </div>
              <p className="w-[450px] my-10">
                Strict daily, weekly or monthly automatic savings. Earn up to
                18% P.A.
              </p>

              <div className=" flex gap-3 my-4">
                <Button
                  icon={
                    <img
                      src={applelogo}
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
                      src={googleplaylogo}
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

          <main className=" items-end w-[35%]">
            <div className=" ">
              <img
                src="./images/piggybank_phone_mockup.png"
                alt="girl"
                className=" w-[350px] "
              />
            </div>
          </main>
        </div>
      </main>

      {/* The cards come here  */}

      <div className=" my-20 flex flex-col items-center ">
        <section className=" text-center">
          <h1 className=" font-bold text-5xl my-[20px]">
            Save without thinking about it.
          </h1>
          <p className=" text-2xl my-[20px]">
            Enjoy automated savings, quick manual savings top up and competitive interest rates.
          </p>
        </section>
        <section className=" flex justify-center max-w-[1440px] flex-wrap bg-[#f2f7f8]">
          {thinkCards?.map((card, i) => (
            <main
              style={{ background: `${card.bgColor}`, borderRadius: "20px" }}
              className=" h-[500px] w-[300px] m-[20px] pt-[30px] px-[20px] flex flex-col justify-between overflow-hidden "
              key={i}
            >
              <div>
                <h1
                  style={{ color: `${card.color}` }}
                  className=" font-bold text-[30px] "
                >
                  {card.title}
                </h1>
                <p className=" w-[100%] text-[15px] py-[10px]">{card.desc}</p>
              </div>
              <div className=" max-w-[100%] max-h-[50%] ">
                <img src={card.image} alt="phone mockup" />
              </div>
            </main>
          ))}
        </section>
      </div>

      <main className=" bg-[#145ad3] text-white overflow-hidden h-[280px] flex items-center">
        <div className=" max-w-[1200px] mx-auto my-22 flex items-center ">
          <div className=" flex flex-col w-[50%]">
            <h1 className=" text-4xl font-medium w-[70%]">
              Build your savings gradually !
            </h1>

            <p className="w-[70%] mt-[20px]">
              With Piggybank, you can save periodically, automatically or
              manually. You can also save as you go, on your own terms. You're
              the boss of your savings, choose how you want to save.
            </p>
          </div>
          <div className="overflow-hidden w-[55%] contain-content">
            <img
              src="./images/lady_afro_hair_smile.png"
              alt="girl"
              className=" scale-105"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default PiggyBank;
