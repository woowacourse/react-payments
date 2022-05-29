import React from 'react';
import CardNumberInputContainer from './CardNumberInputContainer';
import Fieldset from '../Fieldset';

function CardNumberFieldset() {
  return (
    <Fieldset>
      <Fieldset.Head marginBottom="8px">
        <label>카드 번호</label>
      </Fieldset.Head>
      <Fieldset.Content>
        <CardNumberInputContainer />
      </Fieldset.Content>
    </Fieldset>
  );
}

export default CardNumberFieldset;
