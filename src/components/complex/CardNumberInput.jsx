import { Input, InputContainer } from '..';

import { CardInfoContext } from '../../contexts';
import { CARD_RULE } from '../../constants';

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
