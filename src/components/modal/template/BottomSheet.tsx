import { Fragment, ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';
import { useModalActionContext } from '../../../hooks/useModalContext';

interface Props {
  children: ReactNode;
}

export const BottomSheet = ({ children }: Props) => {
  const { closeModal } = useModalActionContext();

  return (
    <Fragment>
      <Style.BackDrop onClick={closeModal} />
      <Style.Content>{children}</Style.Content>
    </Fragment>
  );
};

const ModalShowKeyframes = keyframes`
from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Style = {
  BackDrop: styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    background-color: #0000006d;
  `,
  Content: styled.div`
    width: 100vw;
    height: max-content;

    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;

    padding: 20px 0;
    background-color: white;

    animation: ${ModalShowKeyframes} 0.4s;
  `,
};
