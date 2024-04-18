import { Meta, StoryFn } from "@storybook/react";
import ExpirationDate from "../components/Card/ExpirationDate";
import { CardInfo } from "../components/PaymentApp";

interface ExpirationDateProps {
  expirationDate: CardInfo[];
}

export default {
  title: "ExpirationDate",
  component: ExpirationDate,
} as Meta<typeof ExpirationDate>;


type ExpirationDateStory = StoryFn<typeof ExpirationDate>;

const Template: ExpirationDateStory = (args: ExpirationDateProps) => (
  <ExpirationDate {...args} />
);

export const Default = Template.bind({});
Default.args = {
  expirationDate: [
    { index: 0, currentValue: "12" },
    { index: 1, currentValue: "23" },
  ],
};
