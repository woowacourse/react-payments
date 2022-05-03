import React from 'react';
import CardPasswordInputContainer from '../atoms/card-password/CardPasswordInputContainer';
import { FieldHead, FieldSet, FieldBody } from '../templates/Fieldset';

function CardPasswordFieldset() {
  return (
    <FieldSet>
      <FieldHead>
        <label>카드 비밀번호</label>
      </FieldHead>
      <FieldBody>
        <CardPasswordInputContainer />
      </FieldBody>
    </FieldSet>
  );
}

export default CardPasswordFieldset;
