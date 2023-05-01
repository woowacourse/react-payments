import CreditCardNicknameInputForm from 'components/CreditCardNicknameInputForm';
import ControlButton from 'components/ControlButton';
import useCreditCardForm from 'hooks/useCreditCardForm';
import CreditCardRegisterLayout from 'components/CreditCardRegisterLayout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { creditCardListStore } from 'stores/creditCardListStore';
import * as S from './style';

function CreditCardRegisterDone() {
  const { creditCardForm } = useCreditCardForm();
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();
  const handleNicknameInput = () => {
    creditCardListStore.updateNickname(creditCardForm.number, nickname);
    navigate('/');
  };

  return (
    <CreditCardRegisterLayout>
      <S.CreditCardRegisterTitle>
        <S.CreditCardRegisterTitleFont>카드 등록이 완료되었습니다.</S.CreditCardRegisterTitleFont>
      </S.CreditCardRegisterTitle>
      <CreditCardNicknameInputForm
        nickname={nickname}
        setNickname={setNickname}
      />
      <ControlButton
        onClick={handleNicknameInput}
      >
        {nickname.length > 0 ? '확인' : '건너뛰기'}
      </ControlButton>
    </CreditCardRegisterLayout>
  );
}
export default CreditCardRegisterDone;
