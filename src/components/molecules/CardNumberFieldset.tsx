import React from 'react';
import CardNumberInputContainer from '../atoms/card-number/CardNumberInputContainer';
import { FieldHead, FieldSet, FieldBody } from '../templates/Fieldset';

function CardNumberFieldset() {
  return (
    <>
      <FieldSet>
        <FieldHead marginBottom="8px">
          <label>카드 번호</label>
        </FieldHead>
        <FieldBody>
          <CardNumberInputContainer />
        </FieldBody>
      </FieldSet>
    </>
  );
}

export default CardNumberFieldset;
