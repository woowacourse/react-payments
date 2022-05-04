import { useState } from "react";
import Portal from "../Portal";

const useModal = (element) => {
  const [visible, setVisible] = useState(false);

  const ModalElement = () => {
    return visible && <Portal>{element}</Portal>;
  };

  return [setVisible, ModalElement];
};

export default useModal;
