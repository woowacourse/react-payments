import React from 'react';
import Fieldset from '../Fieldset';
import ExpiredPeriodInputContainer from './ExpiredPeriodInputContainer';

function ExpiredPeriodFieldset() {
  return (
    <Fieldset>
      <Fieldset.Head>
        <label>만료일</label>
      </Fieldset.Head>
      <Fieldset.Content>
        <ExpiredPeriodInputContainer />
      </Fieldset.Content>
    </Fieldset>
  );
}

export default ExpiredPeriodFieldset;
