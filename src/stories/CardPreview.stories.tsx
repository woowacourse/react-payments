import { Meta, StoryObj } from "@storybook/react";
import CardPreview from "../components/CardPreview";

const meta: Meta<typeof CardPreview> = {
  component: CardPreview,
};

export default meta;
type Story = StoryObj<typeof CardPreview>;

export const PreviewFront: Story = {
  args: {
    cardNumbers: ["1234", "1234", "1234", "1234"],
    cardCompany: "현대카드",
    cardExpirationMonth: "12",
    cardExpirationYear: "25",
    cardOwnerName: "JAY MYONG",
    cardCVC: "123",
    previewStatus: "front",
  },
  render: ({ ...args }) => {
    return <CardPreview {...args} />;
  },
};

export const PreviewBack: Story = {
  args: {
    cardNumbers: ["5123", "1234", "1234", "1234"],
    cardCompany: "현대카드",
    cardExpirationMonth: "12",
    cardExpirationYear: "25",
    cardOwnerName: "JAY MYONG",
    cardCVC: "123",
    previewStatus: "back",
  },
  render: ({ ...args }) => {
    return <CardPreview {...args} />;
  },
};

export const Visa: Story = {
  args: {
    cardNumbers: ["4312", "1234", "1234", "1234"],
    cardCompany: "현대카드",
    cardExpirationMonth: "12",
    cardExpirationYear: "25",
    cardOwnerName: "JAY MYONG",
    cardCVC: "123",
    previewStatus: "front",
  },
  render: ({ ...args }) => {
    return <CardPreview {...args} />;
  },
};

export const Master: Story = {
  args: {
    cardNumbers: ["5123", "1234", "1234", "1234"],
    cardCompany: "현대카드",
    cardExpirationMonth: "12",
    cardExpirationYear: "25",
    cardOwnerName: "JAY MYONG",
    cardCVC: "123",
    previewStatus: "front",
  },
  render: ({ ...args }) => {
    return <CardPreview {...args} />;
  },
};
