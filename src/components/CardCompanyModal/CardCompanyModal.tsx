import CardLogo from '../@common/CardLogo';
import * as Styled from './CardCompanyModal.styles';

interface cardCompanyModalProps {
  setIsOpen: any;
}

const CardCompanyModal = ({ setIsOpen }: cardCompanyModalProps) => {
  return (
    <>
      <Styled.ModalBackdrop
        onClick={() => {
          setIsOpen(false);
        }}
      ></Styled.ModalBackdrop>
      <Styled.Modal>Modal</Styled.Modal>
    </>
  );
};

export default CardCompanyModal;
