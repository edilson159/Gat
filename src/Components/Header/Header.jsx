import React from "react";
import Data from "../Data/Data";
import "./Header.css";

const Header = () => {
  return (
    <header className="container-header">
      <section className="container-card-header">
        <div className="container-card-header-1">
          {Data.find((e) => e.header)
            .header.slice(0, 3)
            .map(({ name, icon, link }, index) => (
              <a
                className={name !== "../imgs/logo.svg" ? "black" : "white"}
                href={link}
                key={index}
              >
                <img
                  className={
                    name === "../imgs/logo.svg" && "container-card-header-1-img"
                  }
                  src={icon}
                  alt=""
                />
                {name === "../imgs/logo.svg" ? (
                  <img
                    className="container-card-header-1-img-logo"
                    src={name}
                    alt=""
                  />
                ) : (
                  <p
                    className={name === "produtos" ? "products" : "collections"}
                  >
                    {name}
                  </p>
                )}
              </a>
            ))}
        </div>
        <div className="container-card-header-2">
          {Data.find((e) => e.header)
            .header.slice(3, 7)
            .map(({ name, link }, index) => (
              <a key={index} href={link}>
                {name}
              </a>
            ))}
        </div>
        <div className="container-card-header-3">
          {Data.find((e) => e.header)
            .header.slice(7, 11)
            .map(({ input, placeholder, icon, link }, index) => (
              <React.Fragment key={index}>
                {input && (
                  <div className="container-card-header-3-p1">
                    <img src={icon} alt="" />
                    <input type={input} placeholder={placeholder} />
                  </div>
                )}
                {!input && (
                  <div
                    className={
                      icon === "../imgs/cart.svg"
                        ? "container-card-header-3-p2 cart"
                        : "container-card-header-3-p2 user"
                    }
                  >
                    <a href={link}>
                      <img src={icon} alt="" />
                    </a>
                  </div>
                )}
              </React.Fragment>
            ))}
        </div>
      </section>
    </header>
  );
};

export default Header;
