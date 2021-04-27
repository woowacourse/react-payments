import { Button } from '../../components/commons/button/Button';

export default {
  title: 'Commons/Button',
  component: Button,
};

const Template = args => <Button {...args}></Button>;

export const Default = Template.bind({});
Default.args = {
  children: '확인',
};

export const Custom = Template.bind({});
Custom.args = {
  children: '커스텀',
  backgroundColor: 'black',
  color: 'white',
  borderRadius: '10px',
};
