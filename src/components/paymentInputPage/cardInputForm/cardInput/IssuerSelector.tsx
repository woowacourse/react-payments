import useCardContext from '../../../../hooks/useCardContext';
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

export interface IssuerSelectorProps {
  isIssuerValid: boolean;
  setIsIssuerValid: React.Dispatch<React.SetStateAction<boolean>>;
}

function IssuerSelector({
  isIssuerValid,
  setIsIssuerValid,
}: IssuerSelectorProps) {
  const { cardIssuer, setCardIssuer } = useCardContext();

  function validateIssuerChange(e: React.MouseEvent<HTMLLIElement>) {
    const targetIssuer = e.currentTarget.textContent as string;

    if (!ISSUER_LIST.has(targetIssuer)) {
      setIsIssuerValid(false);
    } else {
      setIsIssuerValid(true);
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
          handleOptionClick={validateIssuerChange}
          isRequired={true}
        />
      </InputForm>
    </>
  );
}

export default IssuerSelector;
