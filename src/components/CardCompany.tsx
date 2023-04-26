import { CARD_COMPANIES } from "constants/image";
import styled from "styled-components";

const CardCompany = (props: { cardCompany: string }) => {
  return (
    <S.Wrapper>
      <S.Logo
        src={`${process.env.PUBLIC_URL}/assets/${
          CARD_COMPANIES[props.cardCompany]
        }.svg`}
        alt={props.cardCompany}
      />
      <S.CardCompany>{props.cardCompany}</S.CardCompany>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    justify-content: center;
    align-items: center;
  `,

  Logo: styled.img`
    cursor: pointer;
  `,

  CardCompany: styled.p`
    margin-top: 10px;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: -0.085em;
    color: var(--label-color);
    word-break: keep-all;
  `,
};

export default CardCompany;
