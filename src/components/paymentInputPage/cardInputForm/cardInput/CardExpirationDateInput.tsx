import Input from '../../../common/inputForm/input/Input';
import InputForm from '../../../common/inputForm/InputForm';

function CardExpirationDateInput() {
  function onChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const expirationDate = e.target.value;
    if (index === 0) {
      //month관련 예외 처리
    } else {
      //year관련 예외 처리
    }
  }

  const inputs = Array.from({ length: 2 }).map((_, index) => {
    return (
      <Input
        type='tel'
        name='cardExpirationDate'
        placeholder={index === 0 ? 'MM' : 'YY'}
        onChange={(e) => onChangeHandler(e, index)}
        maxLength={2}
      />
    );
  });

  return (
    <>
      <InputForm
        title='카드 유효기간을 입력해 주세요.'
        description='월/년도(MMYY)를 순서대로 입력해 주세요.'
        label='유효기간'
      >
        {inputs}
      </InputForm>
    </>
  );
}

export default CardExpirationDateInput;
