import type { CardType } from '../../../types';

import InputSectionTemplate from '../../template/InputSectionTemplate';
import InputBox from '../../common/InputBox';
import Input from '../../common/Input';

interface Props {
  expireDate: CardType['expireDate'];
  setExpireDateIndex: (index: number) => (value: CardType['expireDate'][number]) => void;
  insert: (index: number) => (element: HTMLInputElement | null) => void;
  focus: (index: number) => (go: number) => void;
}

const ExpireDateInput = ({ expireDate, setExpireDateIndex, insert, focus }: Props) => {
  return (
    <InputSectionTemplate label="만료일">
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
