import Card from './Card';

export default {
  title: 'Payments/Card',
  component: Card,
  argTypes: {
    bgColor: {
      control: 'color',
    },
    companyName: {
      control: 'text',
    },
    cardNumbers: {
      control: 'text',
    },
    ownerName: {
      control: 'text',
    },
    expiryDate: {
      control: 'text',
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  bgColor: '#E24141',
  companyName: '로이드카드',
  cardNumbers: '1234567891011121',
  ownerName: 'DOBBY',
  expiryDate: '12/24',
};
