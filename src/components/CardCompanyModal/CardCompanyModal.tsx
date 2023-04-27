import CardLogo from '../@common/CardLogo';
import * as Styled from './CardCompanyModal.styles';
import { IMAGE_PATH } from '../../types/images';
import { Dispatch, SetStateAction } from 'react';

interface cardCompanyModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const getCompanyInfos = () => {
  return Object.entries(IMAGE_PATH);
};

const CardCompanyModal = ({ setIsModalOpen }: cardCompanyModalProps) => {
  return (
    <>
      <Styled.ModalBackdrop
        onClick={() => {
          setIsModalOpen(false);
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
