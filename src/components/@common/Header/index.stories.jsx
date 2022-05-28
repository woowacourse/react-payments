import Header from '.';

export default {
  title: 'Component/@Common/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Header {...args} />;

const DefaultHeader = Template.bind({});
DefaultHeader.args = { children: '기본 타이틀' };

export { DefaultHeader };
