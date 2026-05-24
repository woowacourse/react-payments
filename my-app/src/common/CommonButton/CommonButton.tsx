import { StyledButton } from './CommonButton.styles';

interface Props {
  handleOnClick: () => void;
  label: string;
}

function CommonButton({ handleOnClick, label }: Props) {
  return <StyledButton onClick={handleOnClick}>{label}</StyledButton>;
}

export default CommonButton;
