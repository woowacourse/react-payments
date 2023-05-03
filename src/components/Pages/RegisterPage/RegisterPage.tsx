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
  const { isOpenModal, handleCloseModal, handleOpenModal } = useModal();

  useEffect(() => {
    if (company.name) handleCloseModal();
  }, [company.name, handleCloseModal]);

  return (
    <styled.RegisterPageLayout>
      <CardPreviewSection handleOpenModal={handleOpenModal} />
      <RegisterForm />
      {isOpenModal && (
        <BottomSheet handleCloseModal={handleCloseModal}>
          <CompanyLogoList />
        </BottomSheet>
      )}
    </styled.RegisterPageLayout>
  );
};

export default RegisterPage;
