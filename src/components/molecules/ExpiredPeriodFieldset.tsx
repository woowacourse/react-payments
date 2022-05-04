import { css } from '@emotion/react';
import React from 'react';
import ExpiredPeriodInputContainer from '../atoms/card-expired-period/ExpiredPeriodInputContainer';
import CardFormLabel from '../atoms/CardFormLabel';
import { FieldHead, FieldSet, FieldBody } from '../templates/Fieldset';

const headStyle = css({
  marginBottom: '3px',
});

function ExpiredPeriodFieldset() {
  return (
    <>
      <FieldSet>
        <FieldHead style={headStyle}>
          <CardFormLabel>만료일</CardFormLabel>
        </FieldHead>
        <FieldBody>
          <ExpiredPeriodInputContainer />
        </FieldBody>
      </FieldSet>
    </>
  );
}

export default ExpiredPeriodFieldset;
