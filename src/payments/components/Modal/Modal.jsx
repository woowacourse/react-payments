import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const $modalRoot = document.querySelector("#modal-root");

const createDefaultContainer = () => {
  const $container = document.createElement("div");
  $container.className = "absolute inset-0 w-full h-screen flex justify-end flex-col bg-black bg-opacity-50";

  return $container;
};

const Modal = ({ children }) => {
  const [$container] = useState(createDefaultContainer);

  useEffect(() => {
    $modalRoot.append($container);

    return $container.remove.bind($container);
  });

  return ReactDOM.createPortal(children, $container);
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Modal;
