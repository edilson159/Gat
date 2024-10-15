import Slider from "react-slick";
import "./Banner1.css";
import Data from "../Data/Data";

const Banner1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "35px",
  };
  return (
    <section className="container-banner1">
      <Slider {...settings}>
        {Data.find((e) => e.banner1).banner1.map(({ img, button }, index) => (
          <div key={index} className="container-card-banner1">
            <img src={img} alt="" />
            <button>{button}</button>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Banner1;
