import Slider from "react-slick";
import Data from "../Data/Data";
import "./ShowcaseCats.css";

const ShowcaseCats = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 2,
    centerMode: true,
    centerPadding: "50px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <main className="container-showcase-cats">
      {Data.find((e) => e.showcaseCats)
        .showcaseCats.slice(0, 1)
        .map(({ description, title }, index) => (
          <div key={index} className="container-showcase-cats-card-1">
            <div>
              <p>{description}</p>
              <h2>{title}</h2>
            </div>
          </div>
        ))}
      <div className="container-showcase-cats-card-2">
        <Slider {...settings}>
          {Data.find((e) => e.showcaseCats).showcaseCats.map(
            ({ img, icon, number }, index) => (
              <div key={index} className="container-showcase-cats-card-2-1">
                <div>
                  <img src={icon} alt="" />
                  <p>{number}</p>
                </div>
                <img
                  className="container-showcase-cats-card-2-img"
                  src={img}
                  alt=""
                />
              </div>
            )
          )}
        </Slider>
      </div>
    </main>
  );
};

export default ShowcaseCats;
