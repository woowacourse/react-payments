import styled from 'styled-components';
import PALETTE from '../../../../../constants/palette';

export const PasswordDot = styled.span`
  &::after {
    content: '';
    width: 0.375em;
    height: 0.375em;
    display: block;
    border-radius: 50%;
    background-color: ${PALETTE.BAEMINT};
  }
`;
