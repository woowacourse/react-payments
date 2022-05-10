import CardCompany from './CardCompany';

export default {
  title: 'components/CardCompany',
  component: CardCompany,
};

const Template = (args) => <CardCompany {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: '포코 카드',
  color: '#E24141',
};
