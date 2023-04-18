import styled from 'styled-components';

const LabelTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: #525252;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 318px;
  height: 48.75px;
  margin-top: 8.67px;
  background: #ecebf1;
  border-radius: 7px;
`;

const InputItem = styled.input`
  width: 50px;
  font-size: 18px;
  text-align: center;
  background: none;
  border: none;
`;

const InputDivider = styled.div`
  font-size: 18px;
`;

interface PaymentsInputProps {
  title: string;
  inputAmount: number;
  maxLength: number;
  inputDivideLetter: string | null;
}

export type { PaymentsInputProps };

function PaymentsInput({ title, inputAmount, maxLength, inputDivideLetter }: PaymentsInputProps) {
  return (
    <div>
      <LabelTitle>{title}</LabelTitle>
      <InputContainer>
        {Array.from({ length: inputAmount - 1 }, (_, i) => (
          <>
            <InputItem key={i} type="text" maxLength={maxLength} />
            <InputDivider>{inputDivideLetter}</InputDivider>
          </>
        ))}
        <InputItem type="text" maxLength={maxLength} />
      </InputContainer>
    </div>
  );
}

export default PaymentsInput;
