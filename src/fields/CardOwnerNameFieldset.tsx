import React from 'react';
import { css } from '@emotion/react';
import { useAppState } from 'hooks/hooks';
import { FieldBody, FieldHead, FieldSet } from './Fieldset';
import CardFormLabel from 'components/card/CardFormLabel';
import { MAX_NAME_LENGTH } from '../constants';
import CardOwnerNameInputContainer from 'containers/card/CardOwnerNameInputContainer';

const headStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '3px',
});

function CardOwnerNameFieldset() {
  const { name } = useAppState();

  return (
    <>
      <FieldSet>
        <FieldHead style={headStyle}>
          <CardFormLabel>카드 소유자 이름(선택)</CardFormLabel>
          <div>
            <span>{name.length}</span>/<span>{MAX_NAME_LENGTH}</span>
          </div>
        </FieldHead>
        <FieldBody>
          <CardOwnerNameInputContainer />
        </FieldBody>
      </FieldSet>
    </>
  );
}

export default CardOwnerNameFieldset;
