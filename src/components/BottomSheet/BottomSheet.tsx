import { ReactNode } from 'react';

import * as styled from './BottomSheet.styled';

const BottomSheet = ({ CardCompanyContents }: { CardCompanyContents: ReactNode }) => {
  return (
    <styled.BottomSheet>
      <styled.Backdrop />
      <styled.BottomSheetContainer>{CardCompanyContents}</styled.BottomSheetContainer>;
    </styled.BottomSheet>
  );
};

export default BottomSheet;
