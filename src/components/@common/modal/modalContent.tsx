import { useContext } from "react";
import { ModalContext } from "../../../contexts/modal";
import { getCustomElement } from "../../../utils/custumElement";

interface ModalContentProps {
  asChild?: boolean;
  children?: React.ReactElement[] | React.ReactElement | undefined;
}
export function ModalContent(props: ModalContentProps) {
  const { children, asChild = false } = props;
  const { isOpen } = useContext(ModalContext);
  const customElement = getCustomElement(asChild, children, props);

  if (customElement) {
    return isOpen ? customElement : null;
  }

  return isOpen ? <>{children}</> : null;
}
