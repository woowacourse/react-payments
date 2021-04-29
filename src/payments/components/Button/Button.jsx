import React from "react";
import classNames from "classnames";

const Button = props => {
  const { name, className, ...rest } = props;

  return (
    <button className={classNames("text-right text-custom-mint text-sm font-bold", className)} {...rest}>
      {name}
    </button>
  );
};

export default Button;
