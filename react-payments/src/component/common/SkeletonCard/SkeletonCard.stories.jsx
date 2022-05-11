import SkeletonCardBox from "component/common/SkeletonCard/SkeletonCard.component";

export default {
  title: "Common/SkeletonCardBox",
  component: SkeletonCardBox,
};

const Template = (args) => <SkeletonCardBox {...args} />;

export const DefaultSkeletonCardBox = Template.bind({});
DefaultSkeletonCardBox.args = {};
