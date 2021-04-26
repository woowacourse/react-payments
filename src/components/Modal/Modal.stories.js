import { Modal } from '.';
import { CardCompanyList } from './ModalBody/CardCompanyList';

export default {
  title: 'Component/Modal',
  component: Modal,
  argTypes: {},
};

const Template = (args) => <Modal {...args} />;

export const CompanySelectModal = Template.bind({});
CompanySelectModal.args = {
  children: [<CardCompanyList selectedCompany={'로이드'} />],
};
