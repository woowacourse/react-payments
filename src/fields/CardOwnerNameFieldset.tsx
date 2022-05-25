import React from 'react';

import CardFormLabel from 'components/card/CardFormLabel';
import { MAX_NAME_LENGTH } from '../constants';
import CardOwnerNameInputContainer from 'containers/card/CardOwnerNameInputContainer';

import { useAppState } from 'hooks/hooks';

import { FieldBody, FieldHead, FieldSet } from './style';

function CardOwnerNameFieldset() {
  const { name } = useAppState();

  return (
    <>
      <FieldSet>
        <FieldHead style={{ marginBottom: '10px' }}>
          <CardFormLabel>카드 소유자 이름(선택)</CardFormLabel>
          <div>
            <span>{name.length}</span>/<span>{MAX_NAME_LENGTH}</span>
          </div>
        </FieldHead>
        <FieldBody style={{ marginBottom: '20px' }}>
          <CardOwnerNameInputContainer />
        </FieldBody>
      </FieldSet>
    </>
  );
}

export default CardOwnerNameFieldset;
