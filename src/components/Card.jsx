import React from "react";

import PropTypes from "prop-types";

const Card = ({ image, description }) => {
  // Component code here

  return (
    <div className="card">
      <div className="card__image__container">
        <img src={image} alt="" className="card__image" />
        <div className="card__banner card__banner--blue">Mobile messagign in 2026 and beyon</div>
      </div>
      <div className="card__content">
        <p>{description}</p>
        <a href="" className="card__read">
          Read More --{">"}
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Card;
