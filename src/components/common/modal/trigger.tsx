import React from 'react';
import styled from 'styled-components';
import { CustomProps, useModalContext } from '.';
import { getCustomChildren } from '../../../utils/getCustomChildren';

const Trigger: React.FC<CustomProps> = ({ children, isCustom }) => {
  const { isModal, closeModal, openModal } = useModalContext();

  const toggleModal = () => {
    if (isModal) {
      closeModal();
      return;
    }

    openModal();
  };

  return isCustom ? (
    getCustomChildren(children, { onClick: toggleModal })
  ) : (
    <StyledDefaultTrigger onClick={toggleModal}>{children}</StyledDefaultTrigger>
  );
};

const StyledDefaultTrigger = styled.button`
  border: none;
  cursor: pointer;

  width: 80px;
  height: 40px;

  font-size: 16px;
  font-weight: 600;

  color: black;
  background: #f2f2f2;
  border-radius: 8%;

  &:hover {
    background: #e2e8f0ff;
  }
`;

export default Trigger;
