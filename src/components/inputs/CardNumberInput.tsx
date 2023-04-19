import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import InputSeparator from '../common/InputSeparator';

const CardNumberInput = () => {
  return (
    <InputGroup labelValue='카드 번호'>
      <InputBox>
        <Input />
        <InputSeparator>-</InputSeparator>
        <Input />
        <InputSeparator>-</InputSeparator>
        <Input type='password' />
        <InputSeparator>-</InputSeparator>
        <Input type='password' />
      </InputBox>
    </InputGroup>
  );
};

export default CardNumberInput;
