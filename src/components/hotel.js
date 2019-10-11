import React from "react";
import DataTag from "./dataTag";
import PriceTag from "./priceTag";

function Hotel(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.children.photo} alt={props.children.name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="card-content__top">
          <p className="title is-4">{props.children.name}</p>
          <p>{props.children.description}</p>
        </div>
        <div className="card-content__bottom">
          <div className="field is-grouped is-grouped-multiline">
            <DataTag icon="map-marker">{`${props.children.city}, ${props.children.country}`}</DataTag>
            <DataTag icon="bed">{`${props.children.rooms} Habitaciones`}</DataTag>
            <PriceTag count={props.children.price} />
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button className="card-footer-item has-background-primary has-text-white has-text-weight-bold">
          Reservar
        </button>
      </div>
    </div>
  );
}

export default Hotel;
