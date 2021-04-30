import Modal from '.';

export default {
  component: Modal,
  title: 'Shared/Modal',
};

const Template = args => <Modal {...args} />;

export const BottomType = Template.bind({});
BottomType.args = {
  type: 'bottom',
};

export const FullType = Template.bind({});
FullType.args = {
  type: 'full',
};
