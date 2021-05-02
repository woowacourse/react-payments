import CardCreationCompletePage from '../../pages/cardCreationCompletePage';
import { COLOR } from '../../constants/color';

export default {
  title: 'Pages/CardCreationCompletePage',
  component: CardCreationCompletePage,
};

const Template = args => <CardCreationCompletePage {...args} />;

export const Default = Template.bind({});
Default.args = {
  setNewCardInfo: () => {},
  setCurrentPage: () => {},
  newCardInfo: {
    selectedCardInfo: {
      color: COLOR.LIGHT_GRAY,
      id: 1,
      name: '브랜 카드',
    },
    cardNumber: { 0: '1111', 1: '2222', 2: '3333', 3: '4444' },
    cardOwner: '브랜쨩',
    cardExpiredDate: { month: '03', year: '23' },
  },
};
