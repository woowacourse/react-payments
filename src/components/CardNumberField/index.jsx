import { useContext } from 'react';
import useErrorMessage from 'hooks/useErrorMessage';
import { CardContext } from 'contexts';

import { FieldSet, TextField } from 'components/@common';

import { CARD_NUMBER } from 'constants';
import { validateCardNumber } from 'validators';

function CardNumberField() {
  const { cardNumber, onChangeTextField } = useContext(CardContext);
  const { errorMessage, handleError } = useErrorMessage({
    state: cardNumber,
    validate: validateCardNumber,
    isAnyValueEmpty: !cardNumber.every((unit) => unit !== ''),
  });

  return (
    <FieldSet title="카드 번호" errorMessage={errorMessage}>
      {Array.from({ length: CARD_NUMBER.UNIT_COUNT }).map((_, index) => (
        <TextField
          type={index < CARD_NUMBER.MASKING_INDEX ? 'text' : 'password'}
          name={CARD_NUMBER.TEXT_FIELD_NAME}
          // index 값이 변경될 일이 없으므로 index로 key 값 지정.
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          value={cardNumber[index]}
          maxLength={CARD_NUMBER.UNIT_LENGTH}
          onChange={(event) => onChangeTextField(event, { index })}
          onBlur={handleError}
        />
      ))}
    </FieldSet>
  );
}

export default CardNumberField;
