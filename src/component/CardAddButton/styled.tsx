import styled from "styled-components";

const St = {
  AddButtonSection: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Title: styled.h1`
    margin-top: 15px;
    margin-bottom: 15px;

    font: 700 14px/16px "Roboto";
    color: #575757;
  `,

  CardAddButton: styled.button`
    width: 280px;
    height: 160px;

    background: #e5e5e5;
    border-radius: 5px;

    font: 700 30px/35px "Roboto";
    color: #575757;
  `,
};

export default St;
