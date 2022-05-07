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
  cardType: "pocoCard",
  cardName: "포코 카드",
  idx: 0,
  onClickCardType: action("clicked"),
};

export const JunCard = Template.bind({});
JunCard.args = {
  cardType: "junCard",
  cardName: "준 카드",

  idx: 1,
  onClickCardType: action("clicked"),
};

export const GongwonCard = Template.bind({});
GongwonCard.args = {
  cardType: "gongwonCard",
  cardName: "공원 카드",

  idx: 2,
  onClickCardType: action("clicked"),
};

export const BranCard = Template.bind({});
BranCard.args = {
  cardType: "branCard",
  cardName: "브랜 카드",

  idx: 3,
  onClickCardType: action("clicked"),
};

export const RoidCard = Template.bind({});
RoidCard.args = {
  cardType: "roidCard",
  cardName: "로이드 카드",

  idx: 4,
  onClickCardType: action("clicked"),
};

export const DobbyCard = Template.bind({});
DobbyCard.args = {
  cardType: "dobbyCard",
  cardName: "도비 카드",

  idx: 5,
  onClickCardType: action("clicked"),
};

export const CollinCard = Template.bind({});
CollinCard.args = {
  cardType: "collinCard",
  cardName: "콜린 카드",

  idx: 6,
  onClickCardType: action("clicked"),
};

export const SunCard = Template.bind({});
SunCard.args = {
  cardType: "sunCard",
  cardName: "썬 카드",

  idx: 7,
  onClickCardType: action("clicked"),
};

export const SelectedPocoCard = Template.bind({});
SelectedPocoCard.args = {
  cardType: "pocoCard",
  cardName: "포코 카드",

  idx: 0,
  currentCardType: "pocoCard",
  onClickCardType: action("clicked"),
};
