import { MouseEventHandler, forwardRef, useContext } from 'react';
import styled from 'styled-components';
import { Icon } from '../common/Icon/Icon';
import { ModalContext } from 'context/ModalContext';
import { CARDS_INFO } from '../../constants';
import { COMPANY_NAME } from 'components/common/Card/types';

export interface ModalProps {
  onClick: (bank: COMPANY_NAME) => void;
}

type Ref = HTMLDivElement;

export const Modal = forwardRef<Ref, ModalProps>(({ onClick, ...props }, ref) => {
  const { setIsModalOpen } = useContext(ModalContext);

  const handleModalClose = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleSelectCompany: MouseEventHandler<HTMLSpanElement> = (e) => {
    const company = e.currentTarget.textContent as COMPANY_NAME;

    onClick(company);
  };

  return (
    <>
      <Styled.ModalBackdrop onClick={handleModalClose} />

      <Styled.Modal {...props} ref={ref}>
        {Object.values(CARDS_INFO).map((value) => {
          return (
            <Icon imgSrc={value.iconSvgPath} name={value.name} onClick={handleSelectCompany} />
          );
        })}
        <Styled.ModalCloseButton onClick={handleModalClose}>X</Styled.ModalCloseButton>
      </Styled.Modal>
    </>
  );
});

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

    button {
      position: absolute;
      right: 0;
    }
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

  ModalCloseButton: styled.button`
    width: 20px;
    height: 20px;
    border: none;
    margin: 10px;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
  `,
};
