import type { Meta, StoryObj } from "@storybook/react";

import CardInputForm from "../component/CardInputPage/CardInputForm/CardInputForm";
import { BrowserRouter } from "react-router-dom";
import { CreditCardProvider } from "../context/CreditCardContext";

type Story = StoryObj<typeof CardInputForm>;

const meta: Meta  = {
  title: "Card Input Form",
  component: CardInputForm,

  argTypes: {
    addNewCard: {
      action: "카드 입력 성공!"
    }
  },

  decorators: [
    (Story) => (
      <BrowserRouter>
        <CreditCardProvider>
          <Story />
        </CreditCardProvider>
      </BrowserRouter>
    ),
  ],
};

export default meta;

export const Form: Story = {};
