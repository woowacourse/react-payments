import React from 'react';
import CardPasswordInputContainerList from '../atoms/card-password/CardPasswordInputContainerList';
import { FieldHead, FieldSet, FieldBody } from '../templates/Fieldset';

function CardPasswordFieldset() {
  return (
    <FieldSet>
      <FieldHead>
        <label>카드 비밀번호</label>
      </FieldHead>
      <FieldBody>
        <CardPasswordInputContainerList />
      </FieldBody>
    </FieldSet>
  );
}

export default CardPasswordFieldset;
