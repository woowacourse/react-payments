import styled from "styled-components";

interface CardInfo {
  cardNumber: {
    number1: string;
    number2: string;
    number3: string;
    number4: string;
  };

  date: {
    month: string;
    year: string;
  };

  name: string;
}

const CardPreview = ({ cardNumber, date, name }: CardInfo) => {
  return (
    <S.Card>
      <S.Chip />
      <S.CardInfo>
        <S.Numbers>
          <S.Span>{cardNumber.number1}</S.Span>
          <S.Span>{cardNumber.number2}</S.Span>
          <S.Secret>{cardNumber.number3.replaceAll(/[0-9]/gi, "ㆍ")}</S.Secret>
          <S.Secret>{cardNumber.number4.replaceAll(/[0-9]/gi, "ㆍ")}</S.Secret>
        </S.Numbers>
        <S.Wrapper>
          <p>{name}</p>
          <S.Date>{`${date.month} ${date.month.length === 2 ? "/" : ""} ${
            date.year
          }`}</S.Date>
        </S.Wrapper>
      </S.CardInfo>
    </S.Card>
  );
};

const S = {
  Card: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    width: 213px;
    height: 133px;
    padding: 0 15px;
    margin: 30px auto 26px;
    border-radius: 5px;
    font-size: 14px;
    background: var(--darken-color);
    box-shadow: rgba(0, 0, 0, 0.25) 3px 3px 5px;
  `,

  Chip: styled.div`
    width: 40px;
    height: 26px;
    margin: 0 auto 0 1px;
    background: #cbba64;
    border-radius: 4px;
  `,

  CardInfo: styled.div`
    color: #fff;
  `,

  Numbers: styled.p`
    margin: 10px 0 12px;
    letter-spacing: 2px;

    & span {
      display: inline-block;
      width: 44px;
    }
  `,

  Span: styled.span`
    &:nth-child(1) {
      margin-right: 2px;
    }
  `,

  Secret: styled.span`
    letter-spacing: -2px;

    &:nth-child(3) {
      margin-right: 4.8px;
    }
  `,

  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    font-size: 12px;
  `,

  Date: styled.p`
    text-align: right;
  `,
};
export default CardPreview;
