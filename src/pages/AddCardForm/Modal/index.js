import { CardCompanySelection, Modal, SecurityCodeGuide } from '../../../components';

export default function AddCardFormModal({ onCloseModal, modalContents, onSetCardCompany }) {
  return (
    <Modal onCloseModal={onCloseModal}>
      {modalContents === 'cardSelection' && (
        <CardCompanySelection onSetCardCompany={onSetCardCompany}></CardCompanySelection>
      )}
      {modalContents === 'questionMark' && <SecurityCodeGuide />}
    </Modal>
  );
}
