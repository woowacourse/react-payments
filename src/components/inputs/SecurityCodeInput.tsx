import Input from '../common/Input';
import InputBox from '../common/InputBox';

const SecurityCodeInput = () => {
  return (
    <InputBox width='100px' labelValue={'보안 코드(CVC/CVV)'}>
      <Input type='password' />
    </InputBox>
  );
};

export default SecurityCodeInput;
