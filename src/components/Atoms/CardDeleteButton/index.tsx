import styled from 'styled-components';
import { ReactNode } from 'react';

interface CardDeleteButtonProps {
  onDeleteClick: () => void;
  children: ReactNode;
}

function CardDeleteButton({ onDeleteClick, children }: CardDeleteButtonProps) {
  return <Button onClick={onDeleteClick}>{children}</Button>;
}

export default CardDeleteButton;

const Button = styled.button`
  background-color: transparent;
  color: red;
  cursor: pointer;

  &:hover {
    color: #fc7272;
  }
`;
