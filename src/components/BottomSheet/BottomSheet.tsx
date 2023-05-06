import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import * as styled from './BottomSheet.styled';

const BottomSheet = ({
  handleModalClose,
  children,
}: {
  handleModalClose: () => void;
  children: ReactNode;
}) => {
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
