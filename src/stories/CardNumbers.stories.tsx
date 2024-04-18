import { Meta, StoryObj } from "@storybook/react";
import CardNumbers from "../components/Card/CardNumbers";

export default {
  title: "CardNumbers",
  component: CardNumbers,
} as Meta;

type Story = StoryObj<typeof CardNumbers>;

const Template: Story["template"] = (args) => <CardNumbers {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardNumbers: [
    { index: "0", currentValue: "4" },
    { index: "1", currentValue: "5" },
    { index: "2", currentValue: "6" },
    { index: "3", currentValue: "7" },
    { index: "4", currentValue: "8" },
    { index: "5", currentValue: "9" },
    { index: "6", currentValue: "0" },
    { index: "7", currentValue: "1" },
  ],
};
