import React from "react";
import styled from "styled-components";

const Modal = ({ children, onClickDimmed }) => {
  return (
    <Container>
      <Dimmed onClick={onClickDimmed} />
      {children}
    </Container>
  );
};

const Dimmed = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00000080;
  z-index: 10;
`;

const Container = styled.div``;

export default Modal;
