import { StoryFn } from "@storybook/react";
import Card from "../components/common/Card";

export default {
  title: "Card",
  component: Card,
};

const Template: StoryFn<typeof Card> = (args: { $backgroundColor?: string }): React.ReactElement => <Card {...args} />;

export const Gray = Template.bind({});
Gray.args = {
  $backgroundColor: "#E5E5E5",
};
