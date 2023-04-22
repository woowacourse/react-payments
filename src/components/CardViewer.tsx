import styled from 'styled-components';

interface Props {
  cardNumber: {
    0: string;
    1: string;
    2: string;
    3: string;
  };
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
        {Object.values(cardNumber).map((number, index) => (
          <Style.CardNumber index={index}>
            {index < 2 ? number : '•'.repeat(number.length)}
          </Style.CardNumber>
        ))}
      </Style.CardNumberContainer>
      <Style.NameAndDateContainer>
        <Style.Name>{ownerName === '' ? 'NAME' : ownerName}</Style.Name>
        {expirationDate.month === '' ? (
          <span>MM/YY</span>
        ) : (
          <span>
            {expirationDate.month}/{expirationDate.year}
          </span>
        )}
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
