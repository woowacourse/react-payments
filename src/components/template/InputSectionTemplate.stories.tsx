import InputBox from '../common/InputBox';
import InputSectionTemplate from './InputSectionTemplate';

import useList from '../../utils/useList';
import useFocusRef from '../../utils/useFocusRef';
import Input from '../common/Input';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'InputSectionTemplate',
  component: InputSectionTemplate,
};

export function PhoneNumberInputSection() {
  const [phoneNumber, setPhoneNumber] = useList(['010', '', '']);
  const [insert, focus] = useFocusRef();

  return (
    <InputSectionTemplate
      label="전화번호를 입력해주세요"
      countLength={phoneNumber.join('').length}
      maxLength={11}
    >
      <InputBox align="center" separator="-" isFullWidth>
        <Input
          textType="number"
          value={phoneNumber[0]}
          setValue={setPhoneNumber(0)}
          length={3}
          insert={insert(0)}
          focus={focus(0)}
          placeholder="010"
        />
        <Input
          textType="number"
          value={phoneNumber[1]}
          setValue={setPhoneNumber(1)}
          length={4}
          insert={insert(1)}
          focus={focus(1)}
          placeholder="1234"
        />
        <Input
          textType="number"
          value={phoneNumber[2]}
          setValue={setPhoneNumber(2)}
          length={4}
          insert={insert(2)}
          focus={focus(2)}
          placeholder="5678"
        />
      </InputBox>
    </InputSectionTemplate>
  );
}
