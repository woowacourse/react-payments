import Input from '../../../components/Input';
import * as S from '../style';

type Props = {
  creditCardOwner: string,
  setCreditCardOwner: React.Dispatch<React.SetStateAction<string>>,
};

function CreditCardOwnerInput({ creditCardOwner, setCreditCardOwner }: Props) {
  const handleChangeCreditCardOwner = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = (event.target.value).toUpperCase();
    if (newName.length <= 30) {
      setCreditCardOwner(newName);
    }
  };

  return (
    <>
      <S.FlexBox justifyContent="space-between">
        <S.CreditCardRegisterLabel>카드 소유자 이름 (선택)</S.CreditCardRegisterLabel>
        <S.CreditCardRegisterLabel>
          {creditCardOwner.length}
          /30
        </S.CreditCardRegisterLabel>
      </S.FlexBox>
      <Input placeholder="카드에 표시된 이름과 동일하게 입력하세요." type="string" value={creditCardOwner} width="100%" textAlign="start" onChange={handleChangeCreditCardOwner} />
    </>
  );
}

export default CreditCardOwnerInput;
