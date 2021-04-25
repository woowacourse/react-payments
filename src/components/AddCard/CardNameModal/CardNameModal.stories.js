import CardNameModal from '.';
import CARD_DATA from '../../../constants/cardData';

export default {
  component: CardNameModal,
  title: 'Form/CardNameModal',
};

const Template = args => <CardNameModal {...args}>다음</CardNameModal>;

export const Default = Template.bind({});
Default.args = {
  cardData: CARD_DATA,
};
