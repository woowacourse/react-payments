import React from 'react';
import { MAX_NAME_LENGTH } from '../../../constants';
import useWatch from '../../../hooks/useForm/useWatch';
import { FieldsetContent, Fieldset, FieldsetHead } from '../Fieldset';
import CardOwnerNameInputContainer from './CardOwnerNameInputContainer';

function CardOwnerNameFieldset() {
  const name = useWatch<string>('card-owner-name');
  return (
    <Fieldset>
      <FieldsetHead>
        <div className="d-flex justify-content-between">
          <label>카드 소유자 이름(선택)</label>
          <div id="counter">
            <span>{name.length}</span>/<span>{MAX_NAME_LENGTH}</span>
          </div>
        </div>
      </FieldsetHead>
      <FieldsetContent>
        <CardOwnerNameInputContainer />
      </FieldsetContent>
    </Fieldset>
  );
}

export default CardOwnerNameFieldset;
