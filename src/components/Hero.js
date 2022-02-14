import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/homepage-image-1.jpeg';
import image2 from '../images/homepage-image-2.jpeg';





function Hero() {

    return (
        <div className="hero">
        <div className="hero-info">
<h1 className="hero-title">WATER AND ENERGY TASKFORCE</h1>
<p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis fringilla urna ac pellentesque. Phasellus ullamcorper pretium sem. In hac habitasse platea dictumst. 
</p>
<button className="info">
    FIND OUT MORE
</button>
        </div>
        <div className="carousel" alt="carousel">
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 carousel-img"
src={image1}
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 carousel-img"
src={image2}
            alt="Image Two"
          />
        </Carousel.Item>
      </Carousel>
    </div>
</div>
      );
}

export default Hero;