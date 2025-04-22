import { maskingNumber } from "../../util/maskingNumber";
import styled from "styled-components";
import type { CardInputProps } from "../../types/CardInputTypes";

interface CardNumberProps {
  cardNumber: CardInputProps;
}

const CardNumber = ({ cardNumber }: CardNumberProps) => {
  return (
    <>
      <CardNumberContainer>
        <CardInformation>{cardNumber.first}</CardInformation>
        <CardInformation>{cardNumber.second}</CardInformation>
        <CardMaskingInformation>
          {cardNumber.third && maskingNumber(String(cardNumber.third).length)}
        </CardMaskingInformation>
        <CardMaskingInformation>
          {cardNumber.fourth && maskingNumber(String(cardNumber.fourth).length)}
        </CardMaskingInformation>
      </CardNumberContainer>

      <CardInformation>
        {cardNumber.MM && `${cardNumber.MM}`}
        {cardNumber.YY && `/${cardNumber.YY}`}
      </CardInformation>
    </>
  );
};

const CardInformation = styled.div`
  color: var(--color-white);
  font-size: var(--font-size-subheader);
  font-weight: var(--font-weight-caption);
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

export default CardNumber;
