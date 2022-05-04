import { css } from '@emotion/react';
import React from 'react';
import { MAX_NAME_LENGTH } from '../../constants';
import { useAppState } from '../../hooks/hooks';
import CardOwnerNameInputContainer from '../atoms/card-owner/CardOwnerNameInputContainer';
import CardFormLabel from '../atoms/CardFormLabel';
import { FieldHead, FieldSet, FieldBody } from '../templates/Fieldset';

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
