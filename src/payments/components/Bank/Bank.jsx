import React from "react";
import classNames from "classnames";

const Bank = props => (
  <div className="w-1/4 flex flex-col items-center">
    <div className={classNames("w-9 h-9 rounded-full mb-2.5", props.backgroundColor)}></div>
    <div className="font-medium text-xs text-custom-gray-300">{props.name}</div>
  </div>
);

export default Bank;
