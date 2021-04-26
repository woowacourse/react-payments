import { forwardRef } from 'react';
import { Container, Input, Label, Text } from '../../../../../components';

export const ExpirationDateInput = forwardRef((_, ref) => {
  return (
    <>
      <Label>만료일</Label>
      <Container className="CardInfoForm__Input__Filler--filled ExpirationDateInput__Filler">
        <Input
          className="ExpirationDateInput__Field"
          placeholder="MM"
          type="number"
          ref={ref}
          onChange={() => {}}
        />
        <Slash />
        <Input
          className="ExpirationDateInput__Field"
          placeholder="YY"
          type="number"
          onChange={() => {}}
        />
      </Container>
    </>
  );
});

function Slash() {
  return (
    <Text color="#737373" fontSize="0.75rem" textAlign="start" width="1rem">
      /
    </Text>
  );
}

ExpirationDateInput.displayName = 'ExpirationDateInput';
