import styled from 'styled-components';
import { v4 } from 'uuid';

interface Props {
  cardNumber: string[];
  expirationDate: {
    month: string;
    year: string;
  };
  ownerName: string;
}

export function CardViewer({ cardNumber, expirationDate, ownerName }: Props) {
  return (
    <Style.Wrapper>
      <Style.ICChip />
      <Style.CardNumberContainer>
        {cardNumber.map((number, index) => (
          <Style.NumberInput
            key={v4()}
            style={{
              letterSpacing:
                window.innerWidth < 768 ? (index > 1 ? '-7px' : '0px') : '0px',
            }}
          >
            {index < 2 ? number : '•'.repeat(number.length)}
          </Style.NumberInput>
        ))}
      </Style.CardNumberContainer>
      <Style.NameAndDateContainer>
        <span>{ownerName === '' ? 'NAME' : ownerName}</span>
        <span>
          {expirationDate.month || 'MM'}/{expirationDate.year || 'YY'}
        </span>
      </Style.NameAndDateContainer>
    </Style.Wrapper>
  );
}

const Style = {
  Wrapper: styled.div`
    width: 213px;
    height: 133px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;

    border: none;
    border-radius: 5px;
    background-color: #333333;

    color: white;
    padding: 14px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
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
  NumberInput: styled.div`
    all: unset;

    width: 30px;
  `,
  NameAndDateContainer: styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;

    margin-top: 3px;
  `,
};
