import CardPreview from 'components/CardPreview';

import 'css/card.css';
import 'css/button.css';

export default {
  title: 'Components/CardPreview',
  component: CardPreview,
  argTypes: {
    expiryDate: { control: { type: 'object' } },
  },
};

const Template = (args) => <CardPreview {...args} />;

export const CardPreviewTemplate = Template.bind({});
CardPreviewTemplate.args = {
  info: {
    company: '무비카드',
    cardNumber: {
      first: '1234',
      second: '5678',
      third: '1234',
      fourth: '5678',
    },
    ownerName: '록바',
    expiryDate: { month: '10', year: '23' },
  },
  isFrontView: true,
};
