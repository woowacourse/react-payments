import { BottomModal } from '../../components/commons/modal/BottomModal';

export default {
  title: 'Commons/Modal',
  component: BottomModal,
};

const Template = args => <BottomModal {...args}></BottomModal>;

export const Default = Template.bind({});
Default.args = { closeModal: () => {} };

export const Custom = Template.bind({});
Custom.args = {
  backgroundColor: 'black',
  closeModal: () => {},
};
