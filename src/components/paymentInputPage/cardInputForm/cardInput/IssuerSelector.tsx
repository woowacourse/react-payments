import useCard from '../../../../hooks/useCard';
import InputForm from '../../../common/inputForm/InputForm';
import Select from '../../../common/select/Select';

export const ISSUER_LIST = new Map([
  ['BC카드', 'bc'],
  ['신한카드', 'shinhan'],
  ['카카오뱅크', 'kakao'],
  ['현대카드', 'hyundai'],
  ['우리카드', 'woori'],
  ['롯데카드', 'lotte'],
  ['하나카드', 'hana'],
  ['국민카드', 'kb'],
]);

export interface CardIssuerSelectorProps {
  isValid: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

function CardIssuerSelector({ isValid, setIsValid }: CardIssuerSelectorProps) {
  const { cardIssuer, setCardIssuer } = useCard();

  function validateIssuerChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const value = target.value;

    if (!ISSUER_LIST.has(value)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  return (
    <>
      <InputForm
        title='카드사를 선택해 주세요.'
        description='현재 국내 카드사만 가능합니다.'
      >
        <Select
          name='CardIssuer'
          placeholder='카드사를 선택해주세요'
          optionList={Array.from(ISSUER_LIST.keys())}
          selectedValue={cardIssuer}
          setSelectedValue={setCardIssuer}
          handleSelectedInputChange={validateIssuerChange}
          isRequired={true}
        />
      </InputForm>
    </>
  );
}

export default CardIssuerSelector;
