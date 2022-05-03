import reactDom from "react-dom";

const Portal = ({ children }) => {
  const el = document.getElementById("modal");
  return reactDom.createPortal(children, el);
};

export default Portal;
