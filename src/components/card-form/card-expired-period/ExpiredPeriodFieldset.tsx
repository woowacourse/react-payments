import React from 'react';
import ExpiredPeriodInputContainer from '../card-expired-period/ExpiredPeriodInputContainer';
import { FieldsetContent, Fieldset, FieldsetHead } from '../Fieldset';

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
