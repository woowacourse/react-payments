import styled from 'styled-components';
import type { CardInputProps } from '../../types/CardInputTypes';
import CardNumber from './CardNumber';
import { cardNetworkLogos, cardBrandsColors } from '../../constants/cardConstants';

interface CardProps {
  cardInput: CardInputProps;
  cardType: 'visa' | 'mastercard' | 'default';
}

const Card = ({ cardInput, cardType }: CardProps) => {
  const DEFAULT_CARD_COLOR = 'var(--color-black)';

  return (
    <CardContainer $backgroundColor={cardInput.cardBrand ? cardBrandsColors[cardInput.cardBrand] : DEFAULT_CARD_COLOR}>
      <ChipContainer>
        <CardGoldChip />
        <CardNetworkLogo src={cardNetworkLogos[cardType]} />
      </ChipContainer>
      {cardInput ? <CardNumber cardInput={cardInput} /> : null}
    </CardContainer>
  );
};

const CardContainer = styled.div<{ $backgroundColor: string }>`
  box-sizing: border-box;
  width: 212px;
  height: 132px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.1);
  padding: 8px 12px;
`;

const ChipContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardGoldChip = styled.div`
  width: 36px;
  height: 22px;
  background-color: var(--color-yellow);
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.1);
`;

const CardNetworkLogo = styled.img`
  width: 36px;
  height: 22px;
`;

export default Card;
