import styled from 'styled-components';

const Input = styled.input<{ hasError?: boolean }>`
  font-family: 'Inter', sans-serif;
  width: 100%;
  height: Fixed (32px) px;
  padding: 8px;
  gap: 8px;
  border-radius: 2px;
  border: ${(props) =>
    props.hasError ? 'solid 1px #ff3d3d' : 'solid 1px #acacac'};

  &:focus {
    outline: none;
    border: solid 1px #000000;
  }

  &::placeholder {
    color: #acacac;
  }
`;

const PaymentsInputField = ({ ...props }: PaymentsInputFieldProps) => {
  return (
    <>
      <Input
        type="text"
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        hasError={props.hasError}
      />
    </>
  );
};

export default PaymentsInputField;
