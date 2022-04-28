import { useRef, useState } from "react";
import ModalContainer from ".";

export default {
  title: "ModalContainer",
  component: ModalContainer,
};

export const Modal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(true);
  return (
    <ModalContainer contentsRef={ref} visible={visible} setVisible={setVisible}>
      <div ref={ref} style={{ backgroundColor: "white", height: "100px" }}>
        작은모달
      </div>
    </ModalContainer>
  );
};

export const BigModal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(true);

  return (
    <ModalContainer contentsRef={ref} visible={visible} setVisible={setVisible}>
      <div ref={ref} style={{ backgroundColor: "blue", height: "300px" }}>
        큰 모달
      </div>
    </ModalContainer>
  );
};
