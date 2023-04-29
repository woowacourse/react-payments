import styled from "styled-components";
import { Fragment, useContext } from "react";
import { NUMBER_INPUT, LIMIT_LENGTH, PASSWORD_PART } from "constants/limit";
import { HIDDEN_VALUE, SECURITY_TARGET } from "constants/security";
import { CardInfo } from "types";
import {
  CARD_COLORS,
  CARD_COMPANIES,
  UNSELECTED_CARD_COMPANY,
} from "constants/cardCompanies";
import { ModalStateContext } from "./ModalStateProvider";

interface Props {
  cardInfo: CardInfo;
}

const CardPreview = ({ cardInfo }: Props) => {
  const setIsModalOpen = useContext(ModalStateContext).setIsModalOpen;

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const isSelected = Object.keys(CARD_COMPANIES).includes(cardInfo.cardCompany);

  return (
    <S.Card cardCompany={cardInfo.cardCompany} onClick={handleModalOpen}>
      <S.CardCompany
        className={isSelected ? cardInfo.cardCompany : UNSELECTED_CARD_COMPANY}
      >
        {isSelected ? cardInfo.cardCompany : UNSELECTED_CARD_COMPANY}
      </S.CardCompany>

      <S.Chip cardCompany={cardInfo.cardCompany} />

      <S.CardInfo cardCompany={cardInfo.cardCompany}>
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
  Card: styled.div<{ cardCompany: string }>`
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
    background: ${(props) =>
      props.cardCompany === ""
        ? "var(--darken-color)"
        : CARD_COLORS[props.cardCompany]};
    box-shadow: rgba(0, 0, 0, 0.25) 3px 3px 5px;
    cursor: pointer;
  `,

  CardCompany: styled.p`
    margin: 14px auto auto 0;
    font-size: 12px;
    color: #fff;
    background: transparent;

    &.카카오뱅크 {
      color: #000;
    }
  `,

  Chip: styled.div<{ cardCompany: string }>`
    width: 40px;
    height: 26px;
    margin: 0 auto 0 1px;
    background: #cbba64;
    border-radius: 4px;
  `,

  CardInfo: styled.div<{ cardCompany: string }>`
    color: ${(props) =>
      props.cardCompany === "카카오뱅크"
        ? "var(--darken-color)"
        : "var(--white-color)"};
  `,

  Numbers: styled.p`
    margin: 10px 0 12px;
    letter-spacing: 1.6px;

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
    height: 12px;
    margin-bottom: 16px;
    font-size: 12px;
  `,

  Name: styled.p`
    padding-left: 0.8px;
    letter-spacing: -0.5px;
  `,

  Date: styled.p`
    text-align: right;
  `,
};

export default CardPreview;
