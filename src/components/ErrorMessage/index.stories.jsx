import ErrorMessage from '.';

export default {
  title: 'ErrorMessage',
  component: ErrorMessage,
  argTypes: {
    children: {
      description: '보여줄 에러 메시지',
      control: {
        type: 'text',
      },
    },
  },
};

const Template = (args) => <ErrorMessage {...args} />;

export const Example = Template.bind({});

Example.args = {
  children: '오류가 발생했습니다.',
};
