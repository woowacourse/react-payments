import CardCreationCompletePage from '../../pages/cardCreationCompletePage';
import { COLOR } from '../../constants/color';
import { FIRST, FOURTH, MONTH, SECOND, THIRD, YEAR } from '../../constants/inputName';

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
      color: COLOR.MINT_500,
      id: 1,
      name: '디토 카드',
    },
    cardNumber: { [FIRST]: '1111', [SECOND]: '2222', [THIRD]: '3333', [FOURTH]: '4444' },
    cardOwner: '디토',
    cardExpiredDate: { [MONTH]: '12', [YEAR]: '23' },
  },
};
