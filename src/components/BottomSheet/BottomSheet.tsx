import ModalPortal from '../ModalPortal/ModalPortal';
import styled from 'styled-components';

type BottomSheetProps = {
  closeModal: () => void;
};

const BottomSheet = ({ closeModal, children }: React.PropsWithChildren<BottomSheetProps>) => {
  return (
    <ModalPortal closeModal={closeModal}>
      <Styled.Contents>{children}</Styled.Contents>
    </ModalPortal>
  );
};

export default BottomSheet;

const Contents = styled.div`
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 7px 7px 0px 0px;

  transform: translateY(100%);
  animation: openModalAnimation 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s forwards;

  @keyframes openModalAnimation {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;

const Styled = {
  Contents,
};
