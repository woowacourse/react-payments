import styled, { css } from 'styled-components';
import PALETTE from '../../../constants/palette';
import { IconButtonProps } from './IconButton';

export const bottomRight = css`
  position: fixed;
  right: 4%;
  bottom: 4%;
`;

export const IconButtonContainer = styled.div<IconButtonProps>`
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
    background-color: ${({ backgroundColor }) => backgroundColor || PALETTE.GRAY_1};
    margin-bottom: 0.625rem;
  }
`;
