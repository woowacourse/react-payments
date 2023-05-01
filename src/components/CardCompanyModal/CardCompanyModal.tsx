import CardLogo from '../@common/CardLogo';
import * as Styled from './CardCompanyModal.styles';
import { IMAGE_PATH } from '../../types/Image';
import { Dispatch, SetStateAction } from 'react';

interface cardCompanyModalProps {
  cardCompany: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setCardCompany: Dispatch<SetStateAction<string>>;
}

const getCompanyInfos = () => {
  return Object.entries(IMAGE_PATH);
};

const CardCompanyModal = ({
  cardCompany,
  setIsModalOpen,
  setCardCompany,
}: cardCompanyModalProps) => {
  return (
    <>
      <Styled.ModalBackdrop
        onClick={() => {
          cardCompany && setIsModalOpen(false);
        }}
      ></Styled.ModalBackdrop>
      <Styled.Modal>
        {getCompanyInfos().map(([companyName, companyImage]) => (
          <CardLogo
            key={companyName}
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
