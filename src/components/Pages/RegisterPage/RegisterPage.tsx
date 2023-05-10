import { useModal } from '../../../hooks/useModal';
import { AarkerModal as BottomSheet } from 'react-aarker-modal';

import * as styled from './RegisterPage.styled';
import CardPreviewSection from '../../CardPreviewSection/CardPreviewSection';
import RegisterForm from '../../RegisterForm/RegisterForm';
import CompanyLogoList from '../../CompanyLogoList/CompanyLogoList';

const RegisterPage = () => {
  const { isOpenModal, handleModalClose, handleModalOpen } = useModal();

  return (
    <styled.RegisterPageLayout>
      <CardPreviewSection handleModalOpen={handleModalOpen} />
      <RegisterForm />
      <BottomSheet
        isOpenModal={isOpenModal}
        handleModalClose={handleModalClose}
      >
        <CompanyLogoList handleModalClose={handleModalClose} />
      </BottomSheet>
    </styled.RegisterPageLayout>
  );
};

export default RegisterPage;
