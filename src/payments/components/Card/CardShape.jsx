import React from "react";
import classNames from "classnames";

const CardShape = props => (
  <div
    className={classNames(
      "relative p-3 w-52 h-32 rounded-md shadow-md cursor-pointer transform",
      props.backgroundColor ?? "bg-custom-gray-200",
      props.scale
    )}
    onClick={props.onClick}
  >
    {!props.isRegistered && (
      <>
        <div className="absolute left-1/2 top-1/2 flex items-center justify-center w-6 h-6 bg-gray-600 rounded-full opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
        <span className="absolute left-1/2 top-1/2 text-gray-800 transform -translate-x-1/2 -translate-y-1/2">+</span>
      </>
    )}
    {props.children}
  </div>
);

export default CardShape;
