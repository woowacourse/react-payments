import React from 'react';
import { FieldsetContent, Fieldset, FieldsetHead } from '../Fieldset';
import CardPasswordInputContainerList from './CardPasswordInputContainerList';

function CardPasswordFieldset() {
  return (
    <Fieldset>
      <FieldsetHead>
        <label>카드 비밀번호</label>
      </FieldsetHead>
      <FieldsetContent>
        <CardPasswordInputContainerList />
      </FieldsetContent>
    </Fieldset>
  );
}

export default CardPasswordFieldset;
