import CardNumber from './CardNumber';

export default {
  title: 'CardAddPage/CardNumber',
  component: CardNumber,
};

const Template = (args) => <CardNumber {...args} />;

export const CardNumberInput = Template.bind({});
CardNumberInput.args = {
  cardInfo: {
    number1: '',
    number2: '',
    number3: '',
    number4: '',
  },
};
