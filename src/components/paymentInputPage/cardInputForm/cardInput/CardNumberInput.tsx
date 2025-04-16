import { Dispatch, SetStateAction } from 'react';
import InputForm from '../../../common/inputForm/InputForm';
import Input from '../../../common/inputForm/input/Input';

const numbersArray = Array.from({ length: 4 }).fill('') as string[];

function CardNumberInput({
  setCardNumbers,
}: {
  setCardNumbers: Dispatch<SetStateAction<string[]>>;
}) {
  function validateCardNumber() {
    console.log('validate!');
  }

  function onChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const inputCardNumber = e.target.value;
    numbersArray[index] = inputCardNumber;
    setCardNumbers([...numbersArray]);
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
