import CardNumberField from '.';
import 'index.css';

export default {
  title: 'Component/CardNumberField',
  component: CardNumberField,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <CardNumberField {...args} />;

export const DefaultCardNumberField = Template.bind({});
DefaultCardNumberField.args = {
  cardNumber: ['1234', '1234', '1234', '1234'],
};
