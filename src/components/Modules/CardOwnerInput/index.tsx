import styled from 'styled-components';
import LabeledInput from '../../Atoms/LabeledInput';
import Input from '../../Atoms/Input';
import { COUNT, INPUT_PLACEHOLDER, INPUT_TITLE } from '../../../constant';
import { ChangeEvent } from 'react';

interface CarOwnerInputProps {
  name: string;
  validation: boolean;
  onNameChange: (event?: ChangeEvent<HTMLInputElement>) => void;
}

function CardOwnerInput({ name, validation, onNameChange }: CarOwnerInputProps) {
  return (
    <>
      <LabeledInput text={INPUT_TITLE.OWNER_NAME}>
        <CountChecker>
          {name.length}/{COUNT.OWNER_NAME_MAX_COUNT}
        </CountChecker>
        <Input
          value={name}
          width="318px"
          height="45px"
          maxLength={COUNT.OWNER_NAME_MAX_COUNT}
          placeholder={INPUT_PLACEHOLDER.OWNER_NAME}
          onChange={onNameChange}
          isCenter={false}
          isValid={validation}
        />
      </LabeledInput>
    </>
  );
}

export default CardOwnerInput;

const CountChecker = styled.span`
  position: absolute;
  right: 35px;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.085em;
  color: #525252;
`;
