import React from 'react';
import CardPasswordInputContainerList from '../card-password/CardPasswordInputContainerList';
import { FieldsetContent, Fieldset, FieldsetHead } from '../Fieldset';

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
