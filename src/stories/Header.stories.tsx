import { StoryFn, Meta } from "@storybook/react";
import Header, { HeaderType } from "../components/common/Header";

export default {
  title: "Header",
  component: Header,
} as Meta<HeaderType>;

const Template: StoryFn<HeaderType> = (props) => <Header {...props} />;

export const MyCardHeader = Template.bind({});
MyCardHeader.args = {
  title: "보유 카드",
  isBack: false,
};

export const AddCardHeader = Template.bind({});
AddCardHeader.args = {
  title: "카드 추가",
  isBack: true,
};
