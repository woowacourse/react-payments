import { COLOR, FONT_SIZE, FONT_WEIGHT } from '../../constants/style';

import styled from 'styled-components';

export const AddCard = styled.div`
  font-size: ${FONT_SIZE.XXLARGE};
  color: ${COLOR.PLUS};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const CardColumn = styled.div`
  display: flex;
  padding: 0.1rem 0;
`;

export const CardName = styled.div`
  margin-bottom: 1.5rem;
  min-height: 21px;
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const CardNumbers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 19px;
  font-size: ${FONT_SIZE.NORMAL};
  font-weight: ${FONT_WEIGHT.BOLD};
  letter-spacing: 3px;
`;

export const CardDetails = styled.div`
  width: 100%;
  display: flex;
  min-height: 19px;
  justify-content: space-between;
  align-items: center;
  font-size: ${FONT_SIZE.NORMAL};
  font-weight: ${FONT_WEIGHT.BOLD};
  letter-spacing: 1.5px;
`;

export const CardUser = styled.div`
  max-width: 10rem;
  max-height: 1rem;
  white-space: nowrap;
  overflow-y: visible;
  overflow-x: clip;
  text-overflow: ellipsis;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardDate = styled.div``;

export const USIM = styled.div`
  width: 4rem;
  height: 2.5rem;
  border-radius: 4px;
  background-color: ${COLOR.USIM.BG};
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.2rem 1.5rem;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 0px ${COLOR.CARD.BOX_SHADOW};
  font-size: ${FONT_SIZE.LARGE};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${({ bgColor }) =>
    bgColor !== undefined ? bgColor : COLOR.CARD.DEFAULT};

  ${({ cardMode }) => (cardMode ? AddCard : CardColumn)};

  text-shadow: ${({ bgColor }) =>
    bgColor !== undefined && `1px 1px 3px #00000030`};

  * {
    color: #ffffff;
  }
`;
