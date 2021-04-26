import React from "react";
import PropTypes from "prop-types";

function CompleteCardAddition(props) {
  return <div>음?{props?.card.cardType.name}</div>;
}

CompleteCardAddition.propTypes = {
  card: PropTypes.shape({
    cardType: PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
    cardNumbers: PropTypes.arrayOf(PropTypes.string).isRequired,
    expirationDate: PropTypes.shape({
      month: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }),
    username: PropTypes.string.isRequired,
    secureCode: PropTypes.string.isRequired,
    password: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default CompleteCardAddition;
