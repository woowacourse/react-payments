import type { Meta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import styled from "styled-components";

import CardItemProvider from "../components/provider/CardItemProvider";
import ModalProvider from "../components/provider/ModalProvider";
import { CardPublicInfo } from "../types/Card";
import CardCompletePage from "../components/pages/CardCompletePage";

const meta = {
  title: "Payment/Pages",
  component: CardCompletePage,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CardCompletePage>;

export default meta;

export const CompletePage = () => {
  const getCardItem = () => {
    const card: CardPublicInfo = {
      id: 1,
      cardNumber: ["1234", "2345", "3456", "4567"],
      expirationDate: ["02", "25"],
      name: "룩소",
      company: "국민카드",
      nickName: "내카드",
    };
    return card;
  };

  const setCardNickName = () => {};

  return (
    <AppContainer>
      <MemoryRouter>
        <CardItemProvider>
          <ModalProvider>
            <CardCompletePage getCardItem={getCardItem} setCardNickName={setCardNickName} />
          </ModalProvider>
        </CardItemProvider>
      </MemoryRouter>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  background-color: white;

  @media (min-width: 440px) {
    width: 438px;
  }
  @media (max-width: 440px) {
    width: 100vw;
  }
`;
