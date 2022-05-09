import React from 'react';
import { FieldsetContent, Fieldset, FieldsetHead } from '../Fieldset';
import ExpiredPeriodInputContainer from './ExpiredPeriodInputContainer';

function ExpiredPeriodFieldset() {
  return (
    <Fieldset>
      <FieldsetHead>
        <label>만료일</label>
      </FieldsetHead>
      <FieldsetContent>
        <ExpiredPeriodInputContainer />
      </FieldsetContent>
    </Fieldset>
  );
}

export default ExpiredPeriodFieldset;
