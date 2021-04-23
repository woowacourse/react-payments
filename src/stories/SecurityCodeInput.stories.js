import SecurityCodeInput from '../components/cardCreation/securityCodeInput/SecurityCodeInput';

export default {
  title: 'SecurityCodeInput',
  component: SecurityCodeInput,
};

const Template = args => <SecurityCodeInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
