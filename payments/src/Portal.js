import reactDom from "react-dom";

const Portal = ({ children }) => {
  const el = document.getElementById("modal");
  console.log(el);
  return reactDom.createPortal(children, el);
};

export default Portal;
