import CardNumberInput from '../components/cardCreation/cardNumberInput/CardNumberInput';

export default {
  title: 'CardNumberInput',
  component: CardNumberInput,
};

const Template = args => <CardNumberInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
