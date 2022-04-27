import styled from 'styled-components';
import Input from '../Input';
import InputLabel from '../InputLabel';

const LabeledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const LabeledInputHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${props => props.width || '100%'};
`;

const LabeledInputBody = styled.div`
  display: flex;
  gap: 4px;
`;

const LengthChecker = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.05em;
  color: #525252;
`;

function LabeledInput({
  value,
  headerWidth,
  isShowLengthChecker,
  countInput,
  inputProps,
  inputLabelProps,
}) {
  return (
    <LabeledInputContainer>
      <LabeledInputHeader width={headerWidth}>
        <InputLabel {...inputLabelProps} />
        {isShowLengthChecker ? (
          <LengthChecker>
            <span>{value.length}</span> / <span>{inputProps.maxLength}</span>
          </LengthChecker>
        ) : (
          ''
        )}
      </LabeledInputHeader>
      <LabeledInputBody>
        {Array.from({ length: countInput }).map((_, index) => (
          <Input key={index} {...inputProps} />
        ))}
      </LabeledInputBody>
    </LabeledInputContainer>
  );
}

export default LabeledInput;
