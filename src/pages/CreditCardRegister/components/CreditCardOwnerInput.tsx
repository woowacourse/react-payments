import Input from '../../../components/Input';
import * as S from '../style';
import InputLayout from './InputLayout';

type Props = {
  creditCardOwner: string;
  errorMessage: string | null;
  setCreditCardOwner: React.Dispatch<React.SetStateAction<string>>;
};

function CreditCardOwnerInput({ creditCardOwner, errorMessage, setCreditCardOwner }: Props) {
  const handleChangeCreditCardOwner = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value.toUpperCase();
    if (newName.length <= 20) {
      setCreditCardOwner(newName);
    }
  };

  return (
    <InputLayout errorMessage={errorMessage}>
      <S.FlexBox justifyContent="space-between">
        <S.CreditCardRegisterLabel>카드 소유자 이름 (선택)</S.CreditCardRegisterLabel>
        <S.CreditCardRegisterLabel>
          {creditCardOwner.length}
          /20
        </S.CreditCardRegisterLabel>
      </S.FlexBox>
      <Input
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        type="string"
        value={creditCardOwner}
        width="100%"
        textAlign="start"
        onChange={handleChangeCreditCardOwner}
        maxLength={20}
      />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </InputLayout>
  );
}

export default CreditCardOwnerInput;
