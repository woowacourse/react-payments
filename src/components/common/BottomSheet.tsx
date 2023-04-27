import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

type BackdropProps = {
  $open: boolean;
};

const Backdrop = styled.div<BackdropProps>`
  display: ${(props) => (props.$open ? 'flex' : 'none')};
  align-items: flex-end;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.4);
`;

const StyledBottomSheet = styled.div`
  width: 100%;

  padding: 16px;
  padding-bottom: 24px;

  border-radius: 5px 5px 0 0;
  background: ${(props) => props.theme.color.grey1};
`;

type BottomSheetProps = {
  onClose: () => void;
  open: boolean;
};

export const BottomSheet = (props: PropsWithChildren<BottomSheetProps>) => {
  const { children, onClose, open } = props;

  const handleClickContent: React.MouseEventHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <Backdrop onClick={onClose} $open={open}>
      <StyledBottomSheet onClick={handleClickContent}>{children}</StyledBottomSheet>
    </Backdrop>
  );
};
