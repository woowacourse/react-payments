import ColorBox from "./colorBox.component";

export default {
  title: "ColorBox",
  component: ColorBox,
};

const Template = (args) => <ColorBox {...args} />;

export const PocoCard = Template.bind({});
PocoCard.args = {
  colorType: "poco-color",
  cardType: "포코 카드",
};

export const JunCard = Template.bind({});
JunCard.args = {
  colorType: "jun-color",
  cardType: "준 카드",
};

export const GongwonCard = Template.bind({});
GongwonCard.args = {
  colorType: "gongwon-color",
  cardType: "공원 카드",
};

export const BranCard = Template.bind({});
BranCard.args = {
  colorType: "bran-color",
  cardType: "브랜 카드",
};

export const RoidCard = Template.bind({});
RoidCard.args = {
  colorType: "roid-color",
  cardType: "로이드 카드",
};

export const DobbyCard = Template.bind({});
DobbyCard.args = {
  colorType: "dobby-color",
  cardType: "도비 카드",
};

export const CollinCard = Template.bind({});
CollinCard.args = {
  colorType: "collin-color",
  cardType: "콜린 카드",
};

export const SunCard = Template.bind({});
SunCard.args = {
  colorType: "sun-color",
  cardType: "썬 카드",
};
