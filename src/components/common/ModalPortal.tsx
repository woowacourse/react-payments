import reactDom from "react-dom";

export default function ModalPortal({ children }: { children: React.ReactNode }) {
  return reactDom.createPortal(children, document.getElementById("modal"));
}
