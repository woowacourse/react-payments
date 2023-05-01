import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../../contexts/modal";

export function ModalBackDrop() {
  const { isOpen, openLocalModal, closeLocalModal } = useContext(ModalContext);

  window.addEventListener("keyup", () => {
    closeLocalModal();
  });

  return isOpen ? <ModalBackground onClick={closeLocalModal} /> : <></>;
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  background-color: rgb(0, 0, 0, 0.5);
`;
