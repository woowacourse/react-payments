import React from 'react';
import CardFormLabel from 'components/card/CardFormLabel';
import CardPasswordInputContainer from 'containers/card/CardPasswordInputContainer';
import { FieldBody, FieldHead, FieldSet } from './Fieldset';

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
