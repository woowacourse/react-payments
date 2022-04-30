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
}

export default function Modal({ position, children }: ModalProps) {
  return (
    <ModalPortal>
      <div className="modal-dimmed" style={{ justifyContent: `${positionTag[position]}` }}>
        {children}
      </div>
    </ModalPortal>
  );
}
