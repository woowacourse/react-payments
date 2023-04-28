import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CardItem } from "../components/cardList/CardItem";
import { AliasInput } from "../components/cardForm/AliasInput";
import { FormEvent } from "react";

import styled from "styled-components";

interface SetAliasProps {
  setAlias: (numbers: string, alias: string) => void;
}

export const SetAlias = ({ setAlias }: SetAliasProps) => {
  const navigate = useNavigate();

  const location = useLocation();
  const { newCard } = location.state;

  const aliasRef = useRef("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    aliasRef.current = e.target.value;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    setAlias(newCard.numbers, String(data.alias));
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
