import { useContext } from "react";
import { ReactNode } from "react";
import styled from "styled-components";
import { Context } from "../../context";

interface BottomSheetType {
  children: ReactNode;
}

const BottomSheet = (props: BottomSheetType) => {
  const { isModalOpen, toggleModal } = useContext(Context);

  return isModalOpen ? (
    <>
      <BackDrop onClick={toggleModal} />
      <BottomSheetWrapper>{props.children}</BottomSheetWrapper>
    </>
  ) : (
    <></>
  );
};

const BottomSheetWrapper = styled.div`
  display: flex;
  height: 227px;
  width: 100%;

  position: fixed;
  bottom: 0;
  left: 0px;

  background: #fdfdfd;
  border-radius: 5px 5px 0px 0px;
`;

const BackDrop = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export default BottomSheet;
