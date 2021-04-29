import React from "react";
import classNames from "classnames";

const Bank = props => {
  const handleBankClick = () => props.onClick(props.backgroundColor, props.name);

  return (
    <div className="flex flex-col items-center w-1/4 cursor-pointer" onClick={handleBankClick}>
      <div className={classNames("mb-2.5 w-9 h-9 rounded-full", props.backgroundColor)}></div>
      <div className="text-custom-gray-300 text-xs font-medium">{props.name}</div>
    </div>
  );
};

export default Bank;
