import type { Meta, StoryObj } from "@storybook/react";
import AddCardPreview from "./AddCardPreview";
import { INITIAL_EXPIRE_DATE_STATE } from "@card/ExpireDate/constants";
import { INITIAL_CARD_NUMBER_STATE } from "@card/CardNumber/constants";

const meta = {
  title: "Component/AddCardPreview",
  component: AddCardPreview,
  args: {
    cardNumberState: INITIAL_CARD_NUMBER_STATE,
    expireDate: INITIAL_EXPIRE_DATE_STATE,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AddCardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FilledCard: Story = {
  args: {
    cardNumberState: {
      first: { value: "1234", isError: false },
      second: { value: "1234", isError: false },
      third: { value: "1234", isError: false },
      fourth: { value: "1234", isError: false },
    },
    expireDate: {
      MM: { value: "12", errorMessage: "" },
      YY: { value: "25", errorMessage: "" },
    },
  },
};
