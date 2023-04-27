import React from "react";

import Card from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { CARD_ID } from "src/utils/constant";

const card: Meta<typeof Card> = {
  component: Card,
  title: "Card",
};

export default card;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => {
    return (
      <Card
        cardNumber={{
          first: "1234",
          second: "5678",
          third: "9101",
          fourth: "1121",
        }}
        ownerName={"CLEAN"}
        expireDate={"03/24"}
      />
    );
  },
};

export const BC: Story = {
  render: () => {
    return (
      <Card
        cardName={{ id: CARD_ID[0], name: "BC 카드" }}
        cardNumber={{
          first: "1234",
          second: "5678",
          third: "9101",
          fourth: "1121",
        }}
        ownerName={"CLEAN"}
        expireDate={"03/24"}
      />
    );
  },
};

export const SHINHAN: Story = {
  render: () => {
    return (
      <Card
        cardName={{ id: CARD_ID[1], name: "신한 카드" }}
        cardNumber={{
          first: "1234",
          second: "5678",
          third: "9101",
          fourth: "1121",
        }}
        ownerName={"CLEAN"}
        expireDate={"03/24"}
      />
    );
  },
};
export const KAKAO: Story = {
  render: () => {
    return (
      <Card
        cardName={{ id: CARD_ID[2], name: "카카오 뱅크" }}
        cardNumber={{
          first: "1234",
          second: "5678",
          third: "9101",
          fourth: "1121",
        }}
        ownerName={"CLEAN"}
        expireDate={"03/24"}
      />
    );
  },
};
export const HYUNDAI: Story = {
  render: () => {
    return (
      <Card
        cardName={{ id: CARD_ID[3], name: "현대 카드" }}
        cardNumber={{
          first: "1234",
          second: "5678",
          third: "9101",
          fourth: "1121",
        }}
        ownerName={"CLEAN"}
        expireDate={"03/24"}
      />
    );
  },
};
export const WOORI: Story = {
  render: () => {
    return (
      <Card
        cardName={{ id: CARD_ID[4], name: "우리 카드" }}
        cardNumber={{
          first: "1234",
          second: "5678",
          third: "9101",
          fourth: "1121",
        }}
        ownerName={"CLEAN"}
        expireDate={"03/24"}
      />
    );
  },
};
export const LOTTEE: Story = {
  render: () => {
    return (
      <Card
        cardName={{ id: CARD_ID[5], name: "롯데 카드" }}
        cardNumber={{
          first: "1234",
          second: "5678",
          third: "9101",
          fourth: "1121",
        }}
        ownerName={"CLEAN"}
        expireDate={"03/24"}
      />
    );
  },
};
export const HANA: Story = {
  render: () => {
    return (
      <Card
        cardName={{ id: CARD_ID[6], name: "하나 카드" }}
        cardNumber={{
          first: "1234",
          second: "5678",
          third: "9101",
          fourth: "1121",
        }}
        ownerName={"CLEAN"}
        expireDate={"03/24"}
      />
    );
  },
};
export const KOOKMIN: Story = {
  render: () => {
    return (
      <Card
        cardName={{ id: CARD_ID[7], name: "국민 카드" }}
        cardNumber={{
          first: "1234",
          second: "5678",
          third: "9101",
          fourth: "1121",
        }}
        ownerName={"CLEAN"}
        expireDate={"03/24"}
      />
    );
  },
};
