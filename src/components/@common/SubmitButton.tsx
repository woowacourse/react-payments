import * as Styled from './SubmitButton.styles';

interface SubmitButtonProps {
  textContent: string;
  color: boolean;
  cursor: boolean;
}

const SubmitButton = ({ textContent, color, cursor }: SubmitButtonProps) => {
  return (
    <Styled.Button textColor={color} cursor={cursor}>
      {textContent}
    </Styled.Button>
  );
};

export default SubmitButton;
