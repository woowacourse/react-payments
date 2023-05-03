import * as Styled from './CardAliasInput.styles';

interface CardAliasInputProps {
  type: string;
  value: string;
  maxLength?: number;
  placeholder?: string;
  autoFocus?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CardAliasInput = (cardAliasInputProps: CardAliasInputProps) => {
  return <Styled.Input {...cardAliasInputProps} />;
};
export default CardAliasInput;
