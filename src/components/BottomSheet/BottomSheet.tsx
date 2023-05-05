import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import * as styled from './BottomSheet.styled';

const BottomSheet = ({
  handleCloseModal,
  children,
}: {
  handleCloseModal: () => void;
  children: ReactNode;
}) => {
  return (
    <>
      {createPortal(
        <styled.BottomSheetBox>
          <styled.BackdropBox onClick={handleCloseModal} />
          <styled.ContentSection>{children}</styled.ContentSection>;
        </styled.BottomSheetBox>,
        document.body
      )}
    </>
  );
};

export default BottomSheet;
