import type { Meta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import styled from "styled-components";

import CardListPage from "../../components/pages/CardListPage";
import CardItemProvider from "../../components/provider/CardItemProvider";
import ModalProvider from "../../components/provider/ModalProvider";
import { CardPublicInfo } from "../../types/Card";

const meta = {
  title: "Payment/Pages",
  component: CardListPage,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CardListPage>;

export default meta;

export const ListPage = () => {
  const cardList: CardPublicInfo[] = [
    {
      id: 1,
      cardNumber: ["1234", "2345", "3456", "4567"],
      expirationDate: ["02", "25"],
      name: "룩소",
      company: "국민카드",
      nickName: "내카드",
    },
    {
      id: 2,
      cardNumber: ["1124", "2433", "3456", "4567"],
      expirationDate: ["12", "24"],
      name: "정균",
      company: "카카오뱅크",
      nickName: "정균카드",
    },

    {
      id: 3,
      cardNumber: ["4422", "1273", "3456", "4567"],
      expirationDate: ["04", "24"],
      name: "룩소맘",
      company: "하나카드",
      nickName: "엄마카드",
    },
  ];

  return (
    <AppContainer>
      <MemoryRouter>
        <CardItemProvider>
          <ModalProvider>
            <CardListPage cardList={cardList} />
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
