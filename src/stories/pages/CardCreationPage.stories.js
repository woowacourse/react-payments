import CardCreationPage from '../../pages/cardCreationPage';

export default {
  title: 'Pages/CardCreationPage',
  component: CardCreationPage,
};

const Template = args => <CardCreationPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  setCurrentPage: () => {},
  setNewCardInfo: () => {},
};
