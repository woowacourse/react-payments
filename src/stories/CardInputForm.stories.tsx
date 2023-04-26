import type { Meta, StoryObj } from "@storybook/react";

import CardInputForm from "../component/CardInputPage/CardInputForm/CardInputForm";
import { BrowserRouter, Route } from "react-router-dom";

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
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

export const Form: Story = {};
