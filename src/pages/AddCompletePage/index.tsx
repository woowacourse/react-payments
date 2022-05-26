import { AppContainer } from 'components';
import { CardType } from 'types';
import Fail from './Fail';
import Success from './Success';
import { memo } from 'react';

type Props = { card: CardType };

function AddCompletePage({ card }: Props) {
  return (
    <AppContainer alignItems="center">
      {card.cardNumber ? <Success card={card} /> : <Fail />}
    </AppContainer>
  );
}

export default memo(AddCompletePage);
