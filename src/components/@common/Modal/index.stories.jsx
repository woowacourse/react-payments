import Modal from '.';

export default {
  title: 'Component/@Common/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Modal {...args}>모달의 컨텐츠가 표기 됩니다</Modal>;

const Default = Template.bind({});
Default.args = { className: 'visible' };

export { Default };
