import { NickNameForm } from '.';

export default {
  title: 'Component/NickNameForm',
  component: NickNameForm,
  argTypes: {},
};

const Template = (args) => <NickNameForm {...args} />;

export const defaultForm = Template.bind({});
defaultForm.args = {
  nickName: {
    value: '직박구리',
    handleChange: () => {},
  },
  submitCardNickName: () => {},
};
