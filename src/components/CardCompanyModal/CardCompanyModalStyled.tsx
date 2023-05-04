import styled from "styled-components";

const St = {
  CardCompanyModal: styled.section`
    display: flex;
    justify-content: center;

    height: 280px;
    padding: 30px;

    border-radius: 8px 8px 0px 0px;
    background: white;

    animation: fadeInUp 0.5s;
    @keyframes fadeInUp {
      from {
        transform: translate3d(0, 100%, 0);
      }
      to {
        transform: translateZ(0);
      }
    }
  `,

  CardCompanies: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    padding-top: 20px;
    padding-bottom: 20px;
  `,

  Input: styled.input`
    position: absolute;
    left: -100vw;
  `,

  Logo: styled.label`
    width: 20%;
    height: fit-content;

    text-align: center;

    overflow: hidden;
    cursor: pointer;
  `,

  Img: styled.img`
    width: 45px;
    height: 45px;
  `,

  Caption: styled.p`
    margin-top: 10px;

    font: 500 13px/18px "Roboto";
  `,
};

export default St;
