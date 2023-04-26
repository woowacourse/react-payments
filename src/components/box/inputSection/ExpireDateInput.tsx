import type { CardType } from '../../../types';

import InputSectionTemplate from '../../template/InputSectionTemplate';
import InputBox from '../../common/InputBox';
import Input from '../../common/Input';

import { useCardForm } from '../../../context/cardForm';
import { EXPIRE_DATE_VALID_MESSAGE } from '../../../constants';

interface Props {
  insert: (index: number) => (element: HTMLInputElement | null) => void;
  focus: (index: number) => (go: number) => void;
}

const ExpireDateInput = ({ insert, focus }: Props) => {
  const [{ expireDate }, dispatch] = useCardForm();

  const setExpireDateIndex = (index: number) => (value: string) => {
    dispatch({ type: 'SET_LIST_VALUE', key: 'expireDate', index, value });
  };

  const validExpireDate = (expireDate: CardType['expireDate']) => {
    if (expireDate.join('') === '') return;

    const [month, year] = expireDate.map(Number);
    const currentYear = new Date().getFullYear() - 2000;

    if (!(month >= 1 && month <= 12)) return EXPIRE_DATE_VALID_MESSAGE.invalidMonth;
    if (!(year >= currentYear && year <= currentYear + 5)) return EXPIRE_DATE_VALID_MESSAGE.invalidYear;
    return '';
  };

  return (
    <InputSectionTemplate label="만료일" message={validExpireDate(expireDate)}>
      <InputBox separator="/">
        {expireDate.map((value, index) => (
          <Input
            textType="number"
            value={value}
            setValue={setExpireDateIndex(index)}
            length={2}
            textAlign="center"
            required
            insert={insert(4 + index)}
            focus={focus(4 + index)}
          />
        ))}
      </InputBox>
    </InputSectionTemplate>
  );
};

export default ExpireDateInput;
