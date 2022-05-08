import { useContext } from 'react';

import { useNavigateTo } from 'hooks';

import { CardContext } from 'contexts/CardContext';
import { addCardFetcher } from 'utils/fetcher';
import { ERROR_MESSAGE } from 'constants';

export default function useAddCard() {
  const navigateToHome = useNavigateTo('/card-list');
  const { cardNumber, cardOwnerName, validDate, cardKind } =
    useContext(CardContext);

  const handleAddCard = async (e) => {
    e.preventDefault();
    const cardNickname = e.target.nickname.value;
    const cardFormData = {
      cardNumber,
      cardOwnerName,
      validDate,
      cardKind,
      cardNickname,
    };
    const requiredList = [cardNumber, validDate, cardKind];
    const isRequiredDataExist = requiredList.every((value) => value !== '');

    try {
      if (isRequiredDataExist) {
        await addCardFetcher(cardFormData);
      }

      navigateToHome();
    } catch (err) {
      if (err.message === 'Failed to fetch') {
        alert(ERROR_MESSAGE.SERVICE_NOT_WORKING);

        return;
      }
      alert(err.message);

      navigateToHome();
    }
  };

  return handleAddCard;
}
