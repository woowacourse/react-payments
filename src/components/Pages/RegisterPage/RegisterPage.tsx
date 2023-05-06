import { useContext, useEffect } from 'react';

import { useModal } from '../../../hooks/useModal';

import * as styled from './RegisterPage.styled';
import CardPreviewSection from '../../CardPreviewSection/CardPreviewSection';
import RegisterForm from '../../RegisterForm/RegisterForm';
import BottomSheet from '../../BottomSheet/BottomSheet';
import CompanyLogoList from '../../CompanyLogoList/CompanyLogoList';
import CardContext from '../../../contexts/CardContext';

const RegisterPage = () => {
  const { company } = useContext(CardContext);
  const { isOpenModal, handleModalClose, handleModalOpen } = useModal();

  useEffect(() => {
    if (company.name) handleModalClose();
  }, [company.name, handleModalClose]);

  return (
    <styled.RegisterPageLayout>
      <CardPreviewSection handleModalOpen={handleModalOpen} />
      <RegisterForm />
      {isOpenModal ? (
        <BottomSheet handleModalClose={handleModalClose}>
          <CompanyLogoList />
        </BottomSheet>
      ) : null}
    </styled.RegisterPageLayout>
  );
};

export default RegisterPage;
