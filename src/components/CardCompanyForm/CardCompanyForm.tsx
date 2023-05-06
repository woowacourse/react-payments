import CardLogo from '../@common/CardLogo';
import * as Styled from './CardCompanyForm.styles';
import { IMAGE_PATH } from '../../types/Image';
import { Dispatch, SetStateAction } from 'react';

interface cardCompanyModalProps {
  setCardCompany: Dispatch<SetStateAction<string>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const getCompanyInfos = () => {
  return Object.entries(IMAGE_PATH);
};

const CardCompanyForm = ({
  setCardCompany,
  setIsModalOpen,
}: cardCompanyModalProps) => {
  return (
    <>
      <Styled.FormWrapper>
        {getCompanyInfos().map(([companyName, companyImage]) => (
          <CardLogo
            key={companyName}
            companyImage={companyImage}
            companyName={companyName}
            setCardCompany={setCardCompany}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
      </Styled.FormWrapper>
    </>
  );
};

export default CardCompanyForm;
