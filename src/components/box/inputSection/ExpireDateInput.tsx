import InputSectionTemplate from '../../template/InputSectionTemplate';
import InputBox from '../../common/InputBox';
import Input from '../../common/Input';

import { useCardForm } from '../../../context/CardFormContext';
import { validExpireDate } from '../../../domain/validator';

interface Props {
  insert: (index: number) => (element: HTMLInputElement | null) => void;
  focus: (index: number) => (go: number) => void;
}

const ExpireDateInput = ({ insert, focus }: Props) => {
  const [{ expireDate }, dispatch] = useCardForm();

  const setExpireDateIndex = (index: number) => (value: string) => {
    dispatch({ type: 'SET_LIST_VALUE', key: 'expireDate', index, value });
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
