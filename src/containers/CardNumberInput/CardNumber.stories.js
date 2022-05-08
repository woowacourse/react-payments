import CardNumber from 'containers/CardNumberInput/CardNumber';

export default {
  title: 'CardAddition/CardNumber',
  component: CardNumber,
};

const Template = (args) => <CardNumber {...args} />;

export const Example = Template.bind({});
Example.args = {
  color: '#737373',
};
