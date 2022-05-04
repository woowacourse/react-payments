import React from 'react';
import { css } from '@emotion/react';
import { FieldBody, FieldHead, FieldSet } from './Fieldset';
import CardFormLabel from 'components/card/CardFormLabel';
import ExpiredPeriodInputContainer from 'containers/card/ExpiredPeriodInputContainer';

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
