import styled from "styled-components";
import { CardItem } from "../components/cardList/CardItem";

const initialCard = {
  id: "",
  numbers: [],
  owner: "NAME",
  expiryDate: "MM/YY",
  color: "#e07171",
  CVC: 0,
  password: [],
  company: "",
};

export const Nickname = () => {
  return (
    <Container>
      <Title>카드 등록이 완료되었습니다.</Title>
      <SubTitle>닉네임을 정할 수 있습니다.</SubTitle>
      <CardItem card={initialCard} />
      <NickNameInput></NickNameInput>
      <SubmitButton>확인</SubmitButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 90%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 36px;
`;

const SubTitle = styled.h4`
  font-size: 15px;
  margin-bottom: 10px;
`;

const NickNameInput = styled.input`
  border: none;
  border-bottom: 1px solid #383838;
  width: 70%;
  height: 30px;
  margin-top: 100px;
  text-align: center;
  font-size: 18px;
`;

const SubmitButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  align-self: self-end;
  transform: translateY(120px);
`;
