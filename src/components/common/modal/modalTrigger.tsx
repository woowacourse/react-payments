import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  PropsWithChildren,
  useContext,
} from "react";
import styled from "styled-components";
import { ModalContext } from "../../../contexts/modal";

interface ModalTriggerProps {
  asChild?: boolean;
}

export const ModalTrigger = forwardRef(function ModalTrigger(
  props: PropsWithChildren<ModalTriggerProps>,
  ref?: any
) {
  const { asChild, children } = props;
  const { isOpen, openLocalModal, closeLocalModal } = useContext(ModalContext);
  const childrenList = Children.toArray(children);

  function toggleLocalModal() {
    isOpen ? closeLocalModal() : openLocalModal();
  }

  if (asChild && isValidElement<{ onClick: () => void }>(childrenList[0])) {
    return cloneElement(childrenList[0], { onClick: toggleLocalModal });
  }
  return (
    <div onClick={toggleLocalModal} ref={ref}>
      {children}
    </div>
  );
});
