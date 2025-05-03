import styled from '@emotion/styled';

interface LabeledInputProps {
  htmlFor: string;
  label: string;
  isMultiple: boolean;
  children: React.ReactElement;
}

function LabeledInput({
  htmlFor,
  label,
  isMultiple,
  children,
}: LabeledInputProps) {
  return (
    <div>
      <Label htmlFor={htmlFor}>{label}</Label>
      {isMultiple ? <InputWrapper>{children}</InputWrapper> : <>{children}</>}
    </div>
  );
}

export default LabeledInput;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8px;
`;
const Label = styled.label`
  font-size: 12px;
`;
