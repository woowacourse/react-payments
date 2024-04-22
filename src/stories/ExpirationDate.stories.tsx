import { Meta, StoryFn } from "@storybook/react";
import ExpirationDate from "../components/Card/ExpirationDate";

interface ExpirationDateProps {
  expirationDate: string[];
}

export default {
  title: "ExpirationDate",
  component: ExpirationDate,
} as Meta<typeof ExpirationDate>;

type ExpirationDateStory = StoryFn<typeof ExpirationDate>;

const Template: ExpirationDateStory = (args: ExpirationDateProps) => <ExpirationDate {...args} />;

export const Default = Template.bind({});
Default.args = {
  expirationDate: ["12", "23"],
};
