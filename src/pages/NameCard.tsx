import styled from "styled-components";
import { ROUTER_PATH } from "../provider/router/path";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardLoading, Page } from "../components";
import { getLocalStorage, setLocalStorage } from "../utils";
import React, { useState } from "react";

const NameCard = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const cards = getLocalStorage("card");
  const targetCard = cards[cards.length - 1];

  const handleNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") registerName(ROUTER_PATH.MyCard);
  };

  const handleButtonClicked = () => {
    registerName(ROUTER_PATH.MyCard);
  };

  const registerName = (routerPath: string) => {
    setIsLoading(true);
    setTimeout(() => {
      targetCard.name = name;
      setLocalStorage("card", cards);
      navigate(routerPath);
    }, 3000);
  };

  return (
    <Page>
      {isLoading ? (
        <CardLoading card={targetCard} />
      ) : (
        <>
          <TitleWrapper>
            거의 다왔어요 😆 <br />
            카드 이름을 지어주세요
          </TitleWrapper>
          <Card {...targetCard} />
          <NameInputWrapper>
            <NameInput
              id="cardName"
              value={name}
              autoFocus
              onChange={handleNameChanged}
              onKeyDown={handleNameKeyDown}
              placeholder="ex) 엄마카드"
            />
          </NameInputWrapper>
          <Button isShown={true} type="button" onClick={handleButtonClicked}>
            확인
          </Button>
        </>
      )}
    </Page>
  );
};

const TitleWrapper = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  width: 100vw;
  text-align: center;
`;

const NameInputWrapper = styled.div`
  display: flex;
  height: 280px;
  align-items: center;
  text-align: center;
`;

const NameInput = styled.input`
  width: 50vw;
  height: 30px;
  text-align: center;
  border: none;

  font-size: 18px;

  border-bottom: 1.5px solid #737373;
  outline: none;

  &:focus {
    border-bottom: 1.5px solid blue;
  }
  &::placeholder {
    font-size: 15px;
    color: #e2e2e2;
  }
`;

export default NameCard;
