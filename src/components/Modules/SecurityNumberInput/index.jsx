import styled from 'styled-components';
import { useState } from 'react';
import LabeledInput from '../../Atoms/LabeledInput';
import Input from '../../Atoms/Input';
import validator from '../../../validation';
import InfoLabel from '../../Atoms/InfoLabel';
import { numberRegex } from '../../../constant/regularExpression';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const InfoLabelContainer = styled.div`
  display: inline-block;
  padding-top: 15px;
`;

function SecurityNumberInput() {
  const [number, setNumber] = useState('');
  const [validation, setValidation] = useState(false);

  const onNumberChange = ({ target, nativeEvent: { data } }) => {
    if (numberRegex.test(data) || !data) {
      setNumber(target.value);
      updateValidation(target.value);
    }
  };

  const updateValidation = number => {
    setValidation(validator.validateSecurityNumber(number));
  };

  return (
    <Container>
      <LabeledInput text="보안 코드(CVC/CVV)">
        <Input
          value={number}
          width="84px"
          height="45px"
          type="password"
          maxLength={3}
          onChange={onNumberChange}
          isValid={validation}
        />
      </LabeledInput>
      <InfoLabelContainer>
        <InfoLabel />
      </InfoLabelContainer>
    </Container>
  );
}

export default SecurityNumberInput;
