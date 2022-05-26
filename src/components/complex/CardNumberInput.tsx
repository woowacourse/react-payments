import { Input, InputContainer } from '..';

import { CARD_RULE } from 'constants/index';
import { CardInfoContext } from 'contexts';

export default function CardNumberInput() {
  return (
    <CardInfoContext.Consumer>
      {({ cardNumber, setCardNumber }) => (
        <InputContainer>
          <Input
            description="카드 번호"
            id="cardNumber"
            value={cardNumber}
            maxLength={CARD_RULE.NUMBER_MAX_LENGTH + 3}
            onChangeFunc={setCardNumber}
          />
        </InputContainer>
      )}
    </CardInfoContext.Consumer>
  );
}
