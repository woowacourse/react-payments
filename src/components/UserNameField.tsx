import INPUT_TYPE_CATEGORIES from '../constants/inputType';
import { Card } from '../types/card';
import FieldTitle from './FieldTitle';
import InputField from './InputField';

export default function UserNameField({
  cardInfo,
  handleInput,
}: {
  cardInfo: Card;
  handleInput: (value: Card) => void;
}) {
  const handleUserNameInput = (value: { [key: string]: string }) => {
    handleInput({
      ...cardInfo,
      ...value,
    });
  };
  return (
    <div>
      <FieldTitle title="카드 소유자 이름을 입력해 주세요" />
      <InputField
        inputTypes={INPUT_TYPE_CATEGORIES.USER_NAME}
        handleInput={handleUserNameInput}
      />
    </div>
  );
}
