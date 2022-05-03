import React from 'react';
import { FieldHead, FieldSet, FieldBody } from '../templates/Fieldset';
import CardNumberInputContainer from '../atoms/card-number/CardNumberInputContainer';
import CardFormLabel from '../atoms/CardFormLabel';
import { css } from '@emotion/react';

const headStyle = css({
  marginBottom: '8px',
});

function CardNumberFieldset() {
  return (
    <>
      <FieldSet>
        <FieldHead style={headStyle}>
          <CardFormLabel>카드 번호</CardFormLabel>
        </FieldHead>
        <FieldBody>
          <CardNumberInputContainer />
        </FieldBody>
      </FieldSet>
    </>
  );
}

export default CardNumberFieldset;
