import { CardList } from '.';

export default {
  title: 'Component/CardList',
  component: CardList,
  argTypes: {},
};

const Template = (args) => <CardList {...args} />;

export const CardListBody = Template.bind({});
CardListBody.args = {
  cards: [
    {
      company: '포코',
      numbers: { first: '1111', second: '2222', third: '3333', fourth: '4444' },
      owner: 'SUN',
      validDay: { month: '04', year: '21' },
      nickName: '엄카',
    },
    {
      company: '로이드',
      numbers: { first: '1111', second: '2222', third: '3333', fourth: '4444' },
      owner: 'SUN',
      validDay: { month: '04', year: '21' },
      nickName: '법카',
    },
  ],
};
