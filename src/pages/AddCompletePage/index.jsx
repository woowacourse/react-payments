import { memo } from 'react';
import styled from 'styled-components';

import Success from './Success';
import Fail from './Fail';

const StyledPage = styled.div`
  align-items: center;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 400px;
  height: 757px;
`;

function AddCompletePage({ card }) {
  return (
    <StyledPage>
      {card.cardNumber ? <Success card={card} /> : <Fail />}
    </StyledPage>
  );
}

export default memo(AddCompletePage);
