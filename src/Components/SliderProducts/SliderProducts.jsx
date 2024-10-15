import React from "react";
import Data from "../Data/Data";
import "./SliderProducts.css";
import Slider from "react-slick";

const SliderProducts = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },

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
    <main className="container-slider-products">
      <div className="container-slider-products-apresentation">
        {Data.find((e) => e.carousel)
          .carousel.slice(0, 1)
          .map(({ name, span, button, link }, index) => (
            <React.Fragment key={index}>
              <div className="container-slider-products-apresentation-name">
                <p>{name}</p> <span>{span}</span>
              </div>
              <div className="container-slider-products-apresentation-button">
                <a href={link}>{button}</a>
              </div>
            </React.Fragment>
          ))}
        <div className="container-slider-products-carousel">
          <Slider {...settings}>
            {Data.find((e) => e.carousel)
              .carousel.slice(1, 5)
              .map(
                (
                  {
                    discount,
                    span,
                    tag,
                    img,
                    title,
                    oldPrice,
                    currentPrice,
                    variationColor,
                    link,
                  },
                  index
                ) => (
                  <a
                    href={link}
                    key={index}
                    className="container-slider-products-carousel-card"
                  >
                    <div className="discount">
                      <p>{discount}</p>
                      <span>{span}</span>
                    </div>
                    <div className="tag">
                      <p>{tag}</p>
                    </div>
                    <img
                      className="container-slider-products-carousel-card-img"
                      src={img}
                      alt=""
                    />
                    <div className="description">
                      <div className="description-1">
                        <h2>{title}</h2>
                        <div className="description-price">
                          <p className="old">{oldPrice}</p>
                          <p className="current">{currentPrice}</p>
                        </div>
                      </div>
                      <img src={variationColor} alt="" />
                    </div>
                  </a>
                )
              )}
          </Slider>
        </div>
      </div>
    </main>
  );
};

export default SliderProducts;
