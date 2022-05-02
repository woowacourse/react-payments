import Card from './Card';

export default {
  title: 'Common/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const CardImage = Template.bind({});
CardImage.args = {
  isEmpty: true,
  cardInfo: {
    number1: '',
    number2: '',
    number3: '',
    number4: '',
    month: '',
    year: '',
    owner: '',
    cvc: '',
    password1: '',
    password2: '',
  },
};
