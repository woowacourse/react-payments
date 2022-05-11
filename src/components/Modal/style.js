import styled from "styled-components";

const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`;

const ModalForm = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export { ModalOverlay, ModalForm };
