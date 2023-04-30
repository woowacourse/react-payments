import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { InputBox } from "../components";
import { Card } from "../components/common/card";
import { Input } from "../components/common/input/Input";
import { InputGroup } from "../components/common/input/inputGroup";
import { PATH } from "../constants/path";
import { setData } from "../utils/localStorage";

export function AddCardNicknamePage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const nicknameInput = useRef<any>({ current: {} });

  function inputNickname(e: React.ChangeEvent<HTMLInputElement>) {
    setNickname(e.target.value);
  }

  function completeInputNickname() {
    const userCardInfo = { ...state };
    userCardInfo.nickname = nicknameInput.current.nickname.value;
    setData(userCardInfo);
    navigate(PATH.CARD_LIST);
  }

  return (
    <Container>
      <Title>카드 등록이 완료되었습니다</Title>
      <Card
        cardNumber={state.cardNumber}
        month={state.month}
        year={state.year}
        userName={state.userName}
        cardColor={{
          bgColor: state.bgColor,
          fontColor: state.fontColor,
        }}
        bank={state.bank}
      />
      <InputBox inputState={{ value: nickname, handleChange: inputNickname }}>
        <InputGroup>
          <Input
            name="nickname"
            maxLength={15}
            inputRef={nicknameInput}
            placeholder="카드의 별명을 입력해주세요 (선택)"></Input>
        </InputGroup>
      </InputBox>
      <CompleteButton onClick={completeInputNickname}>확인</CompleteButton>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.title}
`;

const CompleteButton = styled.button`
  width: 5rem;

  padding: 0.5rem 0.1rem;

  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.gray200};
`;
