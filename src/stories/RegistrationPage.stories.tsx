import type { Meta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import styled from "styled-components";

import CardRegistrationPage from "../components/pages/CardRegistrationPage";
import CardItemProvider from "../components/provider/CardItemProvider";
import ModalProvider from "../components/provider/ModalProvider";

const meta = {
  title: "Payment/Pages",
  component: CardRegistrationPage,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CardRegistrationPage>;

export default meta;

export const RegistrationPage = () => {
  const addCardItem = () => {};
  return (
    <AppContainer>
      <MemoryRouter>
        <CardItemProvider>
          <ModalProvider>
            <CardRegistrationPage addCardItem={addCardItem} />
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
