import speaker from "../images/megaphone.png";
import phone from "../images/phone.png"

function CTA() {
    return (  
        <div className="cta">
        <div className="cta-left">
            <img className="cta-speaker" src={speaker} alt=""/>
            <span className="text">ENERGY PRICE RISE - WHITE PAPER NOW AVAILABLE TO DOWNLOAD</span>
        </div>
            <button className="touch" href="#">
            <img className="cta-icon" src={phone} alt=""/>
            <span className="touch-text">GET IN TOUCH</span>
            </button>
        </div>

    )
}

export default CTA;