import CardExpiration from 'containers/CardExpirationInput/CardExpiration';

export default {
  title: 'CardAddition/CardExpiration',
  component: CardExpiration,
};

const Template = (args) => <CardExpiration {...args} />;

export const Example = Template.bind({});
Example.args = {
  color: '#737373',
};
