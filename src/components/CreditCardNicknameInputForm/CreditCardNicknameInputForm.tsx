import CreditCard from 'components/CreditCard/CreditCard';
import styled from 'styled-components';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { CreditCard as CreditCardType } from 'types';
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

interface CreditCardNicknameInputFormProps {
  creditCardForm: CreditCardType;
  nickname: string;
  setNickname: Dispatch<SetStateAction<string>>;
}

function CreditCardNicknameInputForm(
  { creditCardForm, nickname, setNickname }: CreditCardNicknameInputFormProps
) {
  const handleNicknameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
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
  );
}
export default CreditCardNicknameInputForm;
