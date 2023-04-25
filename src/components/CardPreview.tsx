import styled from "styled-components";
import { Fragment } from "react";
import { NUMBER_INPUT, LIMIT_LENGTH, PASSWORD_PART } from "constants/limit";
import { HIDDEN_VALUE, SECURITY_TARGET } from "constants/security";
import { CardNumber, ExpirationDate } from "types";

interface Props extends ExpirationDate, CardNumber {
  name: string;
}

const CardPreview = ({ cardInfo }: { cardInfo: Props }) => {
  return (
    <S.Card>
      <S.Chip />
      <S.CardInfo>
        <S.Numbers>
          {Array.from({ length: NUMBER_INPUT.COUNT }).map((_, index) => (
            <Fragment key={index}>
              {index < PASSWORD_PART ? (
                <S.Span>{cardInfo[`number${index + 1}`]}</S.Span>
              ) : (
                <S.Secret>
                  {cardInfo[`number${index + 1}`].replaceAll(
                    SECURITY_TARGET,
                    HIDDEN_VALUE
                  )}
                </S.Secret>
              )}
            </Fragment>
          ))}
        </S.Numbers>
        <S.Wrapper>
          <S.Name>{cardInfo.name}</S.Name>
          <S.Date>{`${cardInfo.month}${
            cardInfo.month.length === LIMIT_LENGTH.EXPIRATION_DATE ? "/" : ""
          }${cardInfo.year}`}</S.Date>
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
    margin: 30px auto 0;
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

  Name: styled.p`
    letter-spacing: -0.5px;
  `,

  Date: styled.p`
    text-align: right;
  `,
};
export default CardPreview;
