import Data from "../Data/Data";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container-footer">
      <div className="container-footer-card-1">
        <div className="container-footer-card-1-1">
          {Data.find((e) => e.footer)
            .footer.slice(0, 3)
            .map(
              ({ logo }, index) =>
                logo && (
                  <div key={index} className="container-footer-card-1-1-logo">
                    <img src={logo} alt="" />
                  </div>
                )
            )}

          <div className="container-footer-card-1-description ">
            {Data.find((e) => e.footer).footer.map(
              ({ names, logo }, index) =>
                logo && (
                  <div
                    key={index}
                    className="container-footer-card-1-1-description-1"
                  >
                    {names.map(({ name, link }, index) => (
                      <a key={index} href={link}>
                        {name}
                      </a>
                    ))}
                  </div>
                )
            )}
            <div className="container-footer-card-1-1-description-2">
              {Data.find((e) => e.footer)
                .footer.slice(0, 3)
                .map(
                  ({ name, img, imgs }, index) =>
                    name &&
                    (name === "FORMAS DE PAGAMENTO" ? (
                      <div
                        key={index}
                        className="container-footer-card-1-1-description-2-1"
                      >
                        <h2>{name}</h2>
                        <img src={img} alt="" />
                      </div>
                    ) : (
                      <div
                        key={index}
                        className="container-footer-card-1-1-description-2-2"
                      >
                        <h2>{name}</h2>
                        <div>
                          {imgs.map(({ img }, index) => (
                            <img key={index} src={img} alt="" />
                          ))}
                        </div>
                      </div>
                    ))
                )}
            </div>
          </div>
        </div>
        <div className="container-footer-card-1-2">
          {Data.find((e) => e.footer)
            .footer.slice(3, 6)
            .map(
              ({ title, names }, index) =>
                title === "AJUDA" && (
                  <div key={index} className="container-footer-card-1-2-1">
                    <h2>{title}</h2>
                    {names && (
                      <div className="container-footer-card-1-2-1-names">
                        {names.map(({ name, link }, index) => (
                          <a className="teste" key={index} href={link}>
                            {name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )
            )}
        </div>
        <div className="container-footer-card-1-2-2">
          {Data.find((e) => e.footer)
            .footer.slice(3, 6)
            .map(
              ({ title, name, imgs }, index) =>
                title !== "AJUDA" && (
                  <div
                    className="container-footer-card-1-2-2-description"
                    key={index}
                  >
                    <h2>{title}</h2>

                    <p>{name}</p>

                    {imgs && (
                      <div className="container-footer-card-1-2-2-imgs">
                        {imgs.map(({ img }, index) => (
                          <img key={index} src={img} alt="" />
                        ))}
                      </div>
                    )}
                  </div>
                )
            )}
        </div>
      </div>
      <div className="container-footer-card-2">
        <div>
          {Data.find((e) => e.footer)
            .footer.slice(6, 8)
            .map(({ name }, index) => (
              <p key={index}>{name}</p>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
