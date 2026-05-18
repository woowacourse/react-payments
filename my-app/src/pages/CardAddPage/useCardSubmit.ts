import { useNavigate } from 'react-router-dom';
import { useAsync } from '../../components/common/commonHooks/useAsync';
import {
  ISSUER_CODES,
  type CardCompany,
} from '../../components/cardCompanySection/CardCompanyConstants';
import { postCard } from '../../api/cardApi';
import type { FormState } from './useCardFormState';

export const useCardSubmit = (formState: FormState, isFormValid: boolean) => {
  const navigate = useNavigate();
  const { run, error } = useAsync<{ id: string }>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    // 서버에 보낼 데이터 정리
    const sendingData = {
      number: formState.cardNumber.join(''),
      expirationDate: `${formState.expirationDate.month}/${formState.expirationDate.year}`,
      cvc: formState.cvc,
      issuerCode: ISSUER_CODES[formState.cardCompany as CardCompany],
    };

    try {
      const response = await run(() => postCard(sendingData));

      // 라우팅 페이지 연결
      navigate('/card-add-success', {
        replace: true,
        state: {
          id: response.id,
          cardNumberPrefixFourth: formState.cardNumber[0],
          cardCompany: formState.cardCompany,
        },
      });
    } catch (err) {
      alert('카드 등록 중 서버 오류가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  const serverError = error as unknown as {
    code: string;
    message: string;
  } | null;

  return { handleSubmit, serverError };
};
