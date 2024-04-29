import { Link, Navigate, useSearchParams } from 'react-router-dom';

import { Check } from '../../assets';
import { ROUTES } from '../../constants/Routes';

import * as S from './CardRegistrationCompletePage.style';

const CardRegistrationCompletePage = () => {
  const [searchParams] = useSearchParams();

  if ([...searchParams.entries()].length === 0) {
    return <Navigate to={ROUTES.ERROR} />;
  }

  const cardNumber = searchParams.get('number');
  const cardCompany = searchParams.get('company');

  return (
    <S.CardRegistrationCompleteLayout>
      <S.CheckBox>
        <img src={Check} alt="등록 완료" />
      </S.CheckBox>
      <S.CardRegistrationMessage>
        {cardNumber}로 시작하는
        <br />
        {cardCompany}가 등록되었어요.
      </S.CardRegistrationMessage>
      <Link to={ROUTES.HOME}>
        <S.ConfirmButton type="button">확인</S.ConfirmButton>
      </Link>
    </S.CardRegistrationCompleteLayout>
  );
};

export default CardRegistrationCompletePage;
