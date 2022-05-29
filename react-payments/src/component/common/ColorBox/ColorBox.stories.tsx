import { action } from "@storybook/addon-actions";

import ColorBox, {
  ColorBoxProps,
} from "component/common/ColorBox/ColorBox.component";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Common/ColorBox",
  component: ColorBox,
  parameters: {
    actions: {
      handles: ["click .color-box"],
    },
  },
} as Meta;

const Template: Story<ColorBoxProps> = (args) => <ColorBox {...args} />;

export const PocoCard = Template.bind({});
PocoCard.args = {
  cardType: "pocoCard",
  cardName: "포코 카드",
  onClickCardType: action("clicked"),
  currentCardType: "defaultCard",
};

export const JunCard = Template.bind({});
JunCard.args = {
  cardType: "junCard",
  cardName: "준 카드",
  onClickCardType: action("clicked"),
  currentCardType: "defaultCard",
};

export const GongwonCard = Template.bind({});
GongwonCard.args = {
  cardType: "gongwonCard",
  cardName: "공원 카드",
  onClickCardType: action("clicked"),
  currentCardType: "defaultCard",
};

export const BranCard = Template.bind({});
BranCard.args = {
  cardType: "branCard",
  cardName: "브랜 카드",
  onClickCardType: action("clicked"),
  currentCardType: "defaultCard",
};

export const RoidCard = Template.bind({});
RoidCard.args = {
  cardType: "roidCard",
  cardName: "로이드 카드",
  onClickCardType: action("clicked"),
  currentCardType: "defaultCard",
};

export const DobbyCard = Template.bind({});
DobbyCard.args = {
  cardType: "dobbyCard",
  cardName: "도비 카드",
  onClickCardType: action("clicked"),
  currentCardType: "defaultCard",
};

export const CollinCard = Template.bind({});
CollinCard.args = {
  cardType: "collinCard",
  cardName: "콜린 카드",
  onClickCardType: action("clicked"),
  currentCardType: "defaultCard",
};

export const SunCard = Template.bind({});
SunCard.args = {
  cardType: "sunCard",
  cardName: "썬 카드",
  onClickCardType: action("clicked"),
  currentCardType: "defaultCard",
};

export const SelectedPocoCard = Template.bind({});
SelectedPocoCard.args = {
  cardType: "pocoCard",
  cardName: "포코 카드",
  currentCardType: "pocoCard",
  onClickCardType: action("clicked"),
};
