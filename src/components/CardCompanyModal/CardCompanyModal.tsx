import CardLogo from '../@common/CardLogo';
import * as Styled from './CardCompanyModal.styles';
import { IMAGE_PATH } from '../../types/images';
import { Dispatch, SetStateAction } from 'react';

interface cardCompanyModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setCardCompany: Dispatch<SetStateAction<string>>;
}

const getCompanyInfos = () => {
  return Object.entries(IMAGE_PATH);
};

const CardCompanyModal = ({
  setIsModalOpen,
  setCardCompany,
}: cardCompanyModalProps) => {
  return (
    <>
      <Styled.ModalBackdrop
        onClick={() => {
          setIsModalOpen(false);
        }}
      ></Styled.ModalBackdrop>
      <Styled.Modal>
        {getCompanyInfos().map(([companyName, companyImage]) => (
          <CardLogo
            companyImage={companyImage}
            companyName={companyName}
            setCardCompany={setCardCompany}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
      </Styled.Modal>
    </>
  );
};

export default CardCompanyModal;
