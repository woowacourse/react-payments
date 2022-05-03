import React from 'react';
import CardPasswordInputContainerList from '../card-password/CardPasswordInputContainerList';
import { Body, Fieldset, Head } from '../Fieldset';

function CardPasswordFieldset() {
  return (
    <Fieldset>
      <Head>
        <label>카드 비밀번호</label>
      </Head>
      <Body>
        <CardPasswordInputContainerList />
      </Body>
    </Fieldset>
  );
}

export default CardPasswordFieldset;
