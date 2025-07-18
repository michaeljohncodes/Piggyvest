import React from 'react'

const Cards = () => {
const thinkCards = [
  {
    title: "Save automatically",
    desc: "Build a dedicated savings faster on your terms, automatically or manually",
    btnTitle: "Piggy bank",
    color: "#0F60B9",
    bgColor: "white",
    image: "./images/autosave_enabled.png",
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
    <div className=" my-20 flex flex-col items-center ">
      <section className=" text-center">
        <h1 className=" font-bold text-5xl my-[20px]">
          Save without thinking about it.
        </h1>
        <p className=" text-2xl my-[20px]">
          Enjoy automated savings, quick manual savings top up and competitive
          interest rates.
        </p>
      </section>
      <section className=" flex justify-center max-w-[1440px] flex-wrap bg-[#f2f7f8]">
        {thinkCards?.map((card, i) => (
          <main
            style={{ background: `${card.bgColor}`, borderRadius: "20px" }}
            className=" h-[500px] w-[350px] m-[20px] pt-[30px] px-[25px] flex flex-col justify-between overflow-hidden "
            key={i}
          >
            <div className=" max-h-[50%]">
              <h1
                style={{ color: `${card.color}` }}
                className=" font-bold text-[30px] "
              >
                {card.title}
              </h1>
              <p className=" w-[80%] text-[15px] py-[10px]">{card.desc}</p>
            </div>
            <div className=" max-w-[100%] min-h-[60%] mb-[-10px]">
              <img src={card.image} alt="phone mockup" />
            </div>
          </main>
        ))}
      </section>
    </div>
  );
}

export default Cards;