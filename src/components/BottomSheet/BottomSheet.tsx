import { ReactNode } from 'react';

import { setCardCompany } from '../../types/state';

import * as styled from './BottomSheet.styled';

const BottomSheet = ({
  CardCompanyContents,
  setCardCompany,
}: {
  CardCompanyContents: ReactNode;
  setCardCompany: setCardCompany;
}) => {
  return (
    <styled.BottomSheet>
      <styled.Backdrop />
      <styled.BottomSheetContainer>{CardCompanyContents}</styled.BottomSheetContainer>;
    </styled.BottomSheet>
  );
};

export default BottomSheet;
