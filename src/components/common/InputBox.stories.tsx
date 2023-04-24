import InputBox from './InputBox';
import Input from './Input';
import useFocusRef from '../../utils/useFocusRef';
import useList from '../../utils/useList';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'InputBox',
  component: InputBox,
};

export function AutoFocusNumber() {
  const [list, setList] = useList(['', '', '', '', '', '']);
  const [insert, focus] = useFocusRef();
  return (
    <InputBox align="center" separator="/">
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <Input
            textType="number"
            value={list[index]}
            setValue={setList(index)}
            length={4}
            insert={insert(index)}
            focus={focus(index)}
            placeholder="0000"
          />
        ))}
    </InputBox>
  );
}

export function PhoneNumber() {
  return (
    <InputBox align="center" separator="-" isFullWidth>
      <Input textType="number" value="010" setValue={() => {}} length={3} />
      <Input textType="number" value="1029" setValue={() => {}} length={4} />
      <Input textType="number" value="3847" setValue={() => {}} length={4} />
    </InputBox>
  );
}

export function Name() {
  return (
    <InputBox align="center">
      <Input textType="number" value="GANG HYEON" setValue={() => {}} length={20} textAlign="left" />
      <Input textType="number" value="YU" setValue={() => {}} length={10} textAlign="left" />
    </InputBox>
  );
}

export function Password() {
  return (
    <InputBox align="center">
      <Input textType="number" value="1234" setValue={() => {}} length={4} textSecurity />
    </InputBox>
  );
}

export function SplitPassword() {
  return (
    <InputBox align="center">
      <Input textType="number" value="1" setValue={() => {}} length={1} textSecurity />
      <Input textType="number" value="2" setValue={() => {}} length={1} textSecurity />
      <Input textType="number" value="3" setValue={() => {}} length={1} textSecurity />
      <Input textType="number" value="4" setValue={() => {}} length={1} textSecurity />
    </InputBox>
  );
}
