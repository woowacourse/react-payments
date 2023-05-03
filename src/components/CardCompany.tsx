import styled from "styled-components";
import useInitCardInfo from "hooks/useInitCardInfo";
import CardCompanyLogoSvg from "./CardCompanyLogoSvg";

const CardCompany = ({ cardCompanyName }: { cardCompanyName: string }) => {
  const { initCardInfo } = useInitCardInfo();

  return (
    <S.Wrapper>
      <CardCompanyLogoSvg
        cardCompanyName={cardCompanyName}
        style={{ cursor: "pointer" }}
        onClick={() => initCardInfo("cardCompany", cardCompanyName)}
      />
      <S.CardCompany>{cardCompanyName}</S.CardCompany>
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
