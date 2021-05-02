import styled from 'styled-components';
import { GRAY } from '../../../constants/palette';
import { mdSize } from '../../shared/CreditCard/styles';

export const CardButton = styled.button`
  ${mdSize}
  background-color: ${GRAY[100]};
  font-size: 3rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
`;
