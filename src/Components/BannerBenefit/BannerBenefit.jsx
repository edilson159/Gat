import Slider from "react-slick";
import Data from "../Data/Data";
import "./BannerBenefit.css";

const BannerBenefit = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 4,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "20px",
    arrows: false,
  };
  return (
    <main className="container-banner-benefit">
      <div className="container-card-banner-benefit">
        <div className="container-card-banner-benefit-p1">
          {Data.find((e) => e.bannerBenefit)
            .bannerBenefit.slice(0, 1)
            .map(({ number, title, description }, index) => (
              <div key={index} className="container-card-banner-benefit-1">
                <p className="container-card-banner-benefit-1-number">
                  {number}
                </p>
                <div>
                  <h1>{title}</h1>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          <div className="container-card-banner-benefit-2">
            <div className="container-card-banner-benefit-2-1">
              {Data.find((e) => e.bannerBenefit)
                .bannerBenefit.slice(1, 4)
                .map(({ img, title, description }, index) => (
                  <div
                    key={index}
                    className="container-card-banner-benefit-2-1-item"
                  >
                    <div className="container-card-banner-benefit-2-1-item-1">
                      <img src={img} alt="" />
                      <h2 className="container-card-banner-benefit-2-1-item-1-title">
                        {title}
                      </h2>
                    </div>

                    <p>{description}</p>
                  </div>
                ))}
            </div>
            <div className="container-card-banner-benefit-2-slider">
              <div>
                <Slider {...settings}>
                  {Data.find((e) => e.bannerBenefit)
                    .bannerBenefit.find((e) => e.slider)
                    .slider.map(({ icon, name, link }, index) => (
                      <div
                        key={index}
                        className="container-card-banner-benefit-2-slider-item"
                      >
                        <a href={link}>
                          <img src={icon} alt="" />
                          <p>{name}</p>
                        </a>
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BannerBenefit;
