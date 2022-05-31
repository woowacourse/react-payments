import Button from '.';

export default {
  title: 'Common/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const NextButton = Template.bind({});
NextButton.args = {
  text: '다음',
};

export const ConfirmButton = Template.bind({});
ConfirmButton.args = {
  text: '확인',
};
