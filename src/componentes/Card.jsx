import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={`/questions/${props.id}`}>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.src} className="card-img-top" alt="..." />
        <p className="btn btn-primary">{props.name}</p>
      </div>
    </Link>
  );
};

export default Card;
