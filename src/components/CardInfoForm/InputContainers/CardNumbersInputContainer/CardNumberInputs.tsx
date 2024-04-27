import * as React from 'react';

import Input from '../../../common/Input';

import useRefs from '../../../../hooks/useRefs';
import getObjectKeys from '../../../../utils/getObjectKeys';

const PASSWORD_INPUT_KEYS = ['third', 'fourth'];
const INPUT_TYPE = {
  text: 'text',
  password: 'password',
};
const CARD_NUMBER_LENGTH = 4;

export interface ICardNumberInputsProps {
  cardNumbers: Record<string, string>;
  isError: Record<string, boolean>;
  validateValue: (key: string, targetValue: string) => void;
  generateOnChange: (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CardNumberInputs({
  cardNumbers,
  isError,
  validateValue,
  generateOnChange,
}: ICardNumberInputsProps) {
  const cardNumberKeys = getObjectKeys(cardNumbers);
  const { getRefWithIndex, generateRefWithIndex } = useRefs<HTMLInputElement>(cardNumberKeys.length);

  return (
    <>
      {cardNumberKeys.map((key, index) => {
        const type = PASSWORD_INPUT_KEYS.includes(key) ? INPUT_TYPE.password : INPUT_TYPE.text;

        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          generateOnChange(key)(e);

          const isFilled = e.target.value.length === CARD_NUMBER_LENGTH;
          if (isFilled) {
            getRefWithIndex(index + 1)?.focus();
          }
        };

        const refConfig = { ref: index === 0 ? null : generateRefWithIndex(index) };
        return (
          <Input
            onChange={onChange}
            key={key}
            id={`${key}-card-numbers-input`}
            isError={isError[key]}
            value={cardNumbers[index]}
            onBlur={e => validateValue(key, e.target.value)}
            placeholder="1234"
            maxLength={4}
            type={type}
            width="23%"
            autoFocus={index === 0}
            {...refConfig}
          />
        );
      })}
    </>
  );
}
