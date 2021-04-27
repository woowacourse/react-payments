import { Header } from '.';

export default {
  title: 'Component/Header',
  component: Header,
  argTypes: {},
};

const Template = (args) => <Header {...args} />;

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  titleText: '카드 추가',
  hasButton: true,
};
