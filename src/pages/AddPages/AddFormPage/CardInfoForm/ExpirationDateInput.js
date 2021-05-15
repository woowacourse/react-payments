import { useRef, forwardRef } from 'react';
import { Container, Input, Label, Text } from '../../../../components';
import { MONTH, YEAR, EXPIRATION_DATE_LENGTH } from '../../../../constants';

export const ExpirationDateInput = forwardRef((props, monthRef) => {
  const { expirationDate, setExpirationDate, refToBeFocusedNext } = props;

  const yearRef = useRef();
  const nextRef = {
    month: yearRef,
    year: refToBeFocusedNext,
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

function handleExpirationDateInputChange(props) {
  const { e, expirationDate, setExpirationDate, nextRef } = props;
  const inputName = e.target.name;
  const slicedInputValue = e.target.value.slice(0, EXPIRATION_DATE_LENGTH[inputName]);

  if (slicedInputValue.length === EXPIRATION_DATE_LENGTH[inputName]) {
    nextRef[inputName]?.current.focus();
  }
  setExpirationDate({ ...expirationDate, [inputName]: slicedInputValue });
}

ExpirationDateInput.displayName = 'ExpirationDateInput';
