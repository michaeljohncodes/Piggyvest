import "./Security.css";
import securitylockimage from "../../assets/securitylock.svg";
import curvedarrowimage from "../../assets/curved_arrow.svg";

const Security = () => {
    return (
        <section class="security sidemargin">
            <span class="security_image">
                <img src={securitylockimage} alt="security lock" />
            </span>
            <div class="security_texts">
                <h3>Your security is our priority</h3>
                <p>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is comepletely protected from fraud.</p>
                <h4><img src={curvedarrowimage} alt=" curved arrow" /> More on our security measures</h4>
            </div>
        </section>
    );
}; export default Security;