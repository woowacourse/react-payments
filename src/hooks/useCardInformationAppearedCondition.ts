import { useState } from 'react';

interface CardInformationValidType {
  isCardNumberValid: boolean;
  isCardSelected: string;
  isExpirationDateValid: boolean;
  isUserNameValid: boolean;
  isCVCValid: boolean;
  isPasswordValid: boolean;
}

interface CardInformationAppearedConditionProps {
  defaultValue: AppearedConditionType;
  cardInformationValid: CardInformationValidType;
}

type AppearedConditionType =
  | '카드번호'
  | '카드선택'
  | '유효기간'
  | '사용자이름'
  | 'cvc'
  | '비밀번호';

const useCardInformationAppearedCondition = ({
  defaultValue,
  cardInformationValid,
}: CardInformationAppearedConditionProps) => {
  const [appearedCondition, setAppearedCondition] = useState<AppearedConditionType>(defaultValue);

  const isPasswordAppearedCondition = appearedCondition === '비밀번호';
  const isCVCAppearedCondition = isPasswordAppearedCondition || appearedCondition === 'cvc';
  const isUserNameAppearedCondition = isCVCAppearedCondition || appearedCondition === '사용자이름';
  const isExpirationDateAppearedCondition =
    isUserNameAppearedCondition || appearedCondition === '유효기간';
  const isCardSelectedAppearedCondition =
    isExpirationDateAppearedCondition || appearedCondition === '카드선택';

  const isSubmitButtonAppearedCondition =
    cardInformationValid.isCardNumberValid &&
    cardInformationValid.isCardSelected &&
    cardInformationValid.isExpirationDateValid &&
    cardInformationValid.isUserNameValid &&
    cardInformationValid.isCVCValid &&
    cardInformationValid.isPasswordValid;

  if (cardInformationValid.isCardNumberValid && !isCardSelectedAppearedCondition)
    setAppearedCondition('카드선택');
  if (cardInformationValid.isCardSelected && !isExpirationDateAppearedCondition)
    setAppearedCondition('유효기간');
  if (cardInformationValid.isExpirationDateValid && !isUserNameAppearedCondition)
    setAppearedCondition('사용자이름');
  if (cardInformationValid.isUserNameValid && !isCVCAppearedCondition) setAppearedCondition('cvc');
  if (cardInformationValid.isCVCValid && !isPasswordAppearedCondition)
    setAppearedCondition('비밀번호');

  return {
    cardInformationAppeardConditionState: {
      isPasswordAppearedCondition,
      isCVCAppearedCondition,
      isUserNameAppearedCondition,
      isExpirationDateAppearedCondition,
      isCardSelectedAppearedCondition,
      isSubmitButtonAppearedCondition,
    },
  };
};

export default useCardInformationAppearedCondition;
