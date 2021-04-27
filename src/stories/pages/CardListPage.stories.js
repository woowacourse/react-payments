import CardListPage from '../../pages/cardListPage';

export default {
  title: 'Pages/CardListPage',
  component: CardListPage,
};

const Template = args => <CardListPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  setCurrentPage: () => {},
};
