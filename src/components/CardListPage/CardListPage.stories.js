import CardListPage from '.';

export default {
  component: CardListPage,
  title: 'CardListPage/CardListPage',
};

const Template = args => <CardListPage {...args} />;

export const Default = Template.bind({});

Default.args = {};
