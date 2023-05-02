import { useContext } from "react";
import { ReactNode } from "react";
import styled from "styled-components";
import { ModalDispatchContext, ModalStateContext } from "../../context";
import { slideBottomToUp, slideUpToBottom } from "../../style/keyframe";

interface BottomSheetType {
  children: ReactNode;
}

const BottomSheet = (props: BottomSheetType) => {
  const { isModalOpen } = useContext(ModalStateContext);
  const { toggleModal } = useContext(ModalDispatchContext);

  return (
    <>
      <BackDrop $isModalOpen={isModalOpen} onClick={toggleModal} />
      <BottomSheetWrapper $isModalOpen={isModalOpen}>
        {props.children}
      </BottomSheetWrapper>
    </>
  );
};

const BottomSheetWrapper = styled.div<{ $isModalOpen: boolean }>`
  display: ${(props) => (props.$isModalOpen ? "flex" : "none")};
  height: 227px;
  width: 100%;

  position: fixed;
  bottom: 0;
  left: 0px;

  background: #fdfdfd;
  border-radius: 5px 5px 0px 0px;

  animation: ${(props) =>
      props.$isModalOpen ? slideBottomToUp : slideUpToBottom}
    0.7s;
`;

const BackDrop = styled.div<{ $isModalOpen: boolean }>`
  visibility: ${(props) => (props.$isModalOpen ? "visible" : "hidden")};
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export default BottomSheet;
