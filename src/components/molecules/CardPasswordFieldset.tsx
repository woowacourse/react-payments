import React from 'react';
import CardPasswordInputContainer from '../atoms/card-password/CardPasswordInputContainer';
import CardFormLabel from '../atoms/CardFormLabel';
import { FieldHead, FieldSet, FieldBody } from '../templates/Fieldset';

function CardPasswordFieldset() {
  return (
    <FieldSet>
      <FieldHead>
        <CardFormLabel>카드 비밀번호</CardFormLabel>
      </FieldHead>
      <FieldBody>
        <CardPasswordInputContainer />
      </FieldBody>
    </FieldSet>
  );
}

export default CardPasswordFieldset;
