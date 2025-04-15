import InputForm from '../../../common/inputForm/InputForm';
import Input from '../../../common/inputForm/input/Input';

function CardNumberInput() {
  function checkBrand(inputCardNumber: string) {
    if (inputCardNumber[0] === '4') {
      // cardPreview의 replaceLogo('visa')
      return 'visa;';
    }

    if (
      inputCardNumber[0] === '5' &&
      inputCardNumber[1] >= '1' &&
      inputCardNumber[1] <= '5'
    ) {
      return 'mastercard;';
    }
  }

  function validateCardNumber() {
    console.log('validate!');
  }

  function onChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const inputCardNumber = e.target.value;
    if (index === 0) checkBrand(inputCardNumber);
    validateCardNumber(inputCardNumber);
  }

  const inputs = Array.from({ length: 4 }).map((_, index) => {
    return (
      <Input
        type='tel'
        name='cardNumber'
        placeholder='1234'
        maxLength={4}
        onChange={(e) => onChangeHandler(e, index)}
      />
    );
  });

  return (
    <>
      <InputForm
        title='결제할 카드 번호를 입력해주세요.'
        description='본인 명의의 카드만 결제 가능합니다.'
        label='카드 번호'
      >
        {inputs}
      </InputForm>
    </>
  );
}

export default CardNumberInput;
