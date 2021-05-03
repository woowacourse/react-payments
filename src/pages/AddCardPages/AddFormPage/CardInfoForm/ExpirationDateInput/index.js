import { createRef, forwardRef } from 'react';
import { Container, Input, Label, Text } from '../../../../../components';
import { handleExpirationDateInputChange } from './handler';
import { MONTH, YEAR } from '../../../../../constants';

export const ExpirationDateInput = forwardRef((props, monthRef) => {
  const { expirationDate, setExpirationDate, ownerNameInputRef } = props;
  const yearRef = createRef();
  const nextRef = {
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
          name={MONTH}
          ref={monthRef}
          value={expirationDate.month}
          onChange={(e) => handleExpirationDateInputChange({ e, expirationDate, setExpirationDate, nextRef })}
        />
        <Text className="ExpirationDateInput__Separator">/</Text>
        <Input
          className="ExpirationDateInput__Field"
          placeholder="YY"
          type="number"
          name={YEAR}
          ref={yearRef}
          value={expirationDate.year}
          onChange={(e) => handleExpirationDateInputChange({ e, expirationDate, setExpirationDate, nextRef })}
        />
      </Container>
    </>
  );
});

ExpirationDateInput.displayName = 'ExpirationDateInput';
