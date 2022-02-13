import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/homepage-image-1.jpeg"


function Slider() {
    const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
      <div>
        <h3>Slide {num}</h3>
<img src={image1} alt="image"/>
      </div>
    ));
    return ( 
    <>
   <Slider
        dots={false}
        slidesToShow={2}
        slidesToScroll={2}
        autoplay={true}
        autoplaySpeed={3000}
      >
        {renderSlides()}
      </Slider>
    </> );
}

export default Slider;