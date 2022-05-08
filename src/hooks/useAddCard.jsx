import { useContext } from 'react';

import { useNavigateTo } from 'hooks';

import { CardContext } from 'contexts/CardContext';

import { addCardFetcher } from 'utils/fetcher';

export default function useAddCard(nextPath) {
  const navigateToNextPath = useNavigateTo(nextPath);
  const navigateToHome = useNavigateTo('/card-list');
  const { cardNumber, cardOwnerName, validDate, cardKind } =
    useContext(CardContext);

  const handler = async (e) => {
    e.preventDefault();
    const nickname = e.target.nickname.value;

    const cardFormData = {
      cardNumber,
      cardOwnerName,
      validDate,
      cardKind,
      nickname,
    };

    try {
      await addCardFetcher(cardFormData);

      navigateToNextPath();
    } catch (err) {
      alert(err.message);

      navigateToHome();
    }
  };

  return handler;
}
