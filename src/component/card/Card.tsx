import styled from 'styled-components';
import cardBrandLogo from '../../constants/cardBrandLogo';
import { CardInputProps } from '../../types/CardInputTypes';
import { maskingNumber } from './util/maskingNumber';

interface CardProps {
  cardNumber: CardInputProps | null;
  cardType: 'visa' | 'mastercard' | 'default';
  cardColor?: string;
}

const CardContainer = styled.div<{ $cardColor?: string }>`
  box-sizing: border-box;
  width: 212px;
  height: 132px;
  background-color: ${({ $cardColor, theme }) =>
    $cardColor || theme.colors.black};
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
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.1);
`;

const CardBrandLogo = styled.img`
  width: 36px;
  height: 22px;
`;

const CardInformation = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.subheader};
  font-weight: ${({ theme }) => theme.fontWeights.caption};
  letter-spacing: 2.56px;
  min-width: 40px;
`;

const CardMaskingInformation = styled(CardInformation)`
  letter-spacing: -2px;
`;

const CardNumberContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const Card = ({ cardNumber, cardType, cardColor }: CardProps) => {
  return (
    <CardContainer $cardColor={cardColor}>
      <ChipContainer>
        <CardGoldChip />
        <CardBrandLogo src={cardBrandLogo[cardType]} />
      </ChipContainer>
      {cardNumber && (
        <>
          <CardNumberContainer>
            <CardInformation>{cardNumber.first}</CardInformation>
            <CardInformation>{cardNumber.second}</CardInformation>
            <CardMaskingInformation>
              {cardNumber.third &&
                maskingNumber(String(cardNumber.third).length)}
            </CardMaskingInformation>
            <CardMaskingInformation>
              {cardNumber.fourth &&
                maskingNumber(String(cardNumber.fourth).length)}
            </CardMaskingInformation>
          </CardNumberContainer>

          <CardInformation>
            {cardNumber.MM && `${cardNumber.MM}`}
            {cardNumber.YY && `/${cardNumber.YY}`}
          </CardInformation>
        </>
      )}
    </CardContainer>
  );
};

export default Card;
