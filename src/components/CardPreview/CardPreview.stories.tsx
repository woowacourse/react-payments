import { Meta, StoryObj } from "@storybook/react";
import GlobalStyle from "../../styles/GlobalStyle";
import CardPreview from "./CardPreview";

const meta: Meta<typeof CardPreview> = {
  title: "CardPreview",
  component: CardPreview,
  args: {
    card: {
      cardNumber: {
        firstGroup: "1234",
        secondGroup: "1234",
        thirdGroup: "1234",
        fourthGroup: "1234",
      },
      expirationDate: {
        month: "12",
        year: "12",
      },
      ownerName: "aaa",
      cardCompany: "BC",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardPreview>;

export const Default: Story = {
  render: ({ card }) => {
    return (
      <>
        <GlobalStyle />
        <CardPreview card={card} />
      </>
    );
  },
};
