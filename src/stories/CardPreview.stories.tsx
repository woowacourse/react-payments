import { Meta, StoryObj } from "@storybook/react";
import CardPreview from "../components/Card/CardPreview";

export default {
  title: "CardPreview",
  component: CardPreview,
} as Meta;

type Story = StoryObj<typeof CardPreview>;

const Template: Story["template"] = (args) => <CardPreview {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardNumbers: [
    { index: "0", currentValue: "1234" },
    { index: "1", currentValue: "5678" },
    { index: "2", currentValue: "9012" },
    { index: "3", currentValue: "3456" },
  ],
  expirationDate: [
    { index: "0", currentValue: "12" },
    { index: "1", currentValue: "25" },
  ],
  userName: [{ index: "0", currentValue: "JOHN DOE" }],
};
