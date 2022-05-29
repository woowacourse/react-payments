import React from 'react';
import { css } from '@emotion/react';
import { FieldBody, FieldHead, FieldSet } from './Fieldset';
import CardFormLabel from 'components/card/CardFormLabel';
import CardNumberInputContainer from 'containers/card/CardNumberInputContainer';

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
