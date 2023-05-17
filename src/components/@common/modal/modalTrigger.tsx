import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../../contexts/modal";
import { getCustomElement } from "../../../utils/customElement";

interface ModalTriggerProps {
  asChild?: boolean;
  children?: React.ReactElement[] | React.ReactElement | undefined;
}

export function ModalTrigger(props: ModalTriggerProps) {
  const { asChild = false, children } = props;
  const { isOpen, openLocalModal, closeLocalModal } = useContext(ModalContext);
  const customElement = getCustomElement(asChild, children, props);

  function toggleLocalModal() {
    isOpen ? closeLocalModal() : openLocalModal();
  }

  if (customElement) {
    return isOpen ? customElement : null;
  }

  return isOpen ? (
    <DefaultModaltriggerStyle onClick={toggleLocalModal}>
      {children}
    </DefaultModaltriggerStyle>
  ) : null;
}

const DefaultModaltriggerStyle = styled.div``;
