import { FC, MouseEvent, MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { GRAY, MINT } from '../../../constants/palette';

interface Props {
  color?: string;
  position?: 'bottom-right';
}

const bottomRight = css`
  position: fixed;
  right: 4%;
  bottom: 4%;
`;

const Button = styled.button<Props>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ color }) => color || MINT[500]};
  ${({ position }) => position === 'bottom-right' && bottomRight}
`;

interface IconButtonProps {
  backgroundColor?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const IconButtonContainer = styled.div<IconButtonProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  width: fit-content;
  font-weight: 400;
  font-size: 0.9em;

  button {
    cursor: pointer;
    border: 0;
    outline: none;
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
    background-color: ${({ backgroundColor }) => backgroundColor || GRAY[100]};
    margin-bottom: 0.625rem;
  }
`;

export const IconButton: FC<IconButtonProps> = ({ children, backgroundColor, onClick }) => {
  return (
    <IconButtonContainer onClick={onClick} backgroundColor={backgroundColor}>
      <button type="button" />
      <span>{children}</span>
    </IconButtonContainer>
  );
};

export default Button;
