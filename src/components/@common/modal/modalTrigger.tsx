import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  useContext,
} from "react";
import { ModalContext } from "../../../contexts/modal";

interface ModalTriggerProps {
  asChild?: boolean;
}

export function ModalTrigger(props: PropsWithChildren<ModalTriggerProps>) {
  const { asChild, children } = props;
  const { isOpen, openLocalModal, closeLocalModal } = useContext(ModalContext);
  const childrenList = Children.toArray(children);

  function toggleLocalModal() {
    isOpen ? closeLocalModal() : openLocalModal();
  }

  if (asChild && isValidElement<{ onClick: () => void }>(childrenList[0])) {
    return cloneElement(childrenList[0], { onClick: toggleLocalModal });
  }
  return <div onClick={toggleLocalModal}>{children}</div>;
}
