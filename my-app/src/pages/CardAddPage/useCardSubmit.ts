import { useNavigate } from 'react-router-dom';
import { useAsync } from '../../components/common/commonHooks/useAsync';
import type { FormState } from './useCardFormState';
import { sendingDataFormatter } from '../../utils/SendingDataFormatter';
import { cardRepositoryInstance } from '../../repository/cardRepositoryInstance';

export const useCardSubmit = (formState: FormState, isFormValid: boolean) => {
  const navigate = useNavigate();
  const { run, error } = useAsync<{ id: string }>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    // 서버에 보낼 데이터 포매팅
    const sendingData = sendingDataFormatter(formState);

    const response = await run(() => cardRepositoryInstance.postCard(sendingData));
    if (!response) return;

    // 라우팅 페이지 연결
    navigate('/card-add-success', {
      replace: true,
      state: {
        id: response.id,
        cardNumberPrefixFourth: formState.cardNumber[0],
        cardCompany: formState.cardCompany,
      },
    });
  };

  const serverErrorMessage = error instanceof Error ? error.message : null;

  return { handleSubmit, serverError: serverErrorMessage };
};
