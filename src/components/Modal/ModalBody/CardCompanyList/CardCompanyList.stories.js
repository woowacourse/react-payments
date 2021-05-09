import { CardCompanyList } from '.';

export default {
  title: 'Component/CardCompanyList',
  component: CardCompanyList,
  argTypes: {},
};

const Template = (args) => <CardCompanyList {...args} />;

export const DefaultCardCompanyList = Template.bind({});
DefaultCardCompanyList.args = {
  selectedCompany: '로이드',
};
