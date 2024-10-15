import "./Banner2.css";
import Data from "../Data/Data";
import React from "react";

const Banner2 = () => {
  return (
    <main className="container-banner2">
      <div className="container-banner2-card-1">
        {Data.find((e) => e.banner2)
          .banner2.slice(0, 1)
          .map(({ title }, index) => (
            <h2 key={index} className="container-banner2-card-1-title">
              {title}
            </h2>
          ))}
        <div className="container-banner2-card-1-names">
          {Data.find((e) => e.banner2)
            .banner2.slice(0, 5)
            .map(({ name, icon }, index) => (
              <button
                key={index}
                className="container-banner2-card-1-names-itens"
              >
                {icon && <img src={icon} alt="" />}
                <p>{name}</p>
              </button>
            ))}
        </div>
      </div>
      <div className="container-banner2-card-2">
        {Data.find((e) => e.banner2)
          .banner2.slice(6, 11)
          .map(({ number }, index) => (
            <div
              key={index}
              className={`container-number-indication-item-${number} container-banner2-numbers`}
            >
              <p>{number}</p>
            </div>
          ))}

        {Data.find((e) => e.banner2)
          .banner2.slice(5, 6)
          .map(({ img, title, paragraph1, paragraph2, button }, index) => (
            <React.Fragment key={index}>
              <div className="container-banner2-card-2-description">
                <h2 className="title">{title}</h2>

                <p>{paragraph1}</p>
                <p>{paragraph2}</p>

                <button>{button}</button>
              </div>

              <img src={img} className="container-banner2-card-2-img" alt="" />
            </React.Fragment>
          ))}
      </div>
    </main>
  );
};

export default Banner2;
