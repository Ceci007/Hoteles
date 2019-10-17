import React from "react";

function Hero(props) {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Hoteles</h1>
          <h2 className="subtitle">
            Tenemos disponibles {props.totalHotels} hoteles en total.
            <br />
            desde el{" "}
            <strong>
              {props.filters.dateFrom.toLocaleDateString("es-ES", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </strong>{" "}
            hasta el{" "}
            <strong>
              {props.filters.dateTo.toLocaleDateString("es-ES", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </strong>
            {props.filters.country ? ` en ${props.filters.country}` : ""}
            {props.filters.price
              ? ` por ${"$".repeat(props.filters.price)}`
              : ""}
            {props.filters.rooms
              ? ` de hasta ${props.filters.rooms} habitaciones`
              : ""}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
