import { Meta, StoryObj } from "@storybook/react";
import CardPreview from "./CardPreview";

const meta = {
  title: "CardPreview",
  component: CardPreview,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardInfo: {
      cardNumbers: ["1234", "1234", "1234", "1234"],
      expirationDate: ["05", "25"],
      cardOwnerName: "CHULMIN PARK",
    },
  },
};

export const Visa: Story = {
  args: {
    cardInfo: {
      cardNumbers: ["4234", "1234", "1234", "1234"],
      expirationDate: ["05", "25"],
      cardOwnerName: "CHULMIN PARK",
    },
  },
};

export const Master: Story = {
  args: {
    cardInfo: {
      cardNumbers: ["5134", "1234", "1234", "1234"],
      expirationDate: ["05", "25"],
      cardOwnerName: "CHULMIN PARK",
    },
  },
};

export const EnterFirstPartOnly: Story = {
  args: {
    cardInfo: {
      cardNumbers: ["1234", "", "", ""],
      expirationDate: ["05", "25"],
      cardOwnerName: "CHULMIN PARK",
    },
  },
};

export const EnterSecondPartOnly: Story = {
  args: {
    cardInfo: {
      cardNumbers: ["", "1234", "", ""],
      expirationDate: ["05", "25"],
      cardOwnerName: "CHULMIN PARK",
    },
  },
};

export const EnterThirdPartOnly: Story = {
  args: {
    cardInfo: {
      cardNumbers: ["", "", "1234", ""],
      expirationDate: ["05", "25"],
      cardOwnerName: "CHULMIN PARK",
    },
  },
};

export const EnterFourthPartOnly: Story = {
  args: {
    cardInfo: {
      cardNumbers: ["", "", "", "1234"],
      expirationDate: ["05", "25"],
      cardOwnerName: "CHULMIN PARK",
    },
  },
};

export const EnterMonthOnly: Story = {
  args: {
    cardInfo: {
      cardNumbers: ["1234", "1234", "1234", "1234"],
      expirationDate: ["05", ""],
      cardOwnerName: "CHULMIN PARK",
    },
  },
};

export const EnterYearOnly: Story = {
  args: {
    cardInfo: {
      cardNumbers: ["1234", "1234", "1234", "1234"],
      expirationDate: ["", "25"],
      cardOwnerName: "CHULMIN PARK",
    },
  },
};
