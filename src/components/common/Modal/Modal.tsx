import { forwardRef } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon/Icon';

export interface ModalProps {
  ImgSources?: string[];
  names?: string[];
  onClick: (bank: string) => void;
}

type Ref = HTMLDivElement;

export const Modal = forwardRef<Ref, ModalProps>(
  ({ names, ImgSources, onClick, ...props }, ref) => {
    return (
      <>
        <Styled.ModalBackdrop />
        <Styled.Modal {...props} ref={ref}>
          {ImgSources &&
            names &&
            ImgSources?.map((value, index) => {
              return (
                <Icon imgSrc={value} name={names[index]} onClick={() => onClick(names[index])} />
              );
            })}
        </Styled.Modal>
      </>
    );
  },
);

const Styled = {
  Modal: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: flex-start;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 375px;
    height: 227px;
    z-index: 2;
    border-radius: 7px 7px 0 0;
    background-color: white;
    overflow: scroll;
  `,
  ModalBackdrop: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
  `,
};
