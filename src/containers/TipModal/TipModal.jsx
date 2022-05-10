import cvcImage from 'assets/jpg/cvc.jpg';
import ModalToast from 'common/Modal/ModalToast';

export default function TipModal({ onCloseModal }) {
  return (
    <ModalToast onCloseModal={onCloseModal}>
      <img alt="cvc 설명 이미지" src={cvcImage} />
    </ModalToast>
  );
}
