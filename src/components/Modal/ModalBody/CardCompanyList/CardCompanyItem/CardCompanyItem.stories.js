import { CardCompanyItem } from '.';

export default {
  title: 'Component/CardCompanyItem',
  component: CardCompanyItem,
  argTypes: {},
};

const Template = (args) => <CardCompanyItem {...args} />;

export const DefaultCardCompanyItem = Template.bind({});
DefaultCardCompanyItem.args = {
  color: '#94DACD',
  name: '로이드',
  isSelected: true,
};
