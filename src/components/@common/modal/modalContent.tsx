import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  useContext,
} from "react";
import { ModalContext } from "../../../contexts/modal";

interface ModalContentProps {
  asChild?: boolean;
}
export function ModalContent(props: PropsWithChildren<ModalContentProps>) {
  const { children, asChild } = props;
  const { isOpen } = useContext(ModalContext);
  const childrenList = Children.toArray(children);

  if (isOpen && asChild && isValidElement(childrenList[0])) {
    return cloneElement(childrenList[0], {});
  }

  return <div>{isOpen && children}</div>;
}
