import styled from 'styled-components';

import CARD_SIZE from '../constant';

const CardCompanyNameStyled = styled.p(({ size }) => `
  height: ${CARD_SIZE[size].cardCompanyNameHeight};
  margin: 0;
  font-size: ${CARD_SIZE[size].cardCompanyNameFontSize};
  color: var(--card-alias-color);
`);

export default CardCompanyNameStyled;
