import { useRef } from "react";
import ModalContainer from ".";

export default {
  title: "ModalContainer",
  component: ModalContainer,
};

export const Modal = () => {
  const ref = useRef(null);
  return (
    <ModalContainer contentsRef={ref}>
      <div ref={ref} style={{ backgroundColor: "white", height: "100px" }}>
        가나다라마바사아
      </div>
    </ModalContainer>
  );
};

export const BigModal = () => {
  const ref = useRef(null);
  return (
    <ModalContainer contentsRef={ref}>
      <div ref={ref} style={{ backgroundColor: "blue", height: "300px" }}>
        큰 모달
      </div>
    </ModalContainer>
  );
};
