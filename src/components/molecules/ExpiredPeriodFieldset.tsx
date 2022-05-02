import React from 'react';
import ExpiredPeriodInputContainer from '../atoms/card-expired-period/ExpiredPeriodInputContainer';
import { FieldHead, FieldSet, FieldBody } from '../templates/Fieldset';

function ExpiredPeriodFieldset() {
  return (
    <>
      <FieldSet>
        <FieldHead>
          <label>만료일</label>
        </FieldHead>
        <FieldBody>
          <ExpiredPeriodInputContainer />
        </FieldBody>
      </FieldSet>
    </>
  );
}

export default ExpiredPeriodFieldset;
