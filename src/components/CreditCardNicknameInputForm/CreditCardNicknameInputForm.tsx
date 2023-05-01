import CreditCard from 'components/CreditCard/CreditCard';
import styled from 'styled-components';
import { ChangeEvent, useState } from 'react';
import useCreditCardForm from 'hooks/useCreditCardForm';
import ControlButton from 'components/ControlButton';
import { useNavigate } from 'react-router-dom';
import { creditCardListStore } from 'stores/creditCardListStore';
import * as S from './style';

const NicknameInput = styled.input`
  border-width: 0px 0px 1px 0px;

  width: 100%;

  margin-top: 100px;
  padding: 10px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
`;

function CreditCardNicknameInputForm() {
  const navigate = useNavigate();
  const { creditCardForm } = useCreditCardForm();
  const [nickname, setNickname] = useState('');

  const handleNicknameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const submitNicknameInput = () => {
    creditCardListStore.updateNickname(creditCardForm.number, nickname);
    navigate('/');
  };

  return (
    <>
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

        <NicknameInput
          value={nickname}
          onChange={handleNicknameInput}
          placeholder="카드 별명을 입력하세요"
        />
      </S.CreditCardNicknameInputFormLayout>
      <ControlButton onClick={submitNicknameInput}>
        {nickname.length > 0 ? '확인' : '건너뛰기'}
      </ControlButton>
    </>
  );
}
export default CreditCardNicknameInputForm;
