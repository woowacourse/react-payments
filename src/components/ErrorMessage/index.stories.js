import ErrorMessage from '.';

export default {
  title: 'ErrorMessage',
  component: ErrorMessage,
  argTypes: {
    message: {
      description: '보여줄 에러 메시지',
    },
  },
};

const Template = (args) => <ErrorMessage {...args} />;

export const Example = Template.bind({});

Example.args = {
  message: '오류가 발생했습니다.',
};
