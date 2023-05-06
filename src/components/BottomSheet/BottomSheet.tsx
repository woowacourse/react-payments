import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import * as styled from './BottomSheet.styled';

interface BottomSheetProps {
  isOpenModal: boolean;
  handleModalClose: () => void;
}

const BottomSheet = ({
  isOpenModal,
  handleModalClose,
  children,
}: PropsWithChildren<BottomSheetProps>) => {
  if (!isOpenModal) {
    return null;
  }

  return (
    <>
      {createPortal(
        <styled.BottomSheetBox>
          <styled.BackdropBox onClick={handleModalClose} />
          <styled.ContentSection>{children}</styled.ContentSection>;
        </styled.BottomSheetBox>,
        document.body
      )}
    </>
  );
};

export default BottomSheet;
