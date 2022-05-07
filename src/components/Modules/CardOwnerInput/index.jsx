import styled from 'styled-components';
import LabeledInput from '../../Atoms/LabeledInput';
import Input from '../../Atoms/Input';
import { COUNT, INPUT_PLACEHOLDER, INPUT_TITLE } from '../../../constant';
import useCardOwnerInput from '../../../hooks/Input/useCardOwnerInput';
import { EXPIRED_DATE_INPUT_NAMES } from '../../../constant/inputNames';

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
  const { name, validation, onNameChange } = useCardOwnerInput(
    EXPIRED_DATE_INPUT_NAMES
  );

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
