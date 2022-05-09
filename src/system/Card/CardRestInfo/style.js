import styled from 'styled-components';

import CARD_SIZE from '../constant';

import TextEllipsisStyled from '../../../components/TextEllipsis/style';
import SpanTextStyled from '../../../components/SpanText/style';
import FlexSpaceBetweenStyled from '../../../components/FlexSpaceBetween/style';

export const CardOwnerStyled = styled(TextEllipsisStyled)(({ size }) => `
  font-size: ${CARD_SIZE[size].cardFontSize};
`);

export const CardExpirationStyled = styled(SpanTextStyled)(({ size }) => `
  font-size: ${CARD_SIZE[size].cardFontSize};
`);

export const CardRestWrapperStyled = styled(FlexSpaceBetweenStyled)`
  height: unset;
`;
