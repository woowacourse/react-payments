import CardItem from "../components/cardList/CardItem";
import AliasInput from "../components/cardForm/AliasInput";
import styled from "styled-components";

import { useRef, FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface AssignAliasProps {
  assignAlias: (numbers: string, alias: string) => void;
}

export const AssignAlias = ({ assignAlias }: AssignAliasProps) => {
  const navigate = useNavigate();

  const location = useLocation();
  const { newCard } = location.state;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    assignAlias(newCard.numbers, String(data.alias));
    navigate("/");
  };

  return (
    <Main>
      <Message>카드등록이 완료되었습니다.</Message>
      <CardItem card={newCard} />
      <AliasForm onSubmit={handleSubmit}>
        <AliasInput />
        <SubmitButton>확인</SubmitButton>
      </AliasForm>
    </Main>
  );
};

const Message = styled.div`
  font-size: 24px;

  margin-top: 130px;
  padding: 30px 0;

  width: 305px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 28px;
`;

const AliasForm = styled.form`
  margin: 64px 0;
`;
const SubmitButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: right;

  width: 100%;
  margin: 90px 42px 0 0;
`;
