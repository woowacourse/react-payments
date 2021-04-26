import React from "react";
import classNames from "classnames";

const Input = props => {
  const { className, isValid = true, ...rest } = props;

  return (
    <input
      className={classNames(
        "rounded-md bg-custom-gray-100 text-custom-mint h-11 placeholder-center p-3 text-lg font-medium",
        !isValid && "outline-none ring-2 ring-rose-400",
        className
      )}
      {...rest}
    />
  );
};

export default Input;
