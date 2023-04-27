import * as Styled from './CardLabel.styles';

interface CardLabelProps {
  labelText: string;
  color?: string;
}

const CardLabel = ({ labelText, color = '' }: CardLabelProps) => {
  return <Styled.Label color={color}>{labelText}</Styled.Label>;
};

export default CardLabel;
