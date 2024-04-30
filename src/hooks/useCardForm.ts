import useCardNumbers from './useCardNumbers';
import useCardBrand from './useCardBrand';
import useExpireDate from './useExpireDate';
import useUserName from './useUserName';
import useCVC from './useCVC';
import usePassword from './usePassword';

// 커스텀 훅 정의
export default function useCardForm({
  initCardNumber1 = '',
  initCardNumber2 = '',
  initCardNumber3 = '',
  initCardNumber4 = '',
  initExpirationDate = { month: '', year: '' },
  initUserName = '',
  initCardBrand = '',
  initCVC = '',
  initPassword = '',
}) {
  const {
    cardNumbers,
    handleUpdateCardNumberInput,
    handleUpdateCardNumberErrorMessages,
  } = useCardNumbers(
    initCardNumber1,
    initCardNumber2,
    initCardNumber3,
    initCardNumber4
  );
  const {
    expirationDate,
    handleUpdateExpirationDateInput,
    handleUpdateExpirationDateErrorMessages,
  } = useExpireDate(initExpirationDate);
  const {
    userName,
    handleUpdateUserNameIsNextPage,
    handleUpdateUserNameInput,
    handleUpdateUserNameErrorMessages,
  } = useUserName(initUserName);
  const { cardBrand, handleUpdateCardBrand, handleUpdateCardBrandIsNextField } =
    useCardBrand(initCardBrand);

  const { CVC, handleUpdateCVCInput, handleUpdateCVCErrorMessages } =
    useCVC(initCVC);

  const {
    password,
    handleUpdatePasswordInput,
    handleUpdatePasswordErrorMessages,
  } = usePassword(initPassword);

  return {
    cardNumbers,
    handleUpdateCardNumberInput,
    handleUpdateCardNumberErrorMessages,
    expirationDate,
    handleUpdateExpirationDateInput,
    handleUpdateExpirationDateErrorMessages,
    userName,
    handleUpdateUserNameIsNextPage,
    handleUpdateUserNameInput,
    handleUpdateUserNameErrorMessages,
    cardBrand,
    handleUpdateCardBrand,
    handleUpdateCardBrandIsNextField,
    CVC,
    handleUpdateCVCInput,
    handleUpdateCVCErrorMessages,
    password,
    handleUpdatePasswordInput,
    handleUpdatePasswordErrorMessages,
  };
}
