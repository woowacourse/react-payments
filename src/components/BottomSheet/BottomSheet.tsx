import { MouseEventHandler, forwardRef } from 'react';
import { Icon } from '../common/Icon/Icon';
import { CARDS_INFO } from '../../constants';
import { COMPANY_NAME } from 'components/common/Card/types';
import { isCompanyName } from 'util/guard';
import styled from 'styled-components';

export interface ModalProps {
  onClick: (bank: COMPANY_NAME) => void;
  closeModal: () => void;
}

type Ref = HTMLDivElement;

export const BottomSheet = forwardRef<Ref, ModalProps>(({ onClick, closeModal }: ModalProps) => {
  const handleSelectCompany: MouseEventHandler<HTMLSpanElement> = (e) => {
    if (isCompanyName(e.currentTarget.textContent!)) {
      const company: COMPANY_NAME = e.currentTarget.textContent;
      onClick(company);
      closeModal();
    }
  };

  return (
    <S.BottomSheetWrapper>
      {Object.values(CARDS_INFO).map((value, index) => {
        return (
          <Icon
            key={index}
            id={value.name}
            imgSrc={value.iconSvgPath}
            name={value.name}
            onClick={handleSelectCompany}
          />
        );
      })}
    </S.BottomSheetWrapper>
  );
});

const S = {
  BottomSheetWrapper: styled.div`
    display: grid;
    grid-template-columns: 80px 80px 80px 80px;
    justify-content: center;
  `,
};
