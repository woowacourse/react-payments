import React from 'react';
import CardNumberInputContainer from '../card-number/CardNumberInputContainer';
import { Body, Fieldset, Head } from '../Fieldset';

function CardNumberFieldset() {
  return (
    <Fieldset>
      <Head marginBottom="8px">
        <label>카드 번호</label>
      </Head>
      <Body>
        <CardNumberInputContainer />
      </Body>
    </Fieldset>
  );
}

export default CardNumberFieldset;
