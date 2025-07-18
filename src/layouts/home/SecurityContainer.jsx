
const SecurityContainer = () => {
  return (
    <div className=" max-w-[800px] mx-auto flex justify-between items-center text-center ">
      <section>
        <img src={"/images/security_icon.png"} alt="Image here" />
      </section>
      <section className="flex flex-col justify-between gap-[20px] text-left w-[80%] ">
        <h1 className=" font-bold text-[20px]">
          Your security is our priority
        </h1>
        <p>
          PiggyVest uses the highest level of Internet Security and it is
          secured by 256 bits SSL security encryption to ensure that your
          information is comepletely protected from fraud.
        </p>
        <div className=" font-medium text-[15px] flex gap-[10px] items-end">
          <img src={"/images/black_curved_arrow.svg"} alt="--->" />
          <h4>More on our security measures</h4>
        </div>
      </section>
    </div>
  );
};

export default SecurityContainer;
