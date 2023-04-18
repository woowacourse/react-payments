import Input from '../common/Input';
import InputBox from '../common/InputBox';

const CardNumberInput = () => {
  return (
    <>
      <InputBox width='100%' labelValue='카드 번호'>
        <>
          <Input />
          <Input />
          <Input />
          <Input />
        </>
      </InputBox>
    </>
  );
};

export default CardNumberInput;
