import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { InputBox } from "../components";
import { Card, CardProps } from "../components/@common/card/card";
import { Input } from "../components/@common/input/Input";
import { InputGroup } from "../components/@common/input/inputGroup";
import { PATH } from "../constants/path";
import { useGenericLocation } from "../hooks/useGenericLocation";
import { CardInfo } from "../type/card";
import { setData } from "../utils/localStorage";

export function AddCardNicknamePage() {
  const state: CardInfo = useGenericLocation(useLocation());
  const navigate = useNavigate();
  const nicknameInput = useRef<HTMLInputElement>(null);

  function completeInputNickname() {
    const userCardInfo = { ...state };
    if (nicknameInput.current !== null) {
      userCardInfo["nickname"] = nicknameInput.current.value;
    }
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
          bgColor: state.cardColor.bgColor,
          fontColor: state.cardColor.fontColor,
        }}
        bank={state.bank}
      />
      <Form>
        <InputBox>
          <InputGroup asChild>
            <NicknameInutGroup />
            <Input
              name="nickname"
              maxLength={15}
              placeholder="카드의 별명을 입력해주세요 (선택)"
              ref={nicknameInput}
              asChild>
              <NicknameInput />
            </Input>
          </InputGroup>
        </InputBox>
        <CompleteButton onClick={completeInputNickname}>확인</CompleteButton>
      </Form>
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
  margin-bottom: 4rem;

  ${({ theme }) => theme.fonts.title}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CompleteButton = styled.button`
  width: 5rem;

  margin-top: 2rem;
  padding: 0.5rem 0.1rem;

  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.gray200};
`;

const NicknameInput = styled.input`
  display: flex;
  justify-content: center;
  text-align: center;

  width: 22rem;
  border-bottom: 0.2rem solid black;
  outline: none;
`;

const NicknameInutGroup = styled.div`
  margin-top: 4rem;
  background-color: transparent;
`;
