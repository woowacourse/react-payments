import styled from "styled-components";
import theme from "src/styles/theme";
import { CARD_ID } from "src/utils/constant";

interface CardColorProps {
  cardName?: (typeof CARD_ID)[number] | null;
  isModalOpen?: boolean;
}

export const Styled = {
  CardContainer: styled.div<CardColorProps>`
    position: relative;

    width: 213px;
    height: 133px;

    display: flex;
    flex-direction: column;
    row-gap: 13px;
    justify-content: flex-end;

    background: ${(props) =>
      props.cardName ? theme.cardColors[props.cardName].background : "fff"};

    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    color: ${(props) =>
      props.cardName ? theme.cardColors[props.cardName].color : "#333"};

    padding: 14px;
    margin: 25px auto 9px auto;

    box-sizing: border-box;

    z-index: ${(props) => (props.isModalOpen ? 1000 : 1)};
  `,
  CardName: styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
  `,

  CardChip: styled.div`
    width: 40px;
    height: 26px;
    background: #cbba64;
    border-radius: 4px;
  `,

  CardNumberContainer: styled.div`
    display: flex;
    justify-content: space-around;

    height: 13px;

    font-weight: 600;
    font-size: 10px;
    letter-spacing: 3px;

    span {
      width: 35px;
      display: inline-block;
    }
  `,

  CardNameContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    height: 13px;

    font-weight: 600;
    font-size: 10px;

    span {
      display: inline-bock;
      max-width: 85%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `,
};
