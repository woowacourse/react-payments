import { useContext } from 'react';
import { createPortal } from 'react-dom';

import * as styled from './CardRegisterPage.styled';
import CardPreview from '../../CardPreview/CardPreview';
import CardRegisterForm from '../../CardRegisterForm/CardRegisterForm';
import BottomSheet from '../../BottomSheet/BottomSheet';
import CardCompanyContents from '../../CardCompanyContents/CardCompanyContents';
import CardInfoContext from '../../../contexts/CardInfoContext';

const CardRegisterPage = () => {
  const { cardCompany } = useContext(CardInfoContext);
  const isOpenBottomSheet = !cardCompany.name && !cardCompany.theme;

  return (
    <styled.CardRegisterPage>
      <CardPreview />
      <CardRegisterForm />
      {isOpenBottomSheet &&
        createPortal(<BottomSheet CardCompanyContents={<CardCompanyContents />} />, document.body)}
    </styled.CardRegisterPage>
  );
};

export default CardRegisterPage;
