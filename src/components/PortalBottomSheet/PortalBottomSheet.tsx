import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import * as styled from './PortalBottomSheet.styled';

const PortalBottomSheet = ({
  handleCloseModal,
  children,
}: {
  handleCloseModal: () => void;
  children: ReactNode;
}) => {
  return (
    <>
      {createPortal(
        <styled.PortalBottomSheet>
          <styled.Backdrop onClick={handleCloseModal} />
          <styled.Contents>{children}</styled.Contents>;
        </styled.PortalBottomSheet>,
        document.body
      )}
    </>
  );
};

export default PortalBottomSheet;
