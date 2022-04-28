import Card from '.';
import 'index.css';

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
  companyName: '콤피 카드',
  cardNumber: '1111-2222-••••-••••',
  userName: '류콤피',
  expireMonth: '05',
  expireYear: '28',
};
