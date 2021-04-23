import React from "react";
import classNames from "classnames";

const Button = props => {
  const { name, className, ...rest } = props;

  return (
    <button className={classNames("font-bold text-sm text-right text-custom-mint", className)} {...rest}>
      {name}
    </button>
  );
};

export default Button;
