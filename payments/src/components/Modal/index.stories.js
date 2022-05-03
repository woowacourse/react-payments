import { useState } from "react";
import Modal from ".";
import Portal from "../../Portal";

export default {
  title: "Modal",
  component: Modal,
};

export const ModalTest = () => {
  const [isOpen, setOpen] = useState(true);
  return (
    isOpen && (
      <Modal closeModal={() => setOpen(false)}>
        <div
          style={{ width: "100%", height: "30%", backgroundColor: "white" }}
        ></div>
      </Modal>
    )
  );
};
