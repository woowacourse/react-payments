import styled from "styled-components";
import { SyntheticEvent, useContext } from "react";
import { CARD_COMPANIES } from "constants/cardCompanies";
import { SelectedCardCompany } from "pages/RegisterPage/CardRegisterForm";

interface Props {
  cardCompany: string;
}

const CardCompany = ({ cardCompany }: Props) => {
  const setCardCompany = useContext(SelectedCardCompany);

  const handleCompanySelect = ({
    target,
  }: SyntheticEvent<HTMLImageElement>) => {
    if (!(target instanceof HTMLImageElement)) return;

    setCardCompany(target.alt);
  };

  return (
    <S.Wrapper>
      <S.Logo
        src={`${process.env.PUBLIC_URL}/assets/${CARD_COMPANIES[cardCompany]}.svg`}
        alt={cardCompany}
        onClick={handleCompanySelect}
      />
      <S.CardCompany>{cardCompany}</S.CardCompany>
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
