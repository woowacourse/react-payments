import ReactDOM from "react-dom";

const ModalPortal = ({ children }) => {
  const modalElement = document.getElementById("modal");
  return ReactDOM.createPortal(children, modalElement);
};

export default ModalPortal;
