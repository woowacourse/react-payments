import type { Meta } from "@storybook/react";

import CardNickInputPage from "../../component/CardNickInputPage/CardNickInputPage";
import { BrowserRouter } from "react-router-dom";
import { filledCard_test } from "../../cardData";

const meta: Meta = {
  title: "CardNickInputPage component",
  component: CardNickInputPage,
  argTypes: {
    setNickNewCard: {
      action: "카드 객체에 별칭 수정",
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const inputTest = (args: any) => (
  <CardNickInputPage {...args}></CardNickInputPage>
);
inputTest.args = {
  card: filledCard_test,
};

export default meta;
