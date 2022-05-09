import styled from 'styled-components';

import CARD_SIZE from '../constant';

import SpanTextStyled from '../../../components/SpanText/style';

export const CardNumberStyled = styled.p(({ size }) => `
  height: ${CARD_SIZE[size].cardNumberHeight};
  margin: ${CARD_SIZE[size].cardNumberMargin};
`);

export const NumberStyled = styled(SpanTextStyled)(({ size }) => `
  font-size: ${CARD_SIZE[size].cardFontSize};
  margin: ${CARD_SIZE[size].cardNumberEachMargin};
`);
