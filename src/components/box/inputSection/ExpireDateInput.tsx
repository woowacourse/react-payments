import type { CardType } from '../../../types';

import InputSectionTemplate from '../../template/InputSectionTemplate';
import InputBox from '../../common/InputBox';
import Input from '../../common/Input';

interface Props {
  expireDate: CardType['expireDate'];
  setExpireDateIndex: (index: number) => (value: CardType['expireDate'][number]) => void;
}

const ExpireDateInput = ({ expireDate, setExpireDateIndex }: Props) => {
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
          />
        ))}
      </InputBox>
    </InputSectionTemplate>
  );
};

export default ExpireDateInput;
