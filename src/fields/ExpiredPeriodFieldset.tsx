import React from 'react';

import CardFormLabel from 'components/card/CardFormLabel';
import ExpiredPeriodInputContainer from 'containers/card/ExpiredPeriodInputContainer';

import { FieldBody, FieldHead, FieldSet } from './style';

function ExpiredPeriodFieldset() {
  return (
    <FieldSet>
      <FieldHead style={{ marginBottom: '10px' }}>
        <CardFormLabel>만료일</CardFormLabel>
      </FieldHead>
      <FieldBody style={{ marginBottom: '20px' }}>
        <ExpiredPeriodInputContainer />
      </FieldBody>
    </FieldSet>
  );
}

export default ExpiredPeriodFieldset;
