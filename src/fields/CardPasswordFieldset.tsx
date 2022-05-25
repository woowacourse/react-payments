import React from 'react';

import CardFormLabel from 'components/card/CardFormLabel';
import CardPasswordInputContainer from 'containers/card/CardPasswordInputContainer';

import { FieldBody, FieldHead, FieldSet } from './style';

function CardPasswordFieldset() {
  return (
    <FieldSet>
      <FieldHead style={{ marginBottom: '10px' }}>
        <CardFormLabel>카드 비밀번호</CardFormLabel>
      </FieldHead>
      <FieldBody style={{ marginBottom: '20px' }}>
        <CardPasswordInputContainer />
      </FieldBody>
    </FieldSet>
  );
}

export default CardPasswordFieldset;
