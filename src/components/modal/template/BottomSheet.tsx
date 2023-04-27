import { Fragment, ReactNode, SetStateAction } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const BottomSheet = ({ children, setIsOpen }: Props) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      <Style.BackDrop onClick={closeModal} />
      <Style.Content>{children}</Style.Content>
    </Fragment>
  );
};

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

    animation: modal-show 0.4s;
    @keyframes modal-show {
      from {
        opacity: 0;
        transform: translateY(100%);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
};
