import { forwardRef } from 'react';
import styled from 'styled-components';
import { Icon } from '../common/Icon/Icon';
import { COMPANY_NAME } from '../common/Card/types';

export interface ModalProps {
  ImgSources?: string[];
  names?: COMPANY_NAME[];
  onClick: (bank: COMPANY_NAME) => void;
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
    display: grid;
    grid-template-columns: 80px 80px 80px 80px;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 227px;
    z-index: 100;
    border-radius: 10px 10px 0 0;
    background-color: white;
    overflow: scroll;
  `,
  ModalBackdrop: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
  `,
};
