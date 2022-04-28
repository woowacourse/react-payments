import ColorBox from "./colorBox.component";
import { action } from "@storybook/addon-actions";

export default {
  title: "ColorBox",
  component: ColorBox,
  parameters: {
    actions: {
      handles: ["click .color-box"],
    },
  },
};

const Template = (args) => <ColorBox {...args} />;

export const PocoCard = Template.bind({});
PocoCard.args = {
  colorType: "poco-color",
  cardType: "포코 카드",
  idx: 0,
  onClickCardType: action("clicked"),
};

export const JunCard = Template.bind({});
JunCard.args = {
  colorType: "jun-color",
  cardType: "준 카드",
  idx: 1,
  onClickCardType: action("clicked"),
};

export const GongwonCard = Template.bind({});
GongwonCard.args = {
  colorType: "gongwon-color",
  cardType: "공원 카드",
  idx: 2,
  onClickCardType: action("clicked"),
};

export const BranCard = Template.bind({});
BranCard.args = {
  colorType: "bran-color",
  cardType: "브랜 카드",
  idx: 3,
  onClickCardType: action("clicked"),
};

export const RoidCard = Template.bind({});
RoidCard.args = {
  colorType: "roid-color",
  cardType: "로이드 카드",
  idx: 4,
  onClickCardType: action("clicked"),
};

export const DobbyCard = Template.bind({});
DobbyCard.args = {
  colorType: "dobby-color",
  cardType: "도비 카드",
  idx: 5,
  onClickCardType: action("clicked"),
};

export const CollinCard = Template.bind({});
CollinCard.args = {
  colorType: "collin-color",
  cardType: "콜린 카드",
  idx: 6,
  onClickCardType: action("clicked"),
};

export const SunCard = Template.bind({});
SunCard.args = {
  colorType: "sun-color",
  cardType: "썬 카드",
  idx: 7,
  onClickCardType: action("clicked"),
};

export const SelectedPocoCard = Template.bind({});
SelectedPocoCard.args = {
  colorType: "poco-color",
  cardType: "포코 카드",
  idx: 0,
  currentCardType: "포코 카드",
  onClickCardType: action("clicked"),
};
