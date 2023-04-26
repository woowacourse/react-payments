import styled from "styled-components";

const Style = {
  Layout: styled.section`
    display: flex;
    flex-direction: column;
    position: fixed;
    align-items: center;
    bottom: 28%;
    left: 38%;

    padding: 1px;
    width: 221px;
    height: 156px;

    background: white;
    border: 1.5px solid #999;
    border-radius: 5px;
  `,
  Button: styled.button`
    align-self: flex-end;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: #999;
    background-color: transparent;
  `,
  Img: styled.img`
    margin-top: 2px;
    align-items: center;

    width: 95%;
  `,
};

export default Style;
