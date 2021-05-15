import { FC, MouseEvent, MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { GRAY, MINT } from '../../../constants/palette';
import { vibrate } from '../../../utils/vibrate';

interface Props {
  color?: string;
  position?: 'bottom-right';
  width?: string;
  height?: string;
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
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
`;

Button.defaultProps = {
  onTouchStart: () => vibrate(),
};

interface IconButtonProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  backgroundImage?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  className?: string;
}

export const IconButtonContainer = styled.div<IconButtonProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  width: fit-content;
  font-weight: 400;
  font-size: 0.9em;

  .icon {
    cursor: pointer;
    border: 0;
    outline: none;
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
    background-color: ${({ backgroundColor }) => backgroundColor || GRAY[100]};
    margin-bottom: 0.625rem;
    ${({ backgroundImage }) => backgroundImage && `background: url(${process.env.PUBLIC_URL + backgroundImage});`}
    background-size: cover;
  }
`;

export const IconButton: FC<IconButtonProps> = ({ className, children, backgroundColor, backgroundImage, onClick }) => {
  return (
    <IconButtonContainer
      className={className}
      onClick={onClick}
      onTouchStart={() => vibrate()}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
    >
      <div className="icon"> </div>
      <span>{children}</span>
    </IconButtonContainer>
  );
};

export default Button;
