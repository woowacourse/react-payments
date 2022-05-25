import React from 'react';

import CardFormLabel from 'components/card/CardFormLabel';
import CardNumberInputContainer from 'containers/card/CardNumberInputContainer';

import { FieldBody, FieldHead, FieldSet } from './style';

function CardNumberFieldset() {
  return (
    <>
      <FieldSet>
        <FieldHead style={{ marginBottom: '10px' }}>
          <CardFormLabel>카드 번호</CardFormLabel>
        </FieldHead>
        <FieldBody style={{ marginBottom: '20px' }}>
          <CardNumberInputContainer />
        </FieldBody>
      </FieldSet>
    </>
  );
}

export default CardNumberFieldset;
