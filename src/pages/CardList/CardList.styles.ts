import styled from "styled-components";

export const Styled = {
  CardListSection: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  CardRegisterParagarph: styled.p`
    margin-bottom: 9px;
  `,

  CardNickNameSpan: styled.span`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #575757;
  `,

  AddButton: styled.button<{ isFirst: boolean }>`
    width: 208px;
    height: 123px;

    background: #e5e5e5;
    border-radius: 5px;
    border: none;

    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;

    margin: ${(props) => (props.isFirst ? "" : "25px auto")};
  `,
};
