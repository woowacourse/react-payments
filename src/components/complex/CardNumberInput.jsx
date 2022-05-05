import { memo } from 'react';

import { Input } from '../common';

import CARD_RULE from '../../constants';
import { CardInfoContext } from '../../contexts';

function CardNumberInput() {
  return (
    <CardInfoContext.Consumer>
      {({ cardNumber, setCardNumber }) => (
        <div>
          <Input
            description="카드 번호"
            value={cardNumber}
            maxLength={CARD_RULE.NUMBER_MAX_LENGTH + 3}
            onChangeFunc={setCardNumber}
          />
        </div>
      )}
    </CardInfoContext.Consumer>
  );
}

export default memo(CardNumberInput);
