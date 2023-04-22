import type { CardType } from '../../../types';

import InputSectionTemplate from '../../template/InputSectionTemplate';
import InputBox from '../../common/InputBox';
import Input from '../../common/Input';

interface Props {
  ownerName: CardType['ownerName'];
  setOwnerName: (value: CardType['ownerName']) => void;
}

const OwnerNameInput = ({ ownerName, setOwnerName }: Props) => {
  return (
    <InputSectionTemplate label="카드 소유자 이름(선택)" countLength={ownerName.length} maxLength={30}>
      <InputBox align="left" isFullWidth>
        <Input textType="string" value={ownerName} setValue={setOwnerName} length={30} textAlign="left" />
      </InputBox>
    </InputSectionTemplate>
  );
};

export default OwnerNameInput;
