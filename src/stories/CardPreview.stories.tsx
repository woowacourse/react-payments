import type { Meta, StoryObj } from "@storybook/react";
import CardPreview from "../components/CardPreview/CardPreview";

const meta = {
  title: "CardPreview",
  component: CardPreview,
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumbers: {
      first: "",
      second: "",
      third: "",
      fourth: "",
    },
    expirationDate: { month: "", year: "" },
    ownerName: "",
    cardCompany: "",
    CVC: "",
    face: "front",
  },
};

export const Visa: Story = {
  args: {
    cardNumbers: {
      first: "4234",
      second: "1234",
      third: "1234",
      fourth: "1234",
    },
    expirationDate: { month: "08", year: "31" },
    ownerName: "kim",
    cardCompany: "",
    CVC: "",
    face: "front",
  },
};

export const Master: Story = {
  args: {
    cardNumbers: {
      first: "5434",
      second: "1234",
      third: "1234",
      fourth: "1234",
    },
    expirationDate: { month: "08", year: "31" },
    ownerName: "kim",
    cardCompany: "",
    CVC: "",
    face: "front",
  },
};

export const KAKAOBANK: Story = {
  args: {
    cardNumbers: {
      first: "5434",
      second: "1234",
      third: "1234",
      fourth: "1234",
    },
    expirationDate: { month: "08", year: "31" },
    ownerName: "kim",
    cardCompany: "카카오뱅크",
    CVC: "",
    face: "front",
  },
};

export const BACK: Story = {
  args: {
    cardNumbers: {
      first: "5434",
      second: "1234",
      third: "1234",
      fourth: "1234",
    },
    expirationDate: { month: "08", year: "31" },
    ownerName: "kim",
    cardCompany: "카카오뱅크",
    CVC: "",
    face: "back",
  },
};
