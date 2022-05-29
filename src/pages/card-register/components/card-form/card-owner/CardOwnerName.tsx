import React from 'react';
import styled from '@emotion/styled';
import { MAX_NAME_LENGTH } from '../../../constants';
import useWatch from '../../../../../hooks/useForm/useWatch';
import Fieldset from '../Fieldset';
import { useFormContext } from '../../../../../hooks/useForm/useFormContext';

function CardOwnerName() {
  const name = useWatch<string>('card-owner-name');
  const { register } = useFormContext();
  return (
    <Fieldset>
      <Fieldset.Head>
        <div css={{ display: 'flex', justifyContent: 'space-between' }}>
          <label htmlFor="card-owner">카드 소유자 이름(선택)</label>
          <div id="counter">
            <span>{name.length}</span>/<span>{MAX_NAME_LENGTH}</span>
          </div>
        </div>
      </Fieldset.Head>
      <Fieldset.Content>
        <Input
          id="card-owner"
          autoComplete="off"
          type="text"
          {...register('card-owner-name', {
            maxLength: { value: 30 },
            pattern: { value: '[A-Z]+[A-Z ]*$', message: '영어 대문자로 입력해 주세요' },
          })}
        />
      </Fieldset.Content>
    </Fieldset>
  );
}

const Input = styled.input`
  background-color: #ecebf1;
  height: 45px;
  width: 100%;
  border-radius: 7px;
  max-width: 318px;
  outline: none !important;
  border: inherit;
  font-size: 18px;
  text-align: center;
  &:focus {
    box-shadow: none;
  }
`;

export default CardOwnerName;
