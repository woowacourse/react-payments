import styled from 'styled-components';
import { CardNumber, ExpirationDate, OwnerName } from '../types';

interface Props {
  cardNumber: CardNumber;
  expirationDate: ExpirationDate;
  ownerName: OwnerName;
}

export function CardViewer({ cardNumber, expirationDate, ownerName }: Props) {
  const changeCardNumberFormat = (rawCardNumbers: string[]) => {
    const PASSWORD_START = 2;
    const cardNumbersFormat = rawCardNumbers.map((rawCardNumber, index) =>
      index < PASSWORD_START ? rawCardNumber : '•'.repeat(rawCardNumber.length),
    );

    return cardNumbersFormat;
  };

  const changeExpirationDateFormat = (month: string, year: string) => {
    if (!month.length) return 'MM/YY';

    return `${month}/${year}`;
  };

  const cardNumbersFormat = changeCardNumberFormat(cardNumber);
  const expirationDateFormat = changeExpirationDateFormat(
    expirationDate.month,
    expirationDate.year,
  );
  const ownerNameFormat = ownerName.length ? ownerName : 'NAME';

  return (
    <Style.Wrapper>
      <Style.ICChip />
      <Style.CardNumberContainer>
        {cardNumbersFormat.map((cardNumber, index) => (
          <Style.CardNumber index={index}>{cardNumber}</Style.CardNumber>
        ))}
      </Style.CardNumberContainer>
      <Style.NameAndDateContainer>
        <Style.Name>{ownerNameFormat}</Style.Name>
        <span>{expirationDateFormat}</span>
      </Style.NameAndDateContainer>
    </Style.Wrapper>
  );
}

const Style = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    width: 213px;
    height: 133px;

    position: relative;
    padding: 14px;
    border: none;
    border-radius: 5px;
    background-color: #333333;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);

    font-size: 14px;
    color: white;
  `,

  ICChip: styled.div`
    width: 40px;
    height: 26px;

    position: absolute;
    top: 50%;
    left: 15px;
    transform: translate(0, -50%);
    border: none;
    border-radius: 4px;
    background-color: #cbba64;
  `,

  CardNumberContainer: styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
  `,

  CardNumber: styled.div<{ index: number }>`
    display: flex;
    align-items: center;

    width: 30px;

    letter-spacing: ${(props) => (props.index > 1 ? '-5px' : '0')};
  `,

  NameAndDateContainer: styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    margin-top: 3px;
  `,

  Name: styled.div`
    width: 150px;
    overflow: hidden;

    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
  `,
};
