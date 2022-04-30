import React from "react";

import ModalPortal from "./ModalPortal";

type Position = "top" | "middle" | "bottom";

const positionTag: { [P in Position]: string } = {
  top: "flex-start",
  middle: "center",
  bottom: "flex-end",
};

interface ModalProps {
  position: Position;
  children: React.ReactNode;
  closeModal: () => void;
}

export default function Modal({ position, children, closeModal }: ModalProps) {
  return (
    <ModalPortal>
      <div
        className="modal-dimmed"
        style={{ justifyContent: `${positionTag[position]}` }}
        onClick={e => {
          if (e.target === e.currentTarget) {
            closeModal();
          }
        }}
      >
        {children}
      </div>
    </ModalPortal>
  );
}
