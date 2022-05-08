import CardList from './CardList';

export default {
  title: 'pages/CardList',
  component: CardList,
  args: { navigate: () => null },
};

const Template = (args) => <CardList {...args} />;

export const Example = Template.bind({});
