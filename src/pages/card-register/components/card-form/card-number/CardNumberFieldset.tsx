import React from 'react';
import CardNumberInputContainer from './CardNumberInputContainer';
import { FieldsetContent, Fieldset, FieldsetHead } from '../Fieldset';

function CardNumberFieldset() {
  return (
    <Fieldset>
      <FieldsetHead marginBottom="8px">
        <label>카드 번호</label>
      </FieldsetHead>
      <FieldsetContent>
        <CardNumberInputContainer />
      </FieldsetContent>
    </Fieldset>
  );
}

export default CardNumberFieldset;
