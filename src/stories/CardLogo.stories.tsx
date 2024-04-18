import { Meta, StoryObj } from "@storybook/react";
import CardLogo from "../components/Card/CardLogo";

export default {
  title: "CardLogo",
  component: CardLogo,
} as Meta;

type Story = StoryObj<typeof CardLogo>;

const Template: Story["template"] = (args) => <CardLogo {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardNumbers: [
    { index: "0", currentValue: "4" },
    { index: "1", currentValue: "5678" },
    { index: "2", currentValue: "9012" },
    { index: "3", currentValue: "3456" },
  ],
};
