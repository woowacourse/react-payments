import SkeletonCardBox from "component/common/SkeletonCard/SkeletonCard.component";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Common/SkeletonCardBox",
  component: SkeletonCardBox,
} as Meta;

const Template: Story = (args) => <SkeletonCardBox {...args} />;

export const DefaultSkeletonCardBox = Template.bind({});
DefaultSkeletonCardBox.args = {};
