import { CardRegistered } from '.';

export default {
  title: 'Component/CardRegistered',
  component: CardRegistered,
  argTypes: {},
};

const Template = (args) => <CardRegistered {...args} />;

export const CardRegisteredBody = Template.bind({});
CardRegisteredBody.args = {
  card: {
    company: '로이드',
    numbers: { first: '1111', second: '2222', third: '3333', fourth: '4444' },
    owner: 'SUN',
    validDay: { firstDigit: '04', secondDigit: '21' },
  },
};
