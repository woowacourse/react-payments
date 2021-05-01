import ErrorMessageBox from './ErrorMessageBox';

export default {
  title: 'Payments/ErrorMessageBox',
  component: ErrorMessageBox,
  argTypes: {},
};

const Template = (args) => <ErrorMessageBox {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  errorMessage: '에러 메시지입니다',
};
