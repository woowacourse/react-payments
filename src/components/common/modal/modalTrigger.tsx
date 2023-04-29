import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../../contexts/modal";

export function ModalTrigger() {
  const { isOpen, openLocalModal, closeLocalModal } = useContext(ModalContext);

  function toggleLocalModal() {
    isOpen ? closeLocalModal() : openLocalModal();
  }

  return <Trigger onClick={toggleLocalModal}></Trigger>;
}

const Trigger = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: aqua;
`;
