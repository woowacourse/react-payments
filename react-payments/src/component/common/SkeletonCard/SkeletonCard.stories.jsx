import SkeletonCardBox from "./Skeleton.component";

export default {
  title: "SkeletonCardBox",
  component: SkeletonCardBox,
};

const Template = (args) => <SkeletonCardBox {...args} />;

export const DefaultSkeletonCardBox = Template.bind({});
DefaultSkeletonCardBox.args = {};
