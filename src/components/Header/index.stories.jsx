import Header from '.';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    children: {
      description: '헤더 제목',
      control: {
        type: 'text',
      },
    },
  },
};

const Template = (args) => <Header {...args} />;

export const Example = Template.bind({});

Example.args = {
  children: '헤더',
};
