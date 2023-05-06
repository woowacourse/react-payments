import CreditCard from 'components/CreditCard';
import { ChangeEvent, useState } from 'react';
import useCreditCardForm from 'hooks/useCreditCardForm';
import ControlButton from 'components/ControlButton';
import { useCreditCardList } from 'hooks/useCreditCardList';
import LoadingSpinner from 'components/LoadingSpinner';
import * as S from './style';

function CreditCardNicknameInputForm() {
  const { creditCardForm } = useCreditCardForm();
  const { isLoading, updateNickname } = useCreditCardList();
  const [nickname, setNickname] = useState('');

  const handleNicknameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const submitNicknameInput = () => {
    updateNickname(creditCardForm.number, nickname);
  };

  return (
    <div>
      <S.CreditCardNicknameInputFormLayout>
        <S.CreditCardPreview>
          <CreditCard
            fullFilled
            creditCard={{
              companyId: creditCardForm.companyId,
              number: creditCardForm.number,
              expiry: creditCardForm.expiry,
              owner: creditCardForm.owner,
            }}
          />
        </S.CreditCardPreview>

        {isLoading
          ? (
            <LoadingSpinner label={nickname.length > 0 ? '카드 별명을 설정중입니다...' : ''} />
          ) : (
            <S.NicknameInput
              data-testid="nickname-input"
              value={nickname}
              onChange={handleNicknameInput}
              placeholder="카드 별명을 입력하세요"
            />
          )}
      </S.CreditCardNicknameInputFormLayout>

      {!isLoading && (
        <ControlButton onClick={submitNicknameInput}>
          {nickname.length > 0 ? '확인' : '건너뛰기'}
        </ControlButton>
      )}

    </div>
  );
}
export default CreditCardNicknameInputForm;
