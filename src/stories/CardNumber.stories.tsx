import { Meta, StoryObj } from "@storybook/react";
import CardNumber from "../components/Card/CardNumber";

export default {
  title: "CardNumber",
  component: CardNumber,
} as Meta;

type Story = StoryObj<typeof CardNumber>;

const Template: Story["template"] = (args) => <CardNumber {...args} />;

export const Default = Template.bind({});
Default.args = {
  number: "1234",
};
