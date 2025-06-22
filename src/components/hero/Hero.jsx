import "./Hero.css";
import iphoneimage from "../../assets/apple-logo2.png";
import googleplayimage from "../../assets/google-play.png";
import girlimage from "../../assets/girl.png";

const Hero = () => {
    return (
        <section className="herocontainer sidemargin">
            <div className="hero_texts">
                <div className="hero_texts_button">
                    <a href="#">The 2024 PiggyVest Savings Report</a>
                </div>
                <h1> The Better Way to Save & Invest</h1>
                <p>Piggyvest helps over 5 million customers achieve their financial goals by helping them save and invest with ease</p>
                <div className="hero_texts_download">
                    <button>
                        {/* <a> */}
                        <img src={iphoneimage} alt="the iphone image logo" /> 
                        <span>Get on iPhone</span>
                        {/* </a> */}
                    </button>
                    <button>
                        {/* <a> */}
                        <img src={googleplayimage} alt="the google play image logo" />
                        <span>Get on Android</span>
                        {/* </a> */}
                    </button>
                </div>
            </div>
             <div className="hero_image_holder">
                 <img src={girlimage} alt="" /> 
            </div>
        </section>
    );
}; export default Hero;