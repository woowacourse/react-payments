import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';

const SecurityCodeInput = () => {
  return (
    <InputGroup labelValue={'보안 코드(CVC/CVV)'}>
      <InputBox width='100px'>
        <Input type='password' />
      </InputBox>
    </InputGroup>
  );
};

export default SecurityCodeInput;
