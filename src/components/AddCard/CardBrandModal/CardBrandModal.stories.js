import CardBrandModal from '.';
import CARD_DATA from '../../../constants/cardData';

export default {
  component: CardBrandModal,
  title: 'Form/CardBrandModal',
};

const Template = args => <CardBrandModal {...args}>다음</CardBrandModal>;

export const Default = Template.bind({});
Default.args = {
  cardData: CARD_DATA,
};
