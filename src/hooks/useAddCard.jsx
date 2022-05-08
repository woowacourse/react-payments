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
      if (err.message === 'Failed to fetch') {
        alert('현재 홈페이지 사용이 불가능합니다. 관리자에게 문의 바랍니다.');

        return;
      }
      alert(err.message);

      navigateToHome();
    }
  };

  return handler;
}
