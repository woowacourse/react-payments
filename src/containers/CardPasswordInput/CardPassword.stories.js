import CardPassword from 'containers/CardPasswordInput/CardPassword';

export default {
  title: 'CardAddition/CardPassword',
  component: CardPassword,
};

const Template = (args) => <CardPassword {...args} />;

export const Example = Template.bind({});
Example.args = {
  color: '#737373',
};
