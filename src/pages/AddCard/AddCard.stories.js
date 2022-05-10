import AddCard from './AddCard';

export default {
  title: 'pages/AddCard',
  component: AddCard,
  args: { navigate: () => null },
};

const Template = (args) => <AddCard {...args} />;

export const Example = Template.bind({});
