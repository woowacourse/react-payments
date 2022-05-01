import Card from '.';

export default {
  title: 'Component/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Card {...args} />;

export const Compy = Template.bind({});
Compy.args = {
  companyName: '콤피 카드 🦖',
  cardNumber: ['1234', '1234', '1234', '1234'],
  userName: 'COMPY RYU',
  expireMonth: '05',
  expireYear: '28',
};
