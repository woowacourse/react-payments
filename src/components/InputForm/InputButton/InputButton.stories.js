import { InputButton } from '.';

export default {
  title: 'Component/InputButton',
  component: InputButton,
  argTypes: {},
};

const Template = (args) => <InputButton {...args} />;

export const DefaultInputButton = Template.bind({});
DefaultInputButton.args = {
  text: '다음',
};
