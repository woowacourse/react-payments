import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputSeparator from '../common/InputSeparator';

const CardNumberInput = () => {
  return (
    <InputBox labelValue='카드 번호'>
      <>
        <Input />
        <InputSeparator>-</InputSeparator>
        <Input />
        <InputSeparator>-</InputSeparator>
        <Input type='password' />
        <InputSeparator>-</InputSeparator>
        <Input type='password' />
      </>
    </InputBox>
  );
};

export default CardNumberInput;
