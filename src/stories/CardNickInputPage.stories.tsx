import type { Meta } from "@storybook/react";

import CardNickInputPage from "../component/CardNickInputPage/CardNickInputPage";
import { BrowserRouter } from "react-router-dom";

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

export const renderingTest = (args: any) => (
  <CardNickInputPage {...args}></CardNickInputPage>
);
renderingTest.args = {
  card: {
    nickName: "",
    owner: "",
    expirationDate: "12/23",
    cardCo: "woori",
    cardNumber: [1234, 5678, 9984, 1245],
    securityCode: "124",
    password: ["1", "6"],
  },
};

export default meta;
