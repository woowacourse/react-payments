import { memo } from 'react';

import { Input } from '..';

import { CardInfoContext } from '../../contexts';
import { CARD_RULE } from '../../constants';
import encryptCardNumber from '../../utils';
import { splitCardNumbers } from '../../utils/regExp';

function CardNumberInput() {
  return (
    <CardInfoContext.Consumer>
      {({ cardNumber, setCardNumber }) => (
        <div>
          <Input
            description="카드 번호"
            value={splitCardNumbers(encryptCardNumber(cardNumber), '-') ?? ''}
            maxLength={CARD_RULE.NUMBER_MAX_LENGTH + 3}
            onChangeFunc={setCardNumber}
          />
        </div>
      )}
    </CardInfoContext.Consumer>
  );
}

export default memo(CardNumberInput);
