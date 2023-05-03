import type { Meta } from "@storybook/react";

import CardInputForm from "../../component/CardInputPage/CardInputForm/CardInputForm";
import { BrowserRouter } from "react-router-dom";

const meta: Meta = {
  title: "CardInputForm component",
  component: CardInputForm,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

export const submitTest = (args: any) => (
  <CardInputForm addNewCard={() => {}}></CardInputForm>
);
