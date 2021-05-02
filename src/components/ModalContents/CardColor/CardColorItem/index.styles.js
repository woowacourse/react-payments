import styled from 'styled-components';
import { COLOR, FONT_SIZE } from '../../../../constants/constant';

export const CardColorItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  .card-color {
    margin: 0 auto 0.5rem auto;
    border-radius: 50%;
    width: 2.8rem;
    height: 2.8rem;
    background-color: ${({ color }) => color || COLOR.CARD.DEFAULT};
  }

  .card-name {
    font-size: ${FONT_SIZE.SMALL};
    letter-spacing: -0.085rem;
  }
`;
