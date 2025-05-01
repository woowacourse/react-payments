import { maskingNumber } from '../../util/maskingNumber';
import styled from 'styled-components';
import type { CardInputProps } from '../../types/CardInputTypes';

interface CardNumberProps {
  cardInput: CardInputProps;
}

const CardNumber = ({ cardInput }: CardNumberProps) => {
  return (
    <>
      <CardNumberContainer>
        <CardInformation>{cardInput.first}</CardInformation>
        <CardInformation>{cardInput.second}</CardInformation>
        <CardMaskingInformation>
          {cardInput.third ? maskingNumber(String(cardInput.third).length) : null}
        </CardMaskingInformation>
        <CardMaskingInformation>
          {cardInput.fourth ? maskingNumber(String(cardInput.fourth).length) : null}
        </CardMaskingInformation>
      </CardNumberContainer>

      <CardInformation>
        {cardInput.MM ? `${cardInput.MM}` : null}
        {cardInput.YY ? `/${cardInput.YY}` : null}
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
