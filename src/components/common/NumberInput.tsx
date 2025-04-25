import styled from '@emotion/styled';

interface NumberInputProps {
  value: string;
  setValue: (value: string) => void;
  maxLength: number;
  placeholder: string;
  isError: boolean;
  isHidden?: boolean;
}

function NumberInput({
  value,
  setValue,
  maxLength,
  placeholder,
  isError,
  isHidden = false,
}: NumberInputProps) {
  function handleValue(e: React.ChangeEvent<HTMLInputElement>) {
    const isNumeric = /^[0-9]*$/.test(e.target.value);

    if (isNumeric) {
      setValue(e.target.value);
    }
  }

  return (
    <S.Input
      value={value}
      maxLength={maxLength}
      placeholder={placeholder}
      isError={isError}
      onChange={handleValue}
      type={isHidden ? 'password' : 'text'}
    />
  );
}

export default NumberInput;

const S = {
  Input: styled.input<{ isError: boolean }>`
    width: 100%;
    border: 1px solid ${({ isError }) => (isError ? '#FF3D3D' : '#ACACAC')};
    border-radius: 2px;
    height: 32px;
    padding: 8px;

    &:focus {
      border: 1.5px solid ${({ isError }) => (isError ? '#FF3D3D' : '#000')};
      outline: none;
    }
  `,
};
