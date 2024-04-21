import { Meta, StoryFn } from "@storybook/react";
import ExpirationDate from "../components/Card/ExpirationDate";

interface ExpirationDateProps {
  expirationDate: Map<string, string>;
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
  expirationDate: new Map<string, string>([
    ["0", "11"],
    ["1", "27"],
  ]),
};
