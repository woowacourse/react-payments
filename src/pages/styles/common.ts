import styled from "styled-components";

const CheckImageContainer = styled.div`
  height: 76px;
  width: 76px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #333333;
  border-radius: 50%;

  margin-bottom: 25px;
`;

const CheckImage = styled.img`
  height: 24px;
  width: 32px;
`;

const Caption = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 36px;

  text-align: center;

  color: #333333;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 25px;
  line-height: 36px;

  text-align: center;
`;

const TextContainer = styled.section`
  display: flex;
  flex-direction: column;

  margin-bottom: 25px;
`;

const ErrorCardImage = styled.img`
  height: 180px;
  min-height: 180px;
  width: 212px;
`;

const Button = styled.button`
  height: 52px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.25);
  background-color: #333333;
  color: #f3f3f3;
  font-weight: 700;

  cursor: pointer;
`;

const S = {
  CheckImageContainer,
  CheckImage,
  ErrorCardImage,
  TextContainer,
  Title,
  Caption,
  Button,
};

export default S;
