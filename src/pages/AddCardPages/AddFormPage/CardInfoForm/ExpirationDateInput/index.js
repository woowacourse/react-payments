import { createRef, forwardRef } from 'react';
import { Container, Input, Label, Text } from '../../../../../components';
import { handleExpirationDateInputChange } from './handler';

export const ExpirationDateInput = forwardRef((props, monthRef) => {
  const { cardInfo, setCardInfo, ownerNameInputRef, setExpirationDateInString } = props;
  const { expirationDate } = cardInfo;
  const yearRef = createRef();
  const nextInput = {
    month: yearRef,
    year: ownerNameInputRef,
  };

  return (
    <>
      <Label>만료일</Label>
      <Container className="CardInfoForm__Input__Filler--filled ExpirationDateInput__Filler">
        <Input
          className="ExpirationDateInput__Field"
          placeholder="MM"
          type="number"
          name="month"
          ref={monthRef}
          value={expirationDate.month || ''}
          onChange={(e) => handleExpirationDateInputChange({ e, setCardInfo, nextInput })}
        />
        <Slash />
        <Input
          className="ExpirationDateInput__Field"
          placeholder="YY"
          type="number"
          name="year"
          ref={yearRef}
          value={expirationDate.year || ''}
          onChange={(e) =>
            handleExpirationDateInputChange({
              e,
              setCardInfo,
              nextInput,
              setExpirationDateInString,
              expirationDate,
            })
          }
        />
      </Container>
    </>
  );
});

function Slash() {
  return (
    <Text color="#737373" fontSize="0.75rem" textAlign="center" width="1rem">
      /
    </Text>
  );
}

ExpirationDateInput.displayName = 'ExpirationDateInput';
