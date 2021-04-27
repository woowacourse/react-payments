import { CardItem } from '.';

export default {
  title: 'Component/CardItem',
  component: CardItem,
  argTypes: {},
};

const Template = (args) => <CardItem {...args} />;

export const DefaultCardItem = Template.bind({});
DefaultCardItem.args = {
  card: {
    company: '로이드',
    numbers: { first: '1111', second: '2222', third: '3333', fourth: '4444' },
    owner: 'SUN',
    validDay: { month: '04', year: '21' },
    nickName: '법카',
  },
};
