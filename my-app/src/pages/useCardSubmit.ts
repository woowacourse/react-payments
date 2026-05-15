import { useNavigate } from 'react-router-dom';
import { useAsync } from '../components/common/commonHooks/useAsync';
import {
  ISSUER_CODES,
  type CardCompany,
} from '../components/cardCompanySection/CardCompanyConstants';
import { postCard } from '../api/cardApi';

export const useCardSubmit = () => {
  const navigate = useNavigate();
  const { run, status, error } = useAsync<{ id: string }>();

  const submitCard = async (formState: any) => {
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
      console.error(err);
    }
  };

  return { submitCard, status, error };
};
