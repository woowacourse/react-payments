import { useContext, useEffect } from 'react';

import { useModal } from '../../../hooks/useModal';

import * as styled from './CardRegisterPage.styled';
import CardPreview from '../../CardPreview/CardPreview';
import CardRegisterForm from '../../CardRegisterForm/CardRegisterForm';
import PortalBottomSheet from '../../PortalBottomSheet/PortalBottomSheet';
import CardCompanyContents from '../../CardCompanyContents/CardCompanyContents';
import CardInfoContext from '../../../contexts/CardInfoContext';

const CardRegisterPage = () => {
  const { cardCompany } = useContext(CardInfoContext);
  const { isOpenModal, handleCloseModal, handleOpenModal } = useModal();

  useEffect(() => {
    if (cardCompany.name) handleCloseModal();
  }, [cardCompany.name]);

  return (
    <styled.CardRegisterPage>
      <CardPreview handleOpenModal={handleOpenModal} />
      <CardRegisterForm />
      {isOpenModal && (
        <PortalBottomSheet handleCloseModal={handleCloseModal}>
          <CardCompanyContents />
        </PortalBottomSheet>
      )}
    </styled.CardRegisterPage>
  );
};

export default CardRegisterPage;
