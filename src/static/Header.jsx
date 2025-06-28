import { LuChevronDown } from "react-icons/lu";
import Button from "../components/reuseable/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../../public/logo.svg";

const Header = () => {
  return (
    <header className=" h-20 ">
      <div className=" max-w-[1280px] px-10  mx-auto flex h-full items-center justify-between">
        <section className=" flex ">
          <Link to="/">
            <main>
              <img src={logo} alt="logo here" className="w-3/4" />
            </main>
          </Link>

          <main className=" flex  mx-12 gap-9 items-center font-medium max-tablet:hidden">
            <Link to="/">
              <nav className=" flex items-center gap-0.5">
                <span>Save</span>
                <span>
                  <LuChevronDown size={20} />
                </span>
              </nav>
            </Link>
            <Link to="/Invest">
              <nav>Invest</nav>
            </Link>
            <Link to="/Stories">
              <nav>Stories</nav>
            </Link>
            <Link to="/FAQs">
              <nav>FAQs</nav>
            </Link>
            <Link to="/">
              <nav className=" flex items-center gap-0.5">
                <span>Resources</span>
                <span>
                  <LuChevronDown size={25} />
                </span>
              </nav>
            </Link>
          </main>
        </section>

        <section className=" flex gap-1 max-tablet:hidden">
          <Button
            title="Sign In"
            borderColor="#122231"
            borderRadius="10px"
            bgColor="transparent"
            Color="#122231"
          />
          <Button
            title="Create free Account"
            bgColor="#122231"
            Color="#fff"
            borderRadius="10px"
          />
        </section>

        <section className=" hidden max-tablet:block">
          <RxHamburgerMenu size={35} />
        </section>
      </div>
    </header>
  );
};

export default Header;
