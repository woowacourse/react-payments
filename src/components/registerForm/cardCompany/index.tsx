import { BANK_LIST } from "src/utils/constant";
import styled from "styled-components";

function CardCompany() {
  const cardLists = BANK_LIST.map((list) => {
    return (
      <Styled.CardContainer>
        <img src={list.src} alt={list.name} />
        <p>{list.name}</p>
      </Styled.CardContainer>
    );
  });

  return <Styled.WholeCardContainer>{cardLists}</Styled.WholeCardContainer>;
}

export default CardCompany;

const Styled = {
  WholeCardContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 26px;
  `,

  CardContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: -0.085em;

      color: #525252;
    }
  `,
};
