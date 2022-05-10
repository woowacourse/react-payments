import CardNumber from 'containers/CardNumberInput/CardNumber';

export default {
  title: 'containers/CardNumber',
  component: CardNumber,
};

const Template = (args) => <CardNumber {...args} />;

export const Example = Template.bind({});
Example.args = {
  color: '#737373',
};
