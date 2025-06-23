import "./Header.css";
import headerimage from "../../assets/logo.svg";

const Header = () => {
    return (
        <section className="headercontainer">
            <div className="navigation">
                <div className="profile_logo">
                    <img src={headerimage} />
                </div>
                <div className="CTA">
                    <div className="CTA_1">
                        <a href="#">Save</a>
                        <a href="#">Invest</a>
                        <a href="#">Stories</a>
                        <a href="#">FAQs</a>
                        <a href="#">Resources</a>
                    </div>
                    <div className="CTA_2">
                        <a href="#" style={{color: 'black'}}> Sign-In</a>
                        <a href="#">Create free account</a>
                    </div>
                </div>
            </div>
        </section>
    );
}; export default Header;