import CardLogo from '../@common/CardLogo';
import * as Styled from './CardCompanyModal.styles';
import { IMAGE_PATH } from '../../types/images';

interface cardCompanyModalProps {
  setIsOpen: any;
}

const getCompanyInfos = () => {
  return Object.entries(IMAGE_PATH);
};

const CardCompanyModal = ({ setIsOpen }: cardCompanyModalProps) => {
  return (
    <>
      <Styled.ModalBackdrop
        onClick={() => {
          setIsOpen(false);
        }}
      ></Styled.ModalBackdrop>
      <Styled.Modal>
        {getCompanyInfos().map(([companyName, companyImage]) => (
          <CardLogo companyImage={companyImage} companyName={companyName} />
        ))}
      </Styled.Modal>
    </>
  );
};

export default CardCompanyModal;
