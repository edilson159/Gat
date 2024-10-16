import React from "react";
import Data from "../Data/Data";
import "./SectionDecorate.css";

const SectionDecorate = () => {
  return (
    <main className="container-section-decorate">
      {Data.find((e) => e.sectionDecorate).sectionDecorate.map(
        ({ title, description, button }, index) => (
          <React.Fragment key={index}>
            <div className="container-section-decorate-card-1">
              <h2>{title}</h2>
            </div>
            <div className="container-section-decorate-card-2">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/LMD6MqwErzc?si=04Xqryc7NWWTocp7&amp;controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="container-section-decorate-card-2-1">
                <p>{description}</p>
                <button>{button}</button>
              </div>
            </div>
          </React.Fragment>
        )
      )}
    </main>
  );
};

export default SectionDecorate;
