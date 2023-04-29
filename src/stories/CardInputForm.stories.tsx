import type { Meta } from "@storybook/react";

import CardInputForm from "../component/CardInputPage/CardInputForm/CardInputForm";
import { BrowserRouter } from "react-router-dom";

import "../../.storybook/allComponent.css";

const meta: Meta = {
  title: "CardInputForm component",
  component: CardInputForm,
  argTypes: {
    setIsComplete: { action: "Is input complete?" },
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

export const InputTest = (args: any) => (
  <CardInputForm addNewCard={() => {}}></CardInputForm>
);
