import Input from '../../../common/inputForm/input/Input';
import InputForm from '../../../common/inputForm/InputForm';

function CardCVCInput() {
  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const cvc = e.target.value;
    // cvc 검증 관련
  }

  return (
    <>
      <InputForm title='CVC 번호를 입력해 주세요.' label='CVC'>
        <Input
          type='tel'
          name='cardCVC'
          placeholder='123'
          maxLength={3}
          onChange={onChangeHandler}
        />
      </InputForm>
    </>
  );
}

export default CardCVCInput;
