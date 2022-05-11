import styled from 'styled-components';

import CARD_SIZE from './constant';

const CardWrapperStyled = styled.div(({ size, color }) => `
  cursor: pointer;
  width: ${CARD_SIZE[size].width};
  height: ${CARD_SIZE[size].height};
  padding: ${CARD_SIZE[size].padding};
  margin-bottom: ${CARD_SIZE[size].marginBottom};
  background-color: var(${color});
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`);

export default CardWrapperStyled;
