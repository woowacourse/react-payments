import CardListPage from './CardListPage';

export default {
  component: CardListPage,
  title: 'Pages/CardListPage',
};

const Template = args => <CardListPage {...args} />;

export const Default = Template.bind({});

Default.args = {};
