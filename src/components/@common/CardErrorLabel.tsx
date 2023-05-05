import * as Styled from './CardErrorLabel.styles';

interface CardErrorLabelProps {
  errorMessage: string;
}

const CardErrorLabel = ({ errorMessage }: CardErrorLabelProps) => {
  return <Styled.ErrorTextWrapper>{errorMessage}</Styled.ErrorTextWrapper>;
};

export default CardErrorLabel;
