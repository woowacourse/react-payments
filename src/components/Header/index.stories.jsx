import Header from ".";
import { ReactComponent as ArrowImage } from "assets/arrow.svg";
import Button from "../Button";

const Template = (args) => <Header {...args} />;

export default {
  title: "component/Header",
  component: Header,
};

export const CardAddHeader = Template.bind({});
CardAddHeader.args = {
  leftChild: (
    <Button>
      <ArrowImage />
    </Button>
  ),
  headText: "카드추가",
};

export const CardListHeader = Template.bind({});
CardListHeader.args = {
  headText: "보유카드",
};

export const CardEditHeader = Template.bind({});
CardEditHeader.args = {
  leftChild: (
    <Button>
      <ArrowImage />
    </Button>
  ),
  headText: "카드 정보 수정",
  rightChild: <Button color="pink">삭제</Button>,
};
