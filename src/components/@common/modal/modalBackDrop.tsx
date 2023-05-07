import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../../contexts/modal";
import { getCustomElement } from "../../../utils/customElement";

interface ModalBackDropProps {
  asChild?: boolean;
  children?: React.ReactElement[] | React.ReactElement | undefined;
}

export function ModalBackDrop(props: ModalBackDropProps) {
  const { asChild = false, children } = props;
  const { isOpen, closeLocalModal } = useContext(ModalContext);
  const customElement = getCustomElement(asChild, children, props);

  window.addEventListener("keyup", () => {
    closeLocalModal();
  });

  if (customElement) {
    return isOpen ? customElement : null;
  }

  return isOpen ? (
    <DefaultModalBackdropStyle onClick={closeLocalModal} />
  ) : null;
}

const DefaultModalBackdropStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  background-color: rgb(0, 0, 0, 0.5);
`;
