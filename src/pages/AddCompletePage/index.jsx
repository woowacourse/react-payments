import { memo } from 'react';

import Success from './Success';
import Fail from './Fail';
import { AppContainer } from '../../components';

function AddCompletePage({ card }) {
  return (
    <AppContainer alignItems="center">
      {card.cardNumber ? <Success card={card} /> : <Fail />}
    </AppContainer>
  );
}

export default memo(AddCompletePage);
