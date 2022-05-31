import React from "react";
import styled from "styled-components";
import { COLORS } from "constants/color";

interface ModalComponent {
  children: React.ReactNode;
  visible: boolean;
  handleVisible: () => void;
}

export const Modal = ({ children, visible, handleVisible }: ModalComponent) => {
  return (
    <ModalDimmedStyle onClick={handleVisible} isVisible={visible}>
      <ModalStyle>{children}</ModalStyle>
    </ModalDimmedStyle>
  );
};

const ModalDimmedStyle = styled.div<{ isVisible: boolean }>`
  width: 100%;
  height: 100%;

  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: column;
  justify-content: flex-end;

  position: absolute;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);

  border-radius: 15px;

  z-index: 5;
`;

const ModalStyle = styled.div`
  width: 100%;
  height: 220px;

  border-radius: 5px 5px 15px 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background: ${COLORS.WHITE_50};
  z-index: 10;
  flex-direction: column;
`;
