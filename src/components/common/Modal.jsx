import React from "react";
import styled from "styled-components";

export const Modal = ({ children, visible, handleVisible }) => {
  return (
    <ModalDimmedStyle onClick={handleVisible} isVisible={visible}>
      <ModalStyle>{children}</ModalStyle>
    </ModalDimmedStyle>
  );
};

const ModalDimmedStyle = styled.div`
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

  background: #fff;
  z-index: 10;
  flex-direction: column;
`;
