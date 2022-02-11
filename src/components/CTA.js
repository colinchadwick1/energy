import speaker from "../images/speaker.png";
import phone from "../images/phone.png"

function CTA() {
    return (  
        <div className="cta">
        <div className="cta-left">
            <img className="cta-icon" src={speaker} alt=""/>
            <span className="text">ENERGY PRICE RISE - WHITE PAPER NOW AVAILABLE TO DOWNLOAD</span>
        </div>
        <div className="cta-right">
            <button className="touch" href="#">
            <img className="cta-icon" src={phone} alt=""/>
            <span>GET IN TOUCH</span>
            </button>
        </div>
        </div>

    )
}

export default CTA;