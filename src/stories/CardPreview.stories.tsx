import { Meta, StoryObj } from "@storybook/react";
import CardPreview from "../components/CardPreview/CardPreview";

const meta: Meta<typeof CardPreview> = {
  component: CardPreview,
};

export default meta;
type Story = StoryObj<typeof CardPreview>;

export const Default: Story = {
  args: {
    cardInformation: {
      cardNumbers: [
        { value: "", isError: false },
        { value: "", isError: false },
        { value: "", isError: false },
        { value: "", isError: false },
        { value: "", isError: false },
      ],
      cardExpirationMonth: { value: "", isError: false },
      cardExpirationYear: { value: "", isError: false },
      cardOwnerName: { value: "", isError: false },
    },
  },
  render: ({ ...args }) => {
    return <CardPreview {...args} />;
  },
};

export const Visa: Story = {
  args: {
    cardInformation: {
      cardNumbers: [
        { value: "4312", isError: false },
        { value: "1234", isError: false },
        { value: "1234", isError: false },
        { value: "1234", isError: false },
        { value: "1234", isError: false },
      ],
      cardExpirationMonth: { value: "12", isError: false },
      cardExpirationYear: { value: "25", isError: false },
      cardOwnerName: { value: "JAEWI MYONG", isError: false },
    },
  },
  render: ({ ...args }) => {
    return <CardPreview {...args} />;
  },
};

export const Master: Story = {
  args: {
    cardInformation: {
      cardNumbers: [
        { value: "5112", isError: false },
        { value: "1234", isError: false },
        { value: "1234", isError: false },
        { value: "1234", isError: false },
        { value: "1234", isError: false },
      ],
      cardExpirationMonth: { value: "12", isError: false },
      cardExpirationYear: { value: "25", isError: false },
      cardOwnerName: { value: "JAEWI MYONG", isError: false },
    },
  },
  render: ({ ...args }) => {
    return <CardPreview {...args} />;
  },
};
