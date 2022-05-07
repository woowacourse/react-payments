import React from "react";
import CardListPage from "./CardListPage";
import { PageStoriesStyle } from "./PageStoriesStyle";

const firstSampleCardInfo = {
  "card-number1": "1234",
  "card-number2": "5678",
  "card-number3": "8765",
  "card-number4": "4324",
  "expire-date1": "12",
  "expire-date2": "25",
  "holder-name": "Bling",
  "security-code": "098",
  password1: "0",
  password2: "0",
  nickname: "블링카드",
};

const secondSampleCardInfo = {
  "card-number1": "1234",
  "card-number2": "5678",
  "card-number3": "8765",
  "card-number4": "4321",
  "expire-date1": "02",
  "expire-date2": "24",
  "holder-name": "Roy",
  "security-code": "098",
  password1: "0",
  password2: "0",
  nickname: "로이카드",
};

export default {
  title: "Pages/CardListPage",
  component: CardListPage,
  decorators: [
    (Story) => (
      <div style={PageStoriesStyle}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <CardListPage {...args} />;

export const Default = Template.bind({});

export const WithCard = Template.bind({});

WithCard.decorators = [
  (Story) => {
    window.localStorage.setItem(
      "card-info",
      JSON.stringify([firstSampleCardInfo, secondSampleCardInfo])
    );
    return <Story />;
  },
];
