import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputSeparator from '../common/InputSeparator';

const ExpirationDateInput = () => {
  return (
    <InputBox width='137px' labelValue='만료일'>
      <>
        <Input placeholder='MM' />
        <InputSeparator color='#737373'>/</InputSeparator>
        <Input placeholder='YY' />
      </>
    </InputBox>
  );
};

export default ExpirationDateInput;
