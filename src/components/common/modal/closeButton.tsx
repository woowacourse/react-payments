import React from 'react';
import styled from 'styled-components';
import { useModalContext } from '.';
import { getCustomChildren } from '../../../utils/getCustomChildren';

interface ChildProps {
  children: React.ReactNode;
}

export interface CloseButtonProps extends ChildProps {
  isCustom?: boolean;
}

const CloseButton: React.FC<CloseButtonProps> = ({ children, isCustom }) => {
  const { closeModal } = useModalContext();

  return isCustom ? (
    getCustomChildren(children, { onClick: closeModal })
  ) : (
    <StyledDefaultCloseButton onClick={closeModal}>{children}</StyledDefaultCloseButton>
  );
};

const StyledDefaultCloseButton = styled.button`
  border: none;
  cursor: pointer;

  width: 80px;
  height: 40px;

  font-size: 16px;
  font-weight: 600;

  color: white;
  background: #318cef;
  border-radius: 8%;

  &:hover {
    background: #312cef;
  }
`;

export default CloseButton;
