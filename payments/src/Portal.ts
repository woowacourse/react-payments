import React from "react";
import reactDom from "react-dom";

const Portal = ({ children }: { children: React.ReactNode }) => {
  const el = document.getElementById("modal") as Element;
  return reactDom.createPortal(children, el);
};

export default Portal;
