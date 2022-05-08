import Card from 'components/Card/Card';

export default {
  title: 'components/Card',
  component: Card,
  args: {
    cardNumber: ['1234', '5678', '4567', '7890'],
    cardOwner: '마르코',
    cardExpiration: ['05', '23'],
  },
};

const Template = (args) => <Card {...args} />;

export const PocoCard = Template.bind({});
PocoCard.args = {
  cardName: '포코 카드',
  cardColor: '#E24141',
};

export const JuneCard = Template.bind({});
JuneCard.args = {
  cardName: '준 카드',
  cardColor: '#547CE4',
};

export const GongOneCard = Template.bind({});
GongOneCard.args = {
  cardName: '공원 카드',
  cardColor: '#73BC6D',
};

export const BranCard = Template.bind({});
BranCard.args = {
  cardName: '브랜 카드',
  cardColor: '#DE59B9',
};

export const LoydCard = Template.bind({});
LoydCard.args = {
  cardName: '로이드 카드',
  cardColor: '#04C09E',
};

export const DobbyCard = Template.bind({});
DobbyCard.args = {
  cardName: '도비 카드',
  cardColor: '#E76E9A',
};

export const CollinCard = Template.bind({});
CollinCard.args = {
  cardName: '콜린 카드',
  cardColor: '#F37D3B',
};

export const SunCard = Template.bind({});
SunCard.args = {
  cardName: '썬 카드',
  cardColor: '#FBCD58',
};
