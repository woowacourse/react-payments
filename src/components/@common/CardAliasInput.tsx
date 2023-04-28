import * as Styled from './CardAliasInput.styles';

interface CardAliasInputProps {
  type: string;
  value: string;
  maxLength?: number;
  placeholder?: string;
  autofocus?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CardAliasInput = ({
  type,
  maxLength,
  placeholder,
  onChange,
  value,
  autofocus,
}: CardAliasInputProps) => {
  return (
    <Styled.Input
      type={type}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      autoFocus={autofocus}
    />
  );
};
export default CardAliasInput;
