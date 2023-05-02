import useCreditCardForm from 'hooks/useCreditCardForm';
import FlexBox from 'components/FlexBox';
import Input from '../../../components/Input';
import * as S from '../style';

function CreditCardOwnerInput() {
  const { creditCardForm, handleCreditCardOwnerChange } = useCreditCardForm();

  return (
    <div>
      <FlexBox justifyContent="space-between">
        <S.CreditCardRegisterLabel>
          카드 소유자 이름 (선택)
        </S.CreditCardRegisterLabel>
        <S.CreditCardRegisterLabel>
          {creditCardForm.owner?.length}
          /30
        </S.CreditCardRegisterLabel>
      </FlexBox>
      <Input
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        type="string"
        value={creditCardForm.owner}
        width="100%"
        textAlign="start"
        onChange={handleCreditCardOwnerChange}
      />
    </div>
  );
}

export default CreditCardOwnerInput;
