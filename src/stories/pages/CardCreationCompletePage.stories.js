import CardCreationCompletePage from '../../pages/cardCreationCompletePage';

export default {
  title: 'Pages/CardCreationCompletePage',
  component: CardCreationCompletePage,
};

const Template = args => <CardCreationCompletePage {...args} />;
export const Default = Template.bind({});

Default.args = {
  setCardList: () => {},
};
