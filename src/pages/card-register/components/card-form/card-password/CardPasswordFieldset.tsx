import React from 'react';
import Fieldset from '../Fieldset';
import CardPasswordInputContainerList from './CardPasswordInputContainerList';

function CardPasswordFieldset() {
  return (
    <Fieldset>
      <Fieldset.Head>
        <label>카드 비밀번호</label>
      </Fieldset.Head>
      <Fieldset.Content>
        <CardPasswordInputContainerList />
      </Fieldset.Content>
    </Fieldset>
  );
}

export default CardPasswordFieldset;
