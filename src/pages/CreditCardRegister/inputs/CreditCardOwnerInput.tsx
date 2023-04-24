import * as T from 'types';
import Input from '../../../components/Input';
import * as S from '../style';

type Props = {
  name: keyof T.CreditCard;
  creditCard: T.CreditCard;
  setCreditCard: React.Dispatch<React.SetStateAction<T.CreditCard>>;
};

function CreditCardOwnerInput({ name, creditCard, setCreditCard }: Props) {
  const handleChangeCreditCardOwner = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = (event.target.value).toUpperCase();
    if (newName.length <= 30) {
      setCreditCard({ ...creditCard, [name]: newName });
    }
  };

  return (
    <S.Box>
      <S.FlexBox justifyContent="space-between">
        <S.CreditCardRegisterLabel>카드 소유자 이름 (선택)</S.CreditCardRegisterLabel>
        <S.CreditCardRegisterLabel>
          {creditCard.owner?.length}
          /30
        </S.CreditCardRegisterLabel>
      </S.FlexBox>
      <Input
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        type="string"
        value={creditCard.owner}
        width="100%"
        textAlign="start"
        onChange={handleChangeCreditCardOwner}
      />
    </S.Box>
  );
}

export default CreditCardOwnerInput;
