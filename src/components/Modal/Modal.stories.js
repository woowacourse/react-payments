import Modal from './Modal';

export default {
  title: 'Payments/Modal',
  component: Modal,
  argTypes: {
    children: { control: 'object' },
    onClose: {},
  },
};

const Template = (args) => <Modal {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: <h3>이 곳은 모달 내부입니다</h3>,
};
