import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>

                    {/* Si el índice es 3, 4 o 5, mostrar como lista */}
                    {i >= 3 ? (
                      <ul style={{ textAlign: "left" }}>
                        {d.text
                          .split(/[0-9]+\./) // divide por "1. 2. 3." etc.
                          .map((item, idx) =>
                            item.trim() ? <li key={idx}>{item.trim()}</li> : null
                          )}
                      </ul>
                    ) : (
                      <p>{d.text}</p>
                    )}
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
