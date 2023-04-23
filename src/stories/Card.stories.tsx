import { StoryFn } from "@storybook/react";
import Card from "../components/common/Card";

export default {
  title: "Card",
  component: Card,
};

const Template: StoryFn<typeof Card> = (args: { $backgroundColor?: string }): React.ReactElement => (
  <Card {...args}>
    <></>
  </Card>
);

export const Purple = Template.bind({});
Purple.args = {
  $backgroundColor: "#BA55D3",
};

export const Gray = Template.bind({});
Gray.args = {
  $backgroundColor: "#E5E5E5",
};

export const Green = Template.bind({});
Green.args = {
  $backgroundColor: "green",
};
