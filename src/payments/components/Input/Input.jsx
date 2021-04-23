import React from "react";
import classNames from "classnames";

const Input = props => {
  const { className, ...rest } = props;

  return (
    <input
      className={classNames("rounded-md bg-input-gray h-11 placeholder-center p-3 text-lg font-medium", className)}
      {...rest}
    />
  );
};

export default Input;
