import styled from 'styled-components';
import Title from '../title/Title';
import InputField from '../inputField/InputField';
import Input from '../input/Input';
import {ChangeEvent} from 'react';
import isNumberWithinRange from '../../utils/isNumberWithinRange';
import {MESSAGE} from '../constants/error';
import {FormFieldProps} from '../../type/FormField';

const INPUT_MAX_LENGTH = 3;

type Props = FormFieldProps<string, string>;

const errorRule = [
  {
    error: MESSAGE.INVALID_NUMBER,
    validate: (cvc: string) => !isNumberWithinRange(cvc, INPUT_MAX_LENGTH),
  },
];

const CardCvcSection = ({
  value,
  onChange,
  onValidate,
  onFocusout,
  errorMessage,
}: Props) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    onValidate(errorRule, e);
  };

  return (
    <CardNumberWrap>
      <Title>CVC 번호를 입력해 주세요</Title>
      <InputField label="CVC" errorMessage={errorMessage}>
        <Input
          name="cvcNumber"
          maxLength={INPUT_MAX_LENGTH}
          isError={errorMessage.length > 0}
          placeholder="123"
          value={value}
          autoFocus
          onChange={handleInput}
          onBlur={(e) =>
            onFocusout(
              e,
              INPUT_MAX_LENGTH,
              MESSAGE.INPUT_LENGTH_LIMIT(INPUT_MAX_LENGTH)
            )
          }
        />
      </InputField>
    </CardNumberWrap>
  );
};

export default CardCvcSection;

const CardNumberWrap = styled.div`
  height: 130px;
`;
