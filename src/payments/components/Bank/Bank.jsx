import React from "react";
import classNames from "classnames";

const Bank = props => {
  const handleBankClick = () => props.onClick(props.backgroundColor, props.name);

  return (
    <div className="w-1/4 flex flex-col items-center cursor-pointer" onClick={handleBankClick}>
      <div className={classNames("w-9 h-9 rounded-full mb-2.5", props.backgroundColor)}></div>
      <div className="font-medium text-xs text-custom-gray-300">{props.name}</div>
    </div>
  );
};

export default Bank;
