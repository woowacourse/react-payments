import React from "react";

const BankSelector = props => (
  <div className="flex justify-center items-center rounded-t-md bg-custom-white w-full  h-56 absolute left-0 bottom-0">
    <div className="flex flex-wrap m-auto gap-y-6">{props.children}</div>
  </div>
);

export default BankSelector;
