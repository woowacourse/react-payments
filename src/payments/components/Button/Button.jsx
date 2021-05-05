import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = props => {
  const { children, type, className, onClick } = props;

  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={classNames("w-max text-custom-mint text-sm font-bold", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
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
