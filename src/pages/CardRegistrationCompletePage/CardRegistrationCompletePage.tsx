import { Check } from '../../assets';

import * as S from './CardRegistrationCompletePage.style';

const CardRegistrationCompletePage = () => {
  return (
    <S.CardRegistrationCompleteLayout>
      <S.CheckBox>
        <img src={Check} />
      </S.CheckBox>
      <S.CardRegistrationMessage>
        1234로 시작하는
        <br />
        BC카드가 등록되었어요.
      </S.CardRegistrationMessage>
      <S.ConfirmButton type="button">확인</S.ConfirmButton>
    </S.CardRegistrationCompleteLayout>
  );
};

export default CardRegistrationCompletePage;
