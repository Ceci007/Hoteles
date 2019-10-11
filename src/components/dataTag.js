import React from "react";

function DataTag(props) {
  return (
    <div className="control">
      <div className="tags has-addons">
        <span className="tag is-medium is-info">
          <i className={`fas fa-${props.icon}`}></i>
        </span>
        <span className="tag is-medium">{props.children}</span>
      </div>
    </div>
  );
}

export default DataTag;
