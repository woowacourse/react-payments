import styled from "styled-components";

const St = {
  CreditCard: styled.section`
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 11px;

    width: 280px;
    height: 160px;

    background: #333333;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    padding: 40px 20px 15px 20px;
  `,
  ICDiv: styled.div`
    width: 53px;
    height: 36px;

    background: #cbba64;
    border-radius: 4px;
  `,

  CardNumberSection: styled.section`
    display: flex;
    gap: 12px;

    height: 25px;
  `,

  CardNumber: styled.h2`
    text-align: center;
    font: 400 19px "Roboto";
    color: white;
    letter-spacing: 3.5px;
  `,

  CardInfoSection: styled.section`
    display: flex;
    justify-content: space-between;

    height: 21px;
  `,

  CardInfo: styled.h2`
    text-align: center;
    font: 400 16px "Roboto";
    color: white;
  `,
};

export default St;
