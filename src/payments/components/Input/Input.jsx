import React from "react";
import classNames from "classnames";

const Input = props => {
  const { className, isValid = true, ...rest } = props;

  return (
    <input
      className={classNames(
        "placeholder-center p-3 h-11 text-custom-mint text-lg font-medium bg-custom-gray-100 rounded-md",
        !isValid && "outline-none ring-2 ring-rose-400",
        className
      )}
      {...rest}
    />
  );
};

export default Input;
