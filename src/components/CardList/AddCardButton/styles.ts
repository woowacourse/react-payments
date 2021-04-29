import styled from 'styled-components';
import PALETTE from '../../../constants/palette';
import { mdSize } from '../../common/CreditCard/styles';

export const CardButton = styled.button`
  ${mdSize}
  background-color: ${PALETTE.GRAY_2};
  font-size: 3rem;
  font-weight: 500;
  border: none;
`;
