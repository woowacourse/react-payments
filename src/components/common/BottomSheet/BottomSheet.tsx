import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export type BottomSheetProps = {
  active: boolean;
};

export function BottomSheet(props: PropsWithChildren<BottomSheetProps>) {
  const { children, active } = props;

  if (!active) return null;

  return (
    <BackDrop>
      <ContentContainer {...props}>{children}</ContentContainer>
    </BackDrop>
  );
}

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.35);
`;

const ContentContainer = styled.div<BottomSheetProps>`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  border-radius: 10px 10px 0px 0px;
`;
