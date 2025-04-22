import type { Meta, StoryObj } from "@storybook/react";
import AddCardPreview from "./AddCardPreview";
import { INITIAL_EXPIRE_DATE_STATE } from "../../AddCardForm/components/ExpireDate/constants";
import { INITIAL_CARD_NUMBER_STATE } from "../../AddCardForm/components/CardNumber/constants";

const meta = {
  title: "Component/AddCardPreview",
  component: AddCardPreview,
  args: {
    cardNumberState: INITIAL_CARD_NUMBER_STATE,
    expireDate: INITIAL_EXPIRE_DATE_STATE,
    selectedBrand: null,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AddCardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FilledCard: Story = {
  args: {
    cardNumberState: {
      first: { value: "1234", errorMessage: "" },
      second: { value: "1234", errorMessage: "" },
      third: { value: "1234", errorMessage: "" },
      fourth: { value: "1234", errorMessage: "" },
    },
    expireDate: {
      MM: { value: "12", errorMessage: "" },
      YY: { value: "25", errorMessage: "" },
    },
  },
};
export const VisaCard: Story = {
  args: {
    cardNumberState: {
      first: { value: "4234", errorMessage: "" },
      second: { value: "1234", errorMessage: "" },
      third: { value: "1234", errorMessage: "" },
      fourth: { value: "1234", errorMessage: "" },
    },
    expireDate: {
      MM: { value: "12", errorMessage: "" },
      YY: { value: "25", errorMessage: "" },
    },
  },
};
export const MasterCard: Story = {
  args: {
    cardNumberState: {
      first: { value: "5134", errorMessage: "" },
      second: { value: "1234", errorMessage: "" },
      third: { value: "1234", errorMessage: "" },
      fourth: { value: "1234", errorMessage: "" },
    },
    expireDate: {
      MM: { value: "12", errorMessage: "" },
      YY: { value: "25", errorMessage: "" },
    },
  },
};
