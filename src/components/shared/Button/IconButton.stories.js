import { IconButton } from '.';

export default {
  component: IconButton,
  title: 'Common/IconButton',
};

const Template = args => <IconButton {...args}>포코 카드</IconButton>;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: MINT[500],
};
