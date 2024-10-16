import React from "react";
import Data from "../Data/Data";
import "./ShowcaseCollections.css";
import Slider from "react-slick";

const ShowcaseCollections = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
  };
  return (
    <main className="container-showcase-collections">
      {Data.find((e) => e.showcaseCollections).showcaseCollections.map(
        ({ title, name, link, informations }, index) => (
          <React.Fragment key={index}>
            <div className="container-showcase-collections-card-1">
              <h2>{title}</h2>
              <a href={link}>{name}</a>
            </div>

            <div className="container-showcase-collections-card-2">
              <Slider {...settings}>
                {informations &&
                  informations.map(
                    ({ title, img, imgMain, description, button }, index) => (
                      <div key={index}>
                        <div className="container-showcase-collections-card-2-1">
                          <div className="container-showcase-collections-card-2-1-1">
                            <h2>{title}</h2>
                          </div>
                          <img className="img" src={img} alt="" />
                          <div className="container-showcase-collections-card-2-1-2">
                            <p>{description}</p>
                            <button>{button}</button>
                          </div>
                          <div className="container-img-main">
                            <img className="img-main" src={imgMain} alt="" />
                          </div>
                        </div>
                      </div>
                    )
                  )}
              </Slider>
            </div>
          </React.Fragment>
        )
      )}
    </main>
  );
};

export default ShowcaseCollections;
