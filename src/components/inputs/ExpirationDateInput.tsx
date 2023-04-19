import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import InputSeparator from '../common/InputSeparator';

const ExpirationDateInput = () => {
  return (
    <InputGroup labelValue='만료일'>
      <InputBox width='137px'>
        <Input placeholder='MM' />
        <InputSeparator color='#737373'>/</InputSeparator>
        <Input placeholder='YY' />
      </InputBox>
    </InputGroup>
  );
};

export default ExpirationDateInput;
