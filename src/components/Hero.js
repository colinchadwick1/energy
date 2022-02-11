import image1 from "../images/homepage-image-1.jpeg"
import image2 from "../images/homepage-image-2.jpg"

function Hero() {

    return (
        <div className="hero">
        <div>
<h1>WATER ENERGY TASKFORCE</h1>
<p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis fringilla urna ac pellentesque. Phasellus ullamcorper pretium sem. In hac habitasse platea dictumst. Duis porttitor odio ut eros blandit egestas. 
</p>
<button>
    FIND OUT MORE
</button>
        </div>
        <div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={image1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={image2} alt="Second slide"/>
    </div>
 
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>
        </div>
      );
}

export default Hero;