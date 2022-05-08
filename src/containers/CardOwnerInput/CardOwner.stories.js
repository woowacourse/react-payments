import CardOwner from 'containers/CardOwnerInput/CardOwner';

export default {
  title: 'containers/CardOwner',
  component: CardOwner,
};

const Template = (args) => <CardOwner {...args} />;

export const Example = Template.bind({});
Example.args = {
  color: '#737373',
};
