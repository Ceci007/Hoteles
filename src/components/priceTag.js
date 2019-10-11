import React from "react";

function PriceTag(props) {
  let icons = [];

  for (var i = 0; i < 4; i++) {
    var style = { margin: "0 .125em" };
    if (i >= props.count) {
      style.opacity = "0.25";
    }
    icons.push(<i className="fas fa-dollar-sign" style={style} key={i}></i>);
  }

  return (
    <div className="control">
      <div className="tags">
        <span className="tag is-medium is-info">{icons}</span>
      </div>
    </div>
  );
}

export default PriceTag;
