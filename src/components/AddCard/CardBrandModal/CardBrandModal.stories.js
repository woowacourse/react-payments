import CardBrandModal from '.';
import CARD_BRAND from '../../../constants/cardData';

export default {
  component: CardBrandModal,
  title: 'Form/CardBrandModal',
};

const Template = args => <CardBrandModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardBrands: CARD_BRAND,
};
