import React from "react";

function Hero({ totalHotels }) {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Hoteles</h1>
          <h2 className="subtitle">
            Tenemos disponibles {totalHotels} hoteles en total.
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
