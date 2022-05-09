import styled from 'styled-components';

import CARD_SIZE from '../constant';

const CardChipStyled = styled.div(({ size }) => `
  width: ${CARD_SIZE[size].cardChipWidth};
  height: ${CARD_SIZE[size].cardChipHeight};
  margin-top: ${CARD_SIZE[size].cardChipMarginTop};
  background var(--card-chip-background-color);
  border-radius: 4px;
`);

export default CardChipStyled;
