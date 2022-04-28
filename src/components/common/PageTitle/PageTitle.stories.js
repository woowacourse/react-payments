import PageTitle from './PageTitle';

export default {
  title: 'PageTitle',
  component: PageTitle,
};

const Template = (args) => <PageTitle {...args} />;

export const cardAdd = Template.bind({});
cardAdd.args = { title: '카드추가' };

export const cardList = Template.bind({});
cardList.args = { title: '보유카드' };
