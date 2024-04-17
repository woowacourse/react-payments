import React from "react";

interface Props {
  children: React.ReactNode;
}

const Tooltip = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Tooltip;
