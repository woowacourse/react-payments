import styled from 'styled-components';
import { COLOR, FONT_SIZE } from '../../../../constants/style';

export const CardColorItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardColor = styled.div`
  margin: 0 auto 0.5rem auto;
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
  background-color: ${({ color }) => color || COLOR.CARD.DEFAULT};
`;

export const CardName = styled.div`
  font-size: ${FONT_SIZE.SMALL};
  letter-spacing: -0.085rem;
`;
