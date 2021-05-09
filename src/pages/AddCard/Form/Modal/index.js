import { Modal } from '../../../../components';
import SecurityCodeGuide from '../SecurityCode/SecurityCodeGuide';
import CardCompanySelection from './CardCompanySelection';

export default function FormModal({ onCloseModal, modalContents, setCardCompany }) {
  return (
    <Modal onCloseModal={onCloseModal}>
      {modalContents === 'cardSelection' && (
        <CardCompanySelection
          setCardCompany={(key) => {
            setCardCompany(key);
            onCloseModal();
          }}
        ></CardCompanySelection>
      )}
      {modalContents === 'questionMark' && <SecurityCodeGuide />}
    </Modal>
  );
}
