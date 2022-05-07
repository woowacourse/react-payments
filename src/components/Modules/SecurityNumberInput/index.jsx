import styled from 'styled-components';
import LabeledInput from '../../Atoms/LabeledInput';
import Input from '../../Atoms/Input';
import InfoLabel from '../../Atoms/InfoLabel';
import useSecurityNumberInput from '../../../hooks/Input/useSecurityNumberInput';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const InfoLabelContainer = styled.div`
  display: inline-block;
  padding-top: 15px;
`;

function SecurityNumberInput() {
  const { number, validation, onNumberChange } = useSecurityNumberInput();

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
