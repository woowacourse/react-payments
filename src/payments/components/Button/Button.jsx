import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = props => {
  const { name, type, className, onClick } = props;

  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={classNames("text-right text-custom-mint text-sm font-bold", className)}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
  className: "",
  onClick: null,
};

export default Button;
