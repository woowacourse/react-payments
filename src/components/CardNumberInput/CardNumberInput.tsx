import styled from 'styled-components';

interface CardNumberInputProps {
  type: string;
  maxLength?: number;
  placeholder?: string;
}

const Input = styled.input`
  width: 80px;
  height: 45px;
  text-align: center;
`;

const CardNumberInput = ({
  type,
  maxLength,
  placeholder,
}: CardNumberInputProps) => {
  return (
    <Input
      type={type}
      maxLength={maxLength}
      placeholder={placeholder}
      required
    />
  );
};

export default CardNumberInput;
