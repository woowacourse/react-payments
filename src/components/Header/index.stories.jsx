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
