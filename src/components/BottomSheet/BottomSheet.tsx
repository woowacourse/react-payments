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
`;

const Styled = {
  Contents,
};
