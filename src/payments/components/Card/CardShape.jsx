import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardShape = ({ backgroundColor, scale, onClick, isRegistered, children }) => (
  <div
    className={classNames(
      "relative p-3 w-52 h-32 rounded-md shadow-md cursor-pointer transform",
      backgroundColor,
      scale
    )}
    role="button"
    tabIndex="0"
    onKeyUp={onClick}
    onClick={onClick}
  >
    {!isRegistered && (
      <>
        <div className="absolute left-1/2 top-1/2 flex items-center justify-center w-6 h-6 bg-gray-600 rounded-full opacity-50 transform -translate-x-1/2 -translate-y-1/2" />
        <span className="absolute left-1/2 top-1/2 text-gray-800 transform -translate-x-1/2 -translate-y-1/2">+</span>
      </>
    )}
    {children}
  </div>
);

CardShape.propTypes = {
  isRegistered: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string,
  scale: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element,
};

CardShape.defaultProps = {
  backgroundColor: "bg-custom-gray-200",
  scale: "scale-100",
  onClick: null,
  children: null,
};

export default CardShape;
