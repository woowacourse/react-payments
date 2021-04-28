import CardBrandModal from '.';
import CARD_BRAND from '../../../constants/cardData';

export default {
  component: CardBrandModal,
  title: 'AddCard/CardBrandModal',
};

const Template = args => <CardBrandModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardBrands: CARD_BRAND,
};
