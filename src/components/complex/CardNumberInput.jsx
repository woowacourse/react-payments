import { Input, InputContainer } from '..';

import { CardInfoContext } from '../../contexts';
import { CARD_RULE } from '../../constants';
import { encryptCardNumber } from '../../utils/processCard';
import { splitCardNumbers } from '../../utils/regExp';

export default function CardNumberInput() {
  return (
    <CardInfoContext.Consumer>
      {({ cardNumber, setCardNumber }) => (
        <InputContainer>
          <Input
            description="카드 번호"
            id="cardNumber"
            value={splitCardNumbers(encryptCardNumber(cardNumber), '-') ?? ''}
            maxLength={CARD_RULE.NUMBER_MAX_LENGTH + 3}
            onChangeFunc={setCardNumber}
          />
        </InputContainer>
      )}
    </CardInfoContext.Consumer>
  );
}
