import styled from 'styled-components';
import { CARD } from '../../constants/style';

export const CardButton = styled.button`
  width: ${CARD.WIDTH};
  height: ${CARD.HEIGHT};
  border-radius: ${CARD.BORDER_RADIUS};
  background-color: #e5e5e5;
  font-size: 3rem;
  font-weight: 500;
  border: none;
`;
