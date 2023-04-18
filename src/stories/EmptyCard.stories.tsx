import { StoryFn } from "@storybook/react";
import EmptyCard from "../components/common/EmptyCard";

export default {
  title: "stories/EmptyCard",
  component: EmptyCard,
};

const Template: StoryFn<typeof EmptyCard> = (args: {
  backgroundColor: string;
}): React.ReactElement => <EmptyCard {...args} />;

export const Purple = Template.bind({});
Purple.args = {
  backgroundColor: "#BA55D3",
};

export const Gray = Template.bind({});
Gray.args = {
  backgroundColor: "#E5E5E5",
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "green",
};
