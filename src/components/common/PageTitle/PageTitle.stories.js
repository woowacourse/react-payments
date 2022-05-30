import PageTitle from '.';

export default {
  title: 'Common/PageTitle',
  component: PageTitle,
};

const Template = (args) => <PageTitle {...args} />;

export const CardAdd = Template.bind({});
CardAdd.args = { title: '카드추가' };

export const CardList = Template.bind({});
CardList.args = { title: '보유카드' };
