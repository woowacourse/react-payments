import { StoryFn, Meta } from "@storybook/react";
import Header, { HeaderType } from "../components/common/Header";
import { ROUTER_PATH } from "../provider/router/path";

export default {
  title: "Header",
  component: Header,
} as Meta<HeaderType>;

const Template: StoryFn<HeaderType> = (props) => <Header {...props} />;

export const MyCardHeader = Template.bind({});
MyCardHeader.args = {
  title: "보유 카드",
};

export const AddCardHeader = Template.bind({});
AddCardHeader.args = {
  title: "카드 추가",
  path: ROUTER_PATH.MyCard,
};
