import React from "react";
import CardListPage from "./CardListPage";

const firstSampleCardInfo = {
  "card-number": "1234567812345678",
  "expire-date": "1225",
  "holder-name": "Bling",
  "security-code": "098",
  password: "00",
  nickname: "블링카드",
};

const secondSampleCardInfo = {
  "card-number": "1234567812345671",
  "expire-date": "0224",
  "holder-name": "Roy",
  "security-code": "098",
  password: "00",
  nickname: "로이카드",
};

export default {
  title: "Pages/CardListPage",
  component: CardListPage,
  decorators: [
    (Story) => (
      <div
        style={{
          width: "375px",
          height: "700px",
          margin: "auto",
          backgroundColor: "#ffffff",
          padding: "20px 28px",
        }}
      >
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
