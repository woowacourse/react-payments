import Label from './Label';

export default {
  title: 'components/Label',
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: '카드 번호',
};
