import styled from "styled-components";
import { CREDIT_CARD_BACKGROUND_COLOR } from "../../data/creditCard";
import { CREDIT_CARD_COMPANY } from "../../types/card";

const St = {
  CreditCard: styled.section<{ company: CREDIT_CARD_COMPANY | null }>`
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 11px;

    width: 280px;
    height: 160px;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    padding: 15px 20px 15px 20px;

    color: ${(props) =>
      props.company === CREDIT_CARD_COMPANY.KAKAOBANK ? "black" : "white"};
    background: ${(props) =>
      props.company ? CREDIT_CARD_BACKGROUND_COLOR[props.company] : "#333333"};
  `,

  CardCompany: styled.h2`
    font: 400 16px "Roboto";
  `,

  ICDiv: styled.div`
    width: 50px;
    height: 33px;

    background: #cbba64;
    border-radius: 4px;
  `,

  CardNumberSection: styled.section`
    display: flex;
    gap: 7px;

    height: 25px;

    font: 400 19px "Roboto";
    text-align: center;
  `,

  CardNumber: styled.div`
    letter-spacing: 3px;
  `,

  MaskedNumber: styled.div`
    letter-spacing: -2px;
  `,

  CardInfoSection: styled.section`
    display: flex;
    justify-content: space-between;

    height: 21px;
  `,

  CardInfo: styled.h2`
    text-align: center;
    font: 400 16px "Roboto";
  `,
};

export default St;
