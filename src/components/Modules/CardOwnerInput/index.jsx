import styled from 'styled-components';
import { useContext } from 'react';
import { CardOwnerContext } from '../../../context/CardOwnerContext';
import LabeledInput from '../../Atoms/LabeledInput';
import Input from '../../Atoms/Input';
import { COUNT } from '../../../constant';

const CountChecker = styled.span`
  position: absolute;
  right: 35px;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.085em;
  color: #525252;
`;

function CardOwnerInput() {
  const { name, validation, onNameChange } = useContext(CardOwnerContext);

  return (
    <>
      <LabeledInput text="카드 소유자 이름(선택)">
        <CountChecker>
          {name.length}/{COUNT.OWNER_NAME_MAX_COUNT}
        </CountChecker>
        <Input
          value={name}
          width="318px"
          height="45px"
          maxLength={COUNT.OWNER_NAME_MAX_COUNT}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          onChange={onNameChange}
          isCenter={false}
          isValid={validation}
        />
      </LabeledInput>
    </>
  );
}

export default CardOwnerInput;
