import React from "react";
import classNames from "classnames";

const CardShape = props => (
  <div
    className={classNames(
      "rounded-md shadow-md p-3 relative cursor-pointer transform w-52 h-32",
      props.backgroundColor ?? "bg-custom-gray-200",
      props.scale
    )}
    onClick={props.onClick}
  >
    {!props.isRegistered && (
      <>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-600 opacity-50"></div>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800">+</span>
      </>
    )}
    {props.children}
  </div>
);

export default CardShape;
