import React from "react";
import Data from "../Data/Data";
import "./Register.css";

const Register = () => {
  return (
    <main className="container-register">
      <div className="container-register-card">
        <div className="container-register-card-1">
          {Data.find((e) => e.register).register.map(({ img }, index) => (
            <img key={index} src={img} alt="" />
          ))}
        </div>
        <div className="container-register-card-2">
          {Data.find((e) => e.register).register.map(
            (
              {
                title,
                paragraph1,
                paragraph2,
                input1,
                input2,
                placeholder1,
                placeholder2,
                button,
              },
              index
            ) => (
              <React.Fragment key={index}>
                {title && <h2>{title}</h2>}
                <div className="container-register-card-2-1">
                  {paragraph1 && (
                    <div className="container-register-card-2-1-description">
                      <p className="paragraph1">{paragraph1}</p>
                      <p className="paragraph2">{paragraph2}</p>
                    </div>
                  )}
                  <div className="container-register-card-2-1-inputs">
                    <input
                      type={input1}
                      name=""
                      placeholder={placeholder1}
                      id=""
                    />
                    <input
                      type={input2}
                      name=""
                      placeholder={placeholder2}
                      id=""
                    />
                    {button && <button>{button}</button>}
                  </div>
                </div>
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </main>
  );
};

export default Register;
